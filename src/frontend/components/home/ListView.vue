<template>
  <RowOfThree :items="projects">
    <template #item="{item}">
      <ProjectCardTall :project="item"/>
    </template>
  </RowOfThree>
</template>

<script>
import RowOfThree from "../ui/RowOfThree"
import ProjectCardTall from "../ui/project-cards/ProjectCardTall"

export default {
  components: { ProjectCardTall, RowOfThree },
  props: {
    projects: { type: Array, default: () => ({}) }
  },
  data: () => ({})
}
</script>

<style scoped lang="stylus">

</style>
