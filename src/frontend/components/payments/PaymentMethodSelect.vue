<template>
  <v-select
    v-model="selected_method"
    :items="payment_methods"
    outlined
    :height="selected_method ? '90px' : '40px'"
    :menu-props="{ bottom: true, offsetY: true }"
    placeholder="Select Payment Method"
    hide-details
    class="payment-methods"
    :disabled="disabled"
  >
    <template v-slot:no-data>
      <div class="py-2 px-5 opacity-6">No payment methods</div>
    </template>
    <template v-slot:selection="{ item }">
      <PaymentMethod :method="item" solo/>
    </template>
    <template v-slot:item="{item}">
      <PaymentMethod :method="item" class="rounded-0 payment-method"/>
    </template>
  </v-select>
</template>

<script>
import PaymentMethod from "./PaymentMethod"

export default {
  components: { PaymentMethod },
  props: {
    user: {
      type: Object, default: function() {
        return this.$auth.user
      }
    },
    incoming_card: Number,
    value: Object,
    disabled: Boolean,
    no_auto_fill: Boolean,
  },
  data: () => ({
    selected_method: null,
    payment_methods: []
  }),
  watch: {
    user: {
      deep: true,
      immediate: true,
      handler() {
        this.get_payment_methods()
      }
    },
    incoming_card: {
      immediate: true,
      handler() {
        this.select_incoming_card()
      }
    },
    payment_methods() {
      this.select_incoming_card()
    },
    selected_method() {
      this.$emit('input', this.selected_method)
    }
  },
  mounted() {
    this.selected_method = this.value
  },
  methods: {
    select_incoming_card() {
      if (this.incoming_card) {
        this.payment_methods.forEach((method) => {
          if (this.incoming_card === method.djstripe_id) {
            this.selected_method = method
          }
        })
      }
    },
    async get_payment_methods() {
      try {
        const params = this.user ? { user_id: this.user.id } : null
        this.payment_methods = await this.$store.dispatch('user/transactions/get_payment_methods', params)
        this.select_default_card()
      } catch (e) {
        console.error(e)
      }
    },
    select_default_card() {
      if (this.no_auto_fill) {
        return
      }
      if (!this.value && this.user.stripe_invoice_settings) {
        this.payment_methods.forEach((method) => {
          if (this.user.stripe_invoice_settings?.default_payment_method === method.id) {
            this.selected_method = method
          }
        })
        if (!this.selected_method && this.payment_methods.length) {
          // eslint-disable-next-line prefer-destructuring
          this.selected_method = this.payment_methods[0]
        }
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.payment-method:hover
  background var(--v-grey-e5-base)
  transition .2s

.payment-methods
  >>> .v-input__append-inner
    height 100%
    margin 0
    display flex
    align-items center

    .v-icon
      font-size 35px
</style>
