import { acceptHMRUpdate, defineStore } from 'pinia'

export interface SettingState {
  title: string | null
  opacity: number
}

const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    title: '',
    opacity: 0.7
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
