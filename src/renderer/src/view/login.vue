<script lang="ts" setup>
import { Button, Form, FormItem, Icon, Input, Message } from 'view-ui-plus'
import { reactive, ref } from 'vue'
import FishPi from 'fishpi'
import { useRouter } from 'vue-router'
import useStore from '../store'

const router = useRouter()

const { user } = useStore()

const loginForm = reactive({
  username: '',
  passwd: '',
  mfaCode: ''
})
const showPassword = ref<boolean>(false)
const formRef = ref(null)
// onMounted(() => {
//   console.log(store)
// })
const handleShowPassword = () => {
  showPassword.value = !showPassword.value
}
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
          // localStorage.setItem('userInfo', JSON.stringify(data))
          await router.push('/')
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
          v-model.trim="loginForm.username"
          placeholder="用户名"
          type="text"
          @keyup.enter="handleEnter(1)"
        >
          <template #prepend>
            <Icon custom="fa fa-user"></Icon>
          </template>
        </Input>
      </FormItem>
      <FormItem prop="passwd">
        <Input
          v-model.trim="loginForm.passwd"
          :type="showPassword ? 'text' : 'password'"
          placeholder="密码"
          @keyup.enter="handleEnter(2)"
        >
          <template #prepend>
            <Icon custom="fa fa-lock"></Icon>
          </template>
          <template #append>
            <Icon :type="showPassword ? 'md-eye-off' : 'md-eye'" @click="handleShowPassword" />
          </template>
        </Input>
      </FormItem>
      <FormItem>
        <Input
          v-model.trim="loginForm.mfaCode"
          placeholder="两步验证码"
          @keyup.enter="handleSubmit"
        >
          <template #prepend>
            <Icon custom="fa fa-shield"></Icon>
          </template>
        </Input>
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
