<template>
  <v-card @click="$router.push(`/projects/${project.id}/`)">
    <v-img
      :src="project.banner_image"
      height="288px"
      width="100%"
      class="mr-2"
    />
    <ProjectCard__Info :project="project" show_description/>
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
