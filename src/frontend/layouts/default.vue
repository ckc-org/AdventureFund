<template>
  <v-app>
    <div>
      <v-app-bar max-height="74px" height="74px" class="z-index-1 elevation-0 white">
        <v-container class="width-container d-flex justify-space-between fill-width">
          <!-- TODO: Export to header file eventually -->
          <nuxt-link to="/" class="text-none">
            <div class="black--text weight-700 font-24">Adventure Fund</div>
          </nuxt-link>
          <v-icon size="30" color="black">mdi-account-circle</v-icon>
        </v-container>
      </v-app-bar>
    </div>
    <!-- Sizes your content based upon application components -->
    <v-main class="white">
      <!-- Provides the application the proper gutter -->
      <div class="fill-height">
        <nuxt class="content"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style lang="stylus" scoped>
.v-app-bar
  box-shadow: 0px -6px 26px rgba(0, 0, 0, 0.21) !important

  >>> .v-toolbar__content
    padding 0 !important

.content
  width 100%
  height 100%
</style>
