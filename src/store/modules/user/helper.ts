import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://jsd.cdn.zzko.cn/gh/Sunhaha520/picx-images-hosting@master/20231216/avatar.7hypjcgb7r40.webp',
      name: 'Colaman',
      description: '<a href="https://cola.xiaoayu.ren" class="text-blue-500" target="_blank" >AI assistant</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
