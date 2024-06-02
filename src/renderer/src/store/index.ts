import useUserStore from './user/user'
import useSettingStore from './setting/setting'

export default function useStore() {
  return {
    user: useUserStore(),
    setting: useSettingStore()
  }
}
