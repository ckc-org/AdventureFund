<template>
  <v-card height="420px" class="fill-width">
    <v-progress-linear
      :value="project.percent_funded"
      background-color="transparent"
      height="1px"
    />
    <v-card-text class="pa-6">
      <div class="d-flex">
        <!--Top section-->
        <v-sheet width="50%">
          <div class="font-34 weight-700 primary--text">
            ${{ $format_with_commas(project.amount_funded) }}
          </div>
          <div class="opacity-5 mt-2">
            <v-icon size="18" color="black">mdi-flag-checkered</v-icon>
            of ${{ $format_with_commas(project.goal) }} goal
          </div>

          <div class="font-34 weight-700 mt-4 opacity-8 mt-8">
            {{ project.contribution_count }}
          </div>
          <div class="opacity-5 mt-2">
            <v-icon size="18" color="black">mdi-account-group</v-icon>
            contributions
          </div>
        </v-sheet>

        <v-sheet width="50%" class="d-flex justify-end">
          <v-progress-circular
            :value="project.percent_funded"
            color="primary"
            :rotate="-90"
            width="10"
            size="120"
          >
            <div class="font-34 weight-700 primary--text">
              {{ project.percent_funded }}%
            </div>
          </v-progress-circular>
        </v-sheet>
      </div>

      <div class="mt-16">
        <!--Bottom section-->
        <div>
          <v-btn
            depressed
            @click="click_donation_amount(1)"
            small
            class="weight-700 amt-btn"
            :class="{'primary white--text': donation_amount === 1}"
            height="28"
          >
            $1
          </v-btn>
          <v-btn
            depressed
            @click="click_donation_amount(5)"
            small
            class="weight-700 amt-btn"
            :class="{'primary white--text': donation_amount === 5}"

            height="28"
          >
            $5
          </v-btn>
          <v-btn
            depressed
            @click="click_donation_amount(25)"
            small
            class="weight-700 amt-btn"
            :class="{'primary white--text': donation_amount === 25}"

            height="28"
          >
            $25
          </v-btn>
          <v-btn
            depressed
            @click="click_donation_amount(75)"
            small
            class="weight-700 amt-btn"
            :class="{'primary white--text': donation_amount === 75}"

            height="28"
          >
            $75
          </v-btn>
          <v-btn
            depressed
            @click="set_show_custom_amount"
            small
            class="weight-700 amt-btn"
            :class="{'primary white--text': show_custom_amount}"
            height="28"
          >
            Custom
          </v-btn>
        </div>
        <div class="mt-5">
          <v-text-field
            v-if="show_custom_amount"
            v-model="custom_amount"
            outlined
            label="Amount"
            hide-details
            type="number"
          />
          <v-btn
            depressed
            class="white--text primary fill-width mt-3"
            height="50"
          >
            Contribute ${{ selected_amount || '0.00' }}
          </v-btn>
          <div class="mt-2" v-if="!show_custom_amount">
            Your contribution will get Chrisopher Colombus to
            ${{ $format_with_commas(selected_amount + project.amount_funded) }} of his
            ${{ $format_with_commas(project.goal) }} goal.
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: { type: Object, default: () => ({}) }
  },
  computed: {
    selected_amount() {
      return this.show_custom_amount ? this.custom_amount : this.donation_amount
    }
  },
  data: () => ({
    donation_amount: 5,
    custom_amount: '',
    show_custom_amount: false,
  }),
  methods: {
    set_show_custom_amount() {
      this.show_custom_amount = true
      this.donation_amount = 100
    },
    click_donation_amount(val) {
      this.donation_amount = val
      this.show_custom_amount = false
    }
  },
}
</script>

<style scoped lang="stylus">
.amt-btn
  background var(--v-grey-base)
</style>
