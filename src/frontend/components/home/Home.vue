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
          <WorldView/>
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
import WorldView from "./MapView"
import ListView from "./ListView"

export default {
  components: { ListView, WorldView, ProjectCardWide, ProjectCardLarge },
  data() {
    return {
      active_tab: 0,
      project: {
        banner_image: "https://images.unsplash.com/photo-1501963589393-2e1552dfa94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlciUyMGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "The Search for a World Underwater",
        author: "Chris Colombus",
        goal: 150000,
        decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem ipsume doreim latchi mach nati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
        contribution_count: 1200,
        percent_funded: 40
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
