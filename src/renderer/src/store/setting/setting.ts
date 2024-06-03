import { acceptHMRUpdate, defineStore } from 'pinia'

interface UserState {
  title: string | null
}

const useSettingStore = defineStore('setting', {
  state: (): UserState => ({
    title: ''
  }),
  getters: {},
  actions: {
    updateState(obj) {
      Object.keys(obj).forEach((key) => {
        this[key] = obj[key]
      })
    }
  },
  persist: false
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot))
}
export default useSettingStore
