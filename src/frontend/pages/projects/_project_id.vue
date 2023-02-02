<template>
  <ProjectOverview :project_id="project_id"/>
</template>

<script>

import ProjectOverview from "../../components/projects/ProjectOverview"

export default {
  components: { ProjectOverview },
  data: () => ({}),
  auth: false,
  computed: {
    project_id() {
      return this.$route.params.project_id
    }
  },
}
</script>

<style scoped lang="stylus">

</style>
