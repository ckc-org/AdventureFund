<template>
  <v-card class="fill-width fill-height elevation-0 px-2 py-1" :outlined="!solo">
    <div class="d-flex justify-space-between align-center">
      <div>
        <div :class="is_mobile ? 'font-14' : null">
          •••• •••• •••• {{ card.last4 }}
        </div>
        <div class="black--text weight-700 mt-3">
          {{ method.billing_details.name }}
        </div>
        <div class="black--text mt-1">
          Expires {{ card.exp_month }}/{{ card.exp_year - 2000 }}
        </div>
      </div>
      <div class="d-flex">
        <div class="mr-2 mt-2">
          <img
            v-if="icon_path(card)"
            :src="icon_path(card)"
            alt="credit card logo"
            height="31px"
          />
          <v-icon v-else size="41" color="black" class="opacity-8">mdi-credit-card-check-outline</v-icon>
        </div>
        <div class="d-flex flex-column">
          <v-menu
            left
            :menu-props="{ bottom: true, offsetY: true }"
            v-if="show_delete_action && !is_default"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                depressed
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>

            <v-list class="py-0 overflow-hidden" height="40px">
              <v-list-item @click="show_deletion_dialog = true">
                <div>
                  Delete
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            v-if="show_default_action"
            icon
            depressed
            @click="make_default"
            :class="{'no-pointer-events': is_default}"
            :loading="making_default"
          >
            <v-icon v-if="is_default" color="accent">mdi-star</v-icon>
            <v-icon v-else>mdi-star-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <ConfirmDialog
      v-model="show_deletion_dialog"
      :method="method"
      @input="delete_success"
    />
  </v-card>
</template>

<script>
import ConfirmDialog from "./ConfirmDialog"
import { mapGetters } from "vuex"

export default {
  components: { ConfirmDialog },
  props: {
    method: { type: Object, default: () => ({}) },
    show_delete_action: Boolean,
    show_default_action: Boolean,
    solo: Boolean,
    user: { type: Object, default: () => ({}) },
  },
  data: () => ({
    making_default: false,
    show_deletion_dialog: false
  }),
  computed: {
    ...mapGetters({
      is_mobile: 'app/is_mobile'
    }),
    card() {
      return this.method.card
    },
    is_default() {
      if (this.user?.stripe_invoice_settings) {
        return this.user.stripe_invoice_settings.default_payment_method === this.method.id
      } else {
        return false
      }
    },
  },
  methods: {
    icon_path(card) {
      try {
        if (card?.brand) {
          return require(`../../assets/images/misc/${ card.brand }.png`) // the module request
        }
      } catch (e) {
        return null
      }
    },
    async make_default() {
      try {
        this.making_default = true
        const payload = {
          is_default: true,
        }
        if (this.user.id !== this.$auth.user?.id) {
          payload.user_id = this.user.id
        }

        await this.$store.dispatch('user/transactions/make_default', {
          payload,
          method_id: this.method.djstripe_id
        })

        // Update our default payment method by completely refreshing user, simple n sweet
        this.$emit('refresh_user')

      } catch (e) {
        console.error(`Could not update card: ${ e }`)
        this.$snackbar({ content: "Error Occurred.", type: 'error', timeout: 4000 })
      } finally {
        this.making_default = false
      }
    },
    delete_success() {
      if (this.user.id) {
        this.$emit('refresh_user')
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
