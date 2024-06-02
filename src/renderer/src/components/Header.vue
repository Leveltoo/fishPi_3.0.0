<script lang="ts" setup>
import { computed } from 'vue'
import useStore from '../store'
import { Header } from 'view-ui-plus'

const { setting } = useStore()
const title = computed(() => `${setting.title}`)
</script>

<template>
  <Header class="header">{{ title ? `摸鱼派-${title}` : '摸鱼派' }}</Header>
</template>

<style lang="scss" scoped>
@import '../style/header';
</style>
