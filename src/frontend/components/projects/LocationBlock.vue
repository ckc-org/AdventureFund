<template>
  <v-card class="pa-6">
    <div class="font-30 weight-700">
      Location:
    </div>
    <div class="lh-20">
      <MapView :markers="[project.marker]"/>
    </div>
  </v-card>
</template>

<script>
import MapView from "../home/MapView"

export default {
  components: { MapView },
  props: {
    project: { type: Object, default: () => ({}) }
  },
  data: () => ({})
}
</script>

<style scoped lang="stylus">

</style>
