<template>
  <v-sheet :min-width="is_mobile ? null : min_width || '400px'">
    <button class="d-flex align-center" @click="expand_form = !expand_form">
      <v-icon color="primary" size="50" class="menu-arrow">
        {{ is_open ? "mdi-menu-down" : 'mdi-menu-right' }}
      </v-icon>
      <span class="pt-1">
        {{ label || 'Add a new payment method' }}
      </span>
    </button>
    <div v-if="is_open" class="fade-in ml-7 payment-form-override">
      <PaymentForm
        v-if="payment_type === 0"
        @update_card="new_card=$event"
        @sync_payment_form="billing_details=$event"
        ref="form"
      />

      <v-checkbox
        v-model="is_default"
        class="mt-1"
        label="Make this my default payment method"
      />
      <div class="error--text">
        {{ error }}
      </div>
      <v-btn
        color="primary"
        depressed
        class="weight-700 black--text rounded-0 mt-6"
        large
        @click="add_payment_method"
        :loading="loading"
        :disabled="disable_add_payment_button"
      >
        Add Payment Method
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import PaymentForm from "./PaymentForm"
import { mapGetters } from "vuex"

export default {
  components: { PaymentForm },
  props: {
    label: String,
    open: Boolean,
    min_width: String,
    user_id: [String, Number],
    payment_type: { type: Number, default: 0 }  // 0 === card; 1 === ach;
  },
  computed: {
    ...mapGetters({
      is_mobile: 'app/is_mobile'
    }),
    is_open() {
      return this.open || this.expand_form
    },
    disable_add_payment_button() {
      return !this.new_card && !this.billing_details.email
    }
  },

  data: () => ({
    active_tab: 0,
    expand_form: false,
    new_card: null,
    is_default: false,
    error: '',
    loading: false,
    billing_details: {},

  }),
  methods: {
    async add_payment_method() {
      this.error = ''
      this.loading = true
      try {
        const payload = {
          card: this.new_card,
          is_default: this.is_default,
          billing_details: this.billing_details,
        }
        if (this.user_id) {
          payload.user_id = this.user_id
        }

        await this.$store.dispatch('user/transactions/add_card_payment_method', {
          payload,
          hide_snackbar: true
        })
        // Reset Form
        this.$refs.form.clear()
        this.is_default = false

        // Update our default payment method by completely refreshing user, simple n sweet
        await this.$auth.fetchUser()
        this.$emit('post_add')
        this.expand_form = false
      } catch (e) {
        console.error(e)

        if (e?.response?.data?.non_field_errors) {
          this.error = e?.response.data.non_field_errors
        } else {
          this.error = e?.message
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped lang="stylus">

.menu-arrow
  width 30px
</style>
