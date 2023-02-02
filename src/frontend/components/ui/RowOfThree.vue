<template>
  <div>
    <div class="d-flex flex-wrap row-override" v-if="!loading">
      <v-sheet
        :max-width="item_width"
        v-for="(item, i) in items_to_show"
        :key="i"
        class="transparent my-10"
        :class="{'mr-12': should_have_margin_right(i)}"
      >
        <v-sheet v-if="item === 'placeholder'" :width="item_width" height="10" class="opacity-0">
          placeholder
        </v-sheet>
        <slot
          v-else
          name="item"
          :item="item"
        />
      </v-sheet>
    </div>
    <div v-else class="d-flex flex-wrap fade-in justify-center">
      <v-sheet class="transparent d-flex flex-wrap fade-in justify-center">
        <div
          v-for="(_, i) in items_to_show_loading"
          :key="i"
          class="my-10"
          :class="{'mr-12': should_have_margin_right(i)}"
        >
          <v-sheet v-if="i > 4 && i <= 8" width="360px" height="0" class="opacity-0">
            placeholder
          </v-sheet>
          <slot
            v-else-if="$slots.loading"
            name="loading"
          />
          <v-card width="360px" min-height="544px" v-else>
            <v-skeleton-loader
              type="card-avatar, article, actions"
            />
          </v-card>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    items: { type: Array, default: () => ([]) },
    loading: Boolean,
    item_width: { type: String, default: '360px' },
    items_to_show_loading: { type: Number, default: 6 },

  },
  computed: {
    ...mapState({
      window_width: state => state.app.window_width
    }),
    items_to_show() {
      // we add a few placeholders to ensure good wrapping/responsiveness
      const items = [...this.items]
      items.push('placeholder')
      items.push('placeholder')
      items.push('placeholder')
      return items
    }
  },
  methods: {
    should_have_margin_right(i) {
      // This is based off widths of 360px. So doing some fun math to handle other width cases
      // const width = this.item_width.replace('px', '')
      if (this.window_width >= 1200) {
        // three columns
        return i % 3 < 2
      } else if (this.window_width >= 680) {
        // two columns
        return i % 2 < 1
      } else if (this.window_width >= 650) {
        // one column
        return false
      }
    }
  },
}
</script>

<style scoped lang="stylus">

</style>
