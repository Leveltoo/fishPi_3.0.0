<script lang="ts" setup>
import { Button, Icon } from 'view-ui-plus'
</script>

<template>
  <div class="musicContainer">
    <!--    音乐播放组件-->
    <!--    <Icon class="" custom="fa fa-music" />-->
    <div>
      <Button title="关闭播放器" type="text">
        <Icon custom="fa fa-times" />
      </Button>
      <Button title="上一首">
        <Icon custom="fa fa-backward" />
      </Button>
      <span class="music-name">牛战士 - 放的歌</span>
      <Button title="下一首">
        <Icon custom="fa fa-forward" />
      </Button>
      <Button title="移出播放列表" type="text">
        <Icon custom="fa fa-trash-o audio-remove" />
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/music';
</style>
