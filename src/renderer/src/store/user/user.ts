import { acceptHMRUpdate, defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  // state: () => ({
  //   cardBg: '',
  //   followerCount: 0,
  //   followingUserCount: 0,
  //   oId: '',
  //   onlineMinute: 0,
  //   sysMetal: [],
  //   userAppRole: ''
  // }),
  state: () => ({}),
  getters: {},
  actions: {
    updateState(obj) {
      Object.keys(obj).forEach((key) => {
        this[key] = obj[key]
      })
    }
  },
  persist: true
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
export default useUserStore
