<script lang="ts" setup>
import { computed, ref } from 'vue'
import useStore from '../store'
import { Button, Header, Icon } from 'view-ui-plus'
import Music from './Music.vue'
import { sendMessage } from '../utils'

const { setting } = useStore()
const title = computed(() => `${setting.title}`)
const opacity = ref<boolean>(false)
const fix = ref<boolean>(false)
/**
 * @description 点击右上角关闭与最小化事件
 * @param order
 */
const handleClickControlBar = (order: string) => {
  sendMessage(order)
}
/**
 * @description 点击设置透明度
 */
const handleClickOpacity = () => {
  opacity.value = !opacity.value
  sendMessage({ key: 'window-opacity', value: opacity.value ? setting.opacity : 1 })
}
/**
 * @description 点击设置置顶
 */
const handleClickFix = () => {
  fix.value = !fix.value
  sendMessage({ key: 'top-window', value: fix.value })
}
</script>

<template>
  <Header class="header">
    <h1>
      <img alt="" src="../assets/icon.png" />
      <span>{{ title ? `摸鱼派-${title}` : '摸鱼派' }}</span>
    </h1>
    <Music />
    <div class="control">
      <Button class="button" type="text" @click="handleClickControlBar('minimize-window')">
        <Icon custom="fa fa-minus" />
      </Button>
      <Button class="button" type="text" @click="handleClickOpacity">
        <div :class="`${opacity ? 'select' : ''} circle-empty `"></div>
      </Button>
      <Button class="button" type="text" @click="handleClickFix">
        <Icon :class="`${fix ? 'select' : ''}`" custom="fa fa-thumb-tack" />
      </Button>
      <Button class="button" type="text" @click="handleClickControlBar('close-window')">
        <Icon custom="fa fa-times" />
      </Button>
    </div>
  </Header>
</template>

<style lang="scss" scoped>
@import '../style/header';
</style>
