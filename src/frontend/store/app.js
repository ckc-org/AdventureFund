export const state = () => ({
  window_width: 0
})

export const actions = {}

export const mutations = {
  set_window_width(state, new_window_width) {
    state.window_width = new_window_width
  }
}

export const getters = {
  is_mobile(state) {
    return state.window_width < 600 && state.window_width > 0;
  },
  is_tablet(state) {
    return state.window_width < 960 && state.window_width > 0;
  }
}


// Extra small	-->	Small to large phone	< 600px
// Small -->	Small to medium tablet	600px > < 960px
// Medium	-->	Large tablet to laptop	960px > < 1264px*
// Large	-->	Desktop	1264px > < 1904px*
// Extra large	-->	4k and ultra-wide	> 1904px*
