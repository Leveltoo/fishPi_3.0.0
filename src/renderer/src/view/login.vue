<script lang="ts" setup>
import { Button, Form, FormItem, Input, Message } from 'view-ui-plus'
import { reactive, ref } from 'vue'
import FishPi from 'fishpi'
import useStore from '../store'

const { user } = useStore()

interface LoginInfoType {
  username: string
  passwd: string
  mfaCode: string
}

const loginForm = reactive<LoginInfoType>({
  username: '',
  passwd: '',
  mfaCode: ''
})
const formRef = ref(null)
// onMounted(() => {
//   console.log(store)
// })
const validateUser = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入您的用户名'))
  } else {
    callback()
  }
}
const validatePasswd = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入您的密码'))
  } else {
    callback()
  }
}

const ruleValidate = reactive({
  username: [{ validator: validateUser, trigger: 'blur', message: '请输入您的用户名' }],
  passwd: [{ validator: validatePasswd, trigger: 'blur', message: '请输入您的密码' }]
})
const handleEnter = (key: number) => {
  formRef.value.$el[key].focus()
}
const handleSubmit = () => {
  formRef.value.validate(async (status: boolean) => {
    if (status) {
      const tokenRes = await new FishPi().login(loginForm)
      const { code, Key, msg } = tokenRes
      if (code === 0) {
        localStorage.setItem('token', Key)
        const res = await new FishPi(Key).account.info()
        const { code, data, msg } = res
        if (code === 0) {
          user.updateState(data)
          localStorage.setItem('userInfo', JSON.stringify(data))
        } else {
          Message.error(msg)
        }
      } else {
        Message.error(msg)
      }
    }
  })
}
const handleRegister = () => {
  window.open('https://fishpi.cn/register?r=createForHLS')
}
</script>

<template>
  <div class="container">
    <section class="container_logo">
      <img alt="" src="../assets/icon.png" />
      <span>摸鱼派·登录</span>
    </section>
    <Form ref="formRef" :model="loginForm" :rules="ruleValidate" class="container_form">
      <FormItem prop="username">
        <Input
          v-model="loginForm.username"
          placeholder="用户名"
          type="text"
          @keyup.enter="handleEnter(1)"
        ></Input>
      </FormItem>
      <FormItem prop="passwd">
        <Input
          v-model="loginForm.passwd"
          placeholder="密码"
          type="password"
          @keyup.enter="handleEnter(2)"
        ></Input>
      </FormItem>
      <FormItem>
        <Input
          v-model="loginForm.mfaCode"
          placeholder="两步验证码"
          @keyup.enter="handleSubmit"
        ></Input>
      </FormItem>
    </Form>
    <div class="container_footer">
      <Button long type="success" @click="handleSubmit">登录</Button>
      <Button class="btn" long @click="handleRegister">注册</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/login.scss';
</style>
