import { acceptHMRUpdate, defineStore } from 'pinia'

export interface UserState {
  cardBg: string | null
  followerCount: number | null
  followingUserCount: number | null
  oId: string | null
  onlineMinute: number | null
  sysMetal: any[] | null // 或者更具体的类型，比如 {name: string, amount: number}[]
  userAppRole: string | null
  userAvatarURL: string | null
  userCity: string | null
  userIntro: string | null
  userName: string | null
  userNickname: string | null
  userNo: string | null
  userOnlineFlag: boolean
  userPoint: number | null
  userRole: string | null
  userURL: string | null
}

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    cardBg: null,
    followerCount: null,
    followingUserCount: null,
    oId: null,
    onlineMinute: null,
    sysMetal: null,
    userAppRole: null,
    userAvatarURL: null,
    userCity: null,
    userIntro: null,
    userName: null,
    userNickname: null,
    userNo: null,
    userOnlineFlag: false,
    userPoint: null,
    userRole: null,
    userURL: null
  }),
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
