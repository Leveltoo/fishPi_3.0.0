<script lang="ts" setup>
import { Avatar, Badge, Icon } from 'view-ui-plus'
import { onMounted } from 'vue'
import useStore from '../store'
import { useRouter } from 'vue-router'

const { user, setting } = useStore()
const routerArray = [
  {
    url: '/chatroom',
    title: '聊天室'
  },
  {
    url: '/chat',
    title: '私聊'
  },
  {
    url: '/articles',
    title: '帖子'
  },
  {
    url: '/breezemoons',
    title: '清风明月'
  },
  {
    url: '/extension',
    title: '扩展'
  },
  {
    url: '/setting',
    title: '设置'
  }
]
const router = useRouter()
onMounted(() => {
  if (!localStorage.getItem('user')) {
    setting.updateState({
      title: ''
    })
    router.push('/login')
  } else {
    setting.updateState({
      title: '聊天室'
    })
    // user.updateState(JSON.parse(localStorage.getItem('userInfo') as string))
  }
})
const handleGoto = (url: string) => {
  setting.updateState({
    title: routerArray.find((item) => item.url === url).title
  })
  router.push(url)
}
</script>

<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <section class="sideBar">
      <ul class="featureList">
        <!--头像-->
        <li class="featureList_item">
          <Avatar :src="user.userAvatarURL || undefined"></Avatar>
        </li>
        <!--聊天室-->
        <li class="featureList_item" @click="handleGoto('/chatroom')">
          <Icon custom="fa-solid fa-comments" />
        </li>
        <!--私聊-->
        <li class="featureList_item" @click="handleGoto('/chat')">
          <Badge :count="2" :dot="true" :offset="[5, -2]">
            <Icon custom="fa-solid fa-comment-dots" />
          </Badge>
        </li>
        <!--清风明月-->
        <li class="featureList_item" @click="handleGoto('/breezemoons')">
          <Icon custom="fa fa-leaf" />
        </li>
        <!--帖子-->
        <li class="featureList_item" @click="handleGoto('/articles')">
          <Icon custom="fa-solid fa-pen-clip" />
        </li>
        <!--暂时不清楚是啥-->
        <li class="featureList_item"></li>
      </ul>
      <ul class="featureList">
        <li
          :class="{ 'feature-active': $route.meta.name == 'extension' }"
          class="featureList_item"
          title="扩展"
          @click="handleGoto('/extension')"
        >
          <Icon type="md-cube" />
        </li>
        <li
          :class="{ 'feature-active': $route.meta.name == 'setting' }"
          class="featureList_item"
          title="设置"
          @click="handleGoto('/setting')"
        >
          <Icon type="md-settings" />
        </li>
      </ul>
    </section>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../style/home.scss"
</style>
