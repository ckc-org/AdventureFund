<template>
  <v-card height="140" class="d-flex overflow-hidden">
    <v-img
      :src="project.banner_image"
      height="100%"
      width="200"
      class="mr-2 rounded-0"
    />
    <ProjectCard__Info :project="project"/>
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
