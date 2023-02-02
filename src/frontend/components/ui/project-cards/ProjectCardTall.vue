<template>
  <v-card class="elevation-0" width="360px">
    <v-img
      :src="project.banner_image"
      height="100%"
      width="360"
      class="mr-2 rounded mb-3"
    />
    <ProjectCard__Info :project="project" class="pa-0"/>
  </v-card>
</template>

<script>
import ProjectCard__Info from "./ProjectCard__Info"

export default {
  components: { ProjectCard__Info },
  props: {
    project: { type: Object, default: () => ({}) }
  },

}
</script>
