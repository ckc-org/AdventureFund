<template>
  <div>
    <!--    1175/699 = 1000/595 = 500/242.5-->
    <div class="relative d-flex align-center justify-center">
      <img
        src="~assets/images/world.svg"
      />
      <v-icon
        color="black"
        v-for="(marker, i) in markers"
        :key="i"
        class="absolute"
        :style="{ top: `${marker.y}px`, left: `${marker.x}px` }"
      >
        mdi-map-marker
      </v-icon>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      markers: [
        { x: 199, y: 259 },
        { x: 280, y: 544 },
        { x: 361, y: 448 },
        { x: 434, y: 244 },
        { x: 586, y: 450 },
        { x: 161, y: 467 },
        { x: 753, y: 232 },
        { x: 881, y: 499 },
        { x: 917, y: 467 },
        { x: 774, y: 423 },
        { x: 627, y: 296 },
        { x: 583, y: 469 },
        { x: 423, y: 288 },
        { x: 306, y: 151 },
        { x: 212, y: 485 },
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
