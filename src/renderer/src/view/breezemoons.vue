<script lang="ts" setup>
import { Avatar, Button, Icon, Input, Message, Time } from 'view-ui-plus'
import { onMounted, reactive } from 'vue'
import FishPi from 'fishpi'

const fishPi = new FishPi()
const content = reactive({
  list: [],
  page: 1,
  message: '',
  sending: false
})
const formatContent = (content) => {
  return content.replace(/<a\s+(.*?)>/g, '<a $1 target="_blank">')
}
onMounted(async () => {
  const res = await fishPi.breezemoon.list(content.page)
  if (res.code !== 0) {
    console.log(res)
    Message.error(res.msg)
  } else {
    content.list = res.breezemoons
  }
})
</script>

<template>
  <div class="container">
    <div class="top">
      <Input placeholder="清风明月">
        <template #append>
          <Button :loading="content.sending" icon="md-send"></Button>
        </template>
      </Input>
    </div>
    <div class="content">
      <div v-for="(item, index) in content.list" :key="index" class="item">
        <Avatar
          :data-user="item.breezemoonAuthorName"
          :src="item.breezemoonAuthorThumbnailURL48"
          :title="item.breezemoonAuthorName"
          class="msg-avatar user-card"
        />
        <div class="item_right">
          <div class="arrow" />
          <p class="item_right_content" v-html="formatContent(item.breezemoonContent)"></p>
          <div class="item_right_time">
            发自{{ item.breezemoonCity }}
            <Time :time="item.breezemoonCreated"></Time>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <Icon type="md-arrow-dropdown" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
