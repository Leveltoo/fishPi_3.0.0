<script lang="ts" setup>
import Header from '../components/Header.vue'
</script>

<template>
  <Header class="header" />
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 40px;
  width: 100vw;
}

.main {
  background-color: var(--global-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
  flex-direction: column;
  margin: auto;
}
</style>
