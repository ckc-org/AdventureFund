<template>
  <v-sheet class="relative d-flex align-center justify-center">
    <img
      src="~assets/images/world.svg"
      width="1000"
      height="600"
      class="img"
    />
    <v-icon
      color="black"
      v-for="(marker, i) in markers"
      :key="i"
      class="absolute"
      :style="{ top: `${marker.y}%`, left: `${marker.x}%` }"
    >
      mdi-map-marker
    </v-icon>
  </v-sheet>
</template>

<script>

// TODO: WILL HAVE TO CONVERT THIS TO PROBABLY PUT MARKERS LITERALLY IN THE SVG
export default {
  props: {
    markers: Array
  },
}
</script>

<style scoped lang="stylus">
.img
  max-width 100%
  height auto
</style>
