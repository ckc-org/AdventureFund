<template>
  <v-card class="pa-6">
    <div class="font-30 weight-700">
      About {{ project.author }}:
    </div>
    <div class="lh-20">
      {{ project.description }}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    project: { type: Object, default: () => ({}) }
  },
  data: () => ({})
}
</script>

<style scoped lang="stylus">

</style>
