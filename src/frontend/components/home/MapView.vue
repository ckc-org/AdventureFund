<template>
  <v-sheet class="relative d-flex align-center justify-center">
    <!--    <img-->
    <!--      src="~assets/images/world.svg"-->
    <!--      width="1000"-->
    <!--      height="600"-->
    <!--      class="img"-->
    <!--    />-->
    <svg viewBox="0 0 500 300">
      <image xlink:href="~assets/images/world.svg" width="100%" height="100%"/>
      <path
        v-for="marker in markers"
        :transform="`translate(${marker.x},${marker.y})`"
        fill="black"
        d="M6,5.75A1.25,1.25 0 0,1 4.75,4.5A1.25,1.25 0 0,1 6,3.25A1.25,1.25 0 0,1 7.25,4.5A1.25,1.25 0 0,1 6,5.75M6,1A3.5,3.5 0 0,0 2.5,4.5C2.5,7.125 6,11 6,11C6,11 9.5,7.125 9.5,4.5A3.5,3.5 0 0,0 6,1Z"></path>
      ></path>
    </svg>
    <!--    <v-icon-->
    <!--      color="black"-->
    <!--      v-for="(marker, i) in markers"-->
    <!--      :key="i"-->
    <!--      class="absolute"-->
    <!--      :style="{ top: `${marker.y}%`, left: `${marker.x}%` }"-->
    <!--    >-->
    <!--      mdi-map-marker-->
    <!--    </v-icon>-->
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
