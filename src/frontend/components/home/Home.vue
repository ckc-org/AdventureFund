<template>
  <v-container class="width-container">
    <v-row class="px-0 ma-0">

      <v-col class="pl-0">
        <div class="font-22 weight-700 mb-5">
          Featured
        </div>
        <ProjectCardLarge :project="project"/>
      </v-col>

      <v-col class="pr-0">
        <div class="font-22 weight-700 mb-5">
          Popular
        </div>
        <ProjectCardWide :project="project"/>
        <ProjectCardWide :project="project" class="mt-5"/>
        <ProjectCardWide :project="project" class="mt-5"/>
      </v-col>
    </v-row>

    <div class="mt-10">
      <v-tabs v-model="active_tab" color="black" height="70">
        <v-tab class="d-flex flex-column align-center pa-0">
          <v-icon class="mb-1">mdi-earth</v-icon>
          <div class="my-1">
            Map view
          </div>
        </v-tab>

        <v-tab class="d-flex flex-column align-center pa-0">
          <v-icon class="mb-1">mdi-list-box</v-icon>
          <div class="my-1">
            List view
          </div>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="active_tab">
        <v-tab-item>
          <MapView :markers="markers"/>
        </v-tab-item>
        <v-tab-item>
          <ListView :projects="[project,project,project,project,project]" class="mt-5"/>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import ProjectCardLarge from "../ui/project-cards/ProjectCardLarge"
import ProjectCardWide from "../ui/project-cards/ProjectCardWide"
import MapView from "./MapView"
import ListView from "./ListView"

export default {
  components: { ListView, MapView, ProjectCardWide, ProjectCardLarge },
  data() {
    return {
      active_tab: 0,
      project: {
        id: 1,
        banner_image: "https://images.unsplash.com/photo-1501963589393-2e1552dfa94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlciUyMGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "The Search for a World Underwater",
        author: "Chris Colombus",
        goal: 150000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem ipsume doreim latchi mach nati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
        contribution_count: 1200,
        percent_funded: 40
      },
      markers: [
        { x: 19.9, y: 43.17 },
        { x: 46.67, y: 90.67 },
        { x: 60.17, y: 74.67 },
        { x: 43.4, y: 40.67 },
        { x: 97.67, y: 75 },
        { x: 16.1, y: 77.83 },
        { x: 75.3, y: 38.67 },
        { x: 88.1, y: 83.17 },
        { x: 91.7, y: 77.83 },
        { x: 77.4, y: 70.5 },
        { x: 62.7, y: 49.33 },
        { x: 58.3, y: 78.17 },
        { x: 42.3, y: 48 },
        { x: 30.6, y: 25.17 },
        { x: 21.2, y: 80.83 }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
