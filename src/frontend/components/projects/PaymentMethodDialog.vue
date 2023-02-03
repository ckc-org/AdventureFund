<template>
  <v-dialog
    :value="value"
    max-width="445px"
    @click:outside="$emit('input')"
    @keydown.esc="$emit('input')"
    overlay-color="white"
    overlay-opacity=".6"
    transition="slide-y-transition"
  >
    <v-card class="py-3">
      <v-card-title>
        Select payment method:
      </v-card-title>
      <v-card-text>
<!--        List of payment methods tied to this user here-->
        <!--        <PaymentMethod />-->
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between align-end mt-3">
        <v-btn
          depressed
          @click="$emit('input')"
          class="weight-700 greycliff cancel-btn opacity-8"
          height="25px"
        >
          Cancel
        </v-btn>
        <v-btn
          class="poppins font-16"
          depressed
          color="primary"
          @click="$emit('select_card', selected_card)"
        >
          Select
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PaymentMethodSelect from "../payments/PaymentMethodSelect"
import PaymentMethod from "../payments/PaymentMethod"

export default {
  components: { PaymentMethod, PaymentMethodSelect },
  props: {
    value: Boolean,
  },
  data: () => ({
    // dialog: true,
    selected_card: null
  }),
  methods: {
    // async do_deletion() {
    //   try {
    //     this.deleting = true
    //     await this.$axios.delete(`/api/payment_methods/${ this.method.djstripe_id }/`)
    //     await this.$store.dispatch('user/transactions/get_payment_methods', { mine: true })
    //     await this.$auth.fetchUser()
    //     this.$emit('input')
    //   } catch (e) {
    //     console.error(`Could not delete card: ${ e }`)
    //     this.$snackbar({ content: "Error deleting card.", type: 'error', timeout: 4000 })
    //   } finally {
    //     this.deleting = false
    //
    //   }
    // }
  }
}
</script>

<style scoped lang="stylus">
.v-dialog__content
  align-items flex-start !important

.cancel-btn
  border-bottom 2px solid var(--v-primary-base)
  border-radius 0
  letter-spacing 0 !important
  background transparent !important
</style>
