<template>
  <v-card-text class="black--text d-flex flex-column justify-center">
    <div class="font-20 weight-700 mb-1">{{ project.title }}</div>

    <div class="d-flex" :class="show_description ? 'mt-2' : ''">
      <div>
        <div class="opacity-5">
          <v-icon size="18" color="black">mdi-account</v-icon>
          {{ project.author }}
        </div>

        <div class="opacity-5">
          <v-icon size="18" color="black">mdi-flag-checkered</v-icon>
          ${{ $format_with_commas(project.goal) }}
        </div>

        <div class="opacity-5">

          <v-icon size="18" color="black">mdi-account-group</v-icon>
          {{ project.contribution_count }} contributions

        </div>
        <v-sheet width="125px" class="mt-2">
          <v-progress-linear
            :value="project.percent_funded"
            background-color="grey"
            height="14px"
          >
            <template v-slot:default="{ value }">
              <div class="weight-700 white--text font-10">{{ value }}% funded</div>
            </template>
          </v-progress-linear>
        </v-sheet>
      </div>
      <div class="ml-5 description" v-if="show_description">
        {{ project.description }}
      </div>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: {
    project: { type: Object, default: () => ({}) },
    show_description: Boolean,
  },
  data: () => ({})
}
</script>

<style scoped lang="stylus">
.description
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // shits not working and making me mad lol
  -webkit-box-orient: vertical;
</style>
