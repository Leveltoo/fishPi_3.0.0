<script lang="ts" setup>
import { Avatar } from 'view-ui-plus'
import { ref } from 'vue'

const isImgOnly = ref<boolean>(false)
</script>

<template>
  <div class="chatItem">
    <div class="chatItem_avatarBox">
      <Avatar class="chatItem_avatarBox_avatar" />
    </div>
    <div class="chatItem_container">
      <div v-if="!isImgOnly" class="arrow" />
      <div v-if="!isImgOnly" class="msg-content">123</div>
      <div v-else>456</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/chatItem';
</style>
