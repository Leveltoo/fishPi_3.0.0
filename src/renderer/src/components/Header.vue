<script lang="ts" setup>
import { computed } from 'vue'
import useStore from '../store'
import { Button, Header, Icon } from 'view-ui-plus'
import Music from './Music.vue'

const { setting } = useStore()
const title = computed(() => `${setting.title}`)
</script>

<template>
  <Header class="header">
    <h1>
      <img alt="" src="../assets/icon.png" />
      <span>{{ title ? `摸鱼派-${title}` : '摸鱼派' }}</span>
    </h1>
    <Music></Music>
    <div class="control">
      <Button class="button" type="text">
        <Icon custom="fa fa-minus" />
      </Button>
      <Button class="button" type="text">
        <div class="cirle-empty"></div>
      </Button>
      <Button class="button" type="text">
        <Icon custom="fa fa-thumb-tack" />
      </Button>
      <Button class="button" type="text">
        <Icon custom="fa fa-times" />
      </Button>
    </div>
  </Header>
</template>

<style lang="scss" scoped>
@import '../style/header';
</style>
