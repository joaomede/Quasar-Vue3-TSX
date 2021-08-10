import { store } from 'quasar/wrappers'
import { createStore, Module } from 'vuex'

export interface StateInterface {
  module: Module<any, any>
}

export default store((a) => {
  const Store = createStore<StateInterface>({
    modules: {
      module: {}
    },

    strict: !!process.env.DEBUGGING
  })

  return Store
})
