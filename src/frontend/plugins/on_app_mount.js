/*
  This file is used as a single function to hold any global JS that
  needs to fire up mount of the application.
*/

export default ({ store }) => {
  try {
    if (process.browser) {
      /* Wait for $nuxt to load */
      onNuxtLoad(() => {
        console.log("FIRING")
        store.commit('app/set_window_width', window.innerWidth)
        window.addEventListener('resize', () => {
          store.commit('app/set_window_width', window.innerWidth)
        })
      })
    }
  } catch (e) {
    console.error('Error initiating application', e)
  }
}

function onNuxtLoad(cb) {
  console.log('firing')
  // This waits for our nuxt app to be attached to the window
  if (!window.$nuxt) {
    setTimeout(() => {
      onNuxtLoad(cb)
    }, 500)
  } else {
    cb()
  }
}
