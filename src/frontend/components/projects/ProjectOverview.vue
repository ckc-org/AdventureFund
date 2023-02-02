<template>
  <v-container class="width-container pb-16">
    <v-row>
      <!--      Header content -->
      <v-col class="pa-0 mr-7">
        <div class="font-40 weight-700 black--text">
          {{ project.title }}
        </div>
        <div class="font-20 mb-5">
          Lead by {{ project.author }}
        </div>

        <v-img
          :src="project.banner_image"
          alt="Banner Image"
          height="400"
          width="100%"
        />
      </v-col>

      <v-col cols="4" class="d-flex align-end">
        <ContributeBlock :project="project"/>
      </v-col>
    </v-row>
    <!--    Body Content-->
    <v-row class="mt-7">
      <v-col></v-col>
      <v-col cols="4">
        <AboutAuthor :project="project"/>
        <LocationBlock class="mt-7" :project="project"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import ContributeBlock from "./ContributeBlock"
import AboutAuthor from "./AboutAuthorBlock"
import LocationBlock from "./LocationBlock"

export default {
  components: { LocationBlock, AboutAuthor, ContributeBlock },
  props: {
    project_id: { type: Number }
  },
  data: () => ({
    project: {
      id: 1,
      marker: { x: 19.9, y: 43.17 },
      banner_image: "https://images.unsplash.com/photo-1501963589393-2e1552dfa94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlciUyMGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Search for a World Underwater",
      author: "Chris Colombus",
      goal: 150000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem ipsume doreim latchi mach nati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
      contribution_count: 1200,
      amount_funded: 25346,
      percent_funded: 40
    }
  })
}
</script>

<style scoped lang="stylus">
.row
  margin 0
  padding 0

.col
  padding 0
</style>
