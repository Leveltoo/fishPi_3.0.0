<script lang="ts" setup>
import {
  Button,
  Divider,
  Form,
  FormItem,
  Icon,
  Input,
  Option,
  Select,
  Slider,
  Switch,
  Tag
} from 'view-ui-plus'

const MusicList = [
  { label: '点击播放', key: 0 },
  {
    label: '点击加入播放列表',
    key: 2
  },
  { label: '点击播放并加入播放列表', key: 1 }
]
</script>

<template>
  <div class="container">
    <section class="app-version">
      <p>
        <b>当前版本：</b><span>{{ version }}</span>
      </p>
      <p>
        <Button v-if="!update" :loading="checking" size="small" type="success"
          >{{ updateBtn }}
        </Button>
        <Button v-else :loading="updateing" size="small" type="success">{{ updateBtn }}</Button>
      </p>
    </section>
    <p class="app-version">
      <span>更新镜像</span><Input placeholder="更新镜像域名" @change="changeSetting"></Input>
    </p>
    <section>
      <Divider orientation="left">通用</Divider>
      <Form :label-width="100">
        <FormItem label="透明窗体">
          <section>
            <Switch></Switch>
            <Slider
              :disabled="false"
              :max="100"
              :min="10"
              show-tip="always"
              title="透明度"
            ></Slider>
          </section>
        </FormItem>
        <FormItem label="窗口置顶">
          <Switch></Switch>
        </FormItem>
        <FormItem label="昨日活跃">
          <Switch title="自动领取"></Switch>
        </FormItem>
        <FormItem label="网易云音乐">
          <Select>
            <Option
              v-for="item in MusicList"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            ></Option>
          </Select>
        </FormItem>
      </Form>
    </section>
    <section>
      <Divider orientation="left">聊天室</Divider>
      <Form :label-width="80" :show-message="false">
        <FormItem label="消息屏蔽">
          <article>
            <section class="left">
              <Select>
                <Option>1</Option>
              </Select>
            </section>
            <section class="right">
              <Input></Input>
            </section>
            <Button type="text">
              <Icon custom="fa fa-trash-o"></Icon>
            </Button>
            <section>
              <Icon custom="fa fa-plus"></Icon>
            </section>
          </article>
        </FormItem>
        <FormItem label="特别关心">
          <Tag closable color="success">
            <Button icon="ios-add" size="small" type="dashed">
              <span @click.stop="$event.stopPropagation()"
                ><Input placeholder="用户名"></Input
              ></span>
            </Button>
          </Tag>
        </FormItem>
      </Form>
    </section>
    <section>
      <Divider orientation="left">消息</Divider>
    </section>
  </div>
</template>

<style scoped>
@import '../style/setting.scss';
</style>
