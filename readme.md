<p align="center">
  <a href="https://fishpi.cn">
    <img width="200" src="./build/icons/256x256.png">
  </a>
</p>

<h1 align="center">摸鱼派聊天室</h1>

基于摸鱼打工人社区——[摸鱼派](https://fishpi.cn)开放 API 开发而成，可以在里面愉快的吹水摸鱼。

## ✨ 功能

- 😎 聊天室吹水；
- 💬 单人私聊；
- 📷 大图查看；
- 👉 @ 列表选择；
- 🍃 清风明月；
- 🎶 网易云音乐播放列表；
- 📰 社区看帖评论；
- ⚙️ 丰富的自定义设置功能；
- 🧩 自定义[主题和扩展](./Extension.md)功能；

## 🛡 编译运行
由于项目迭代，当前node版本必须为18+， npm pnpm yarn 均支持，此处不做限制
``` bash
# 安装依赖
npm install

# 开发运行，网页将会挂靠在 localhost:9080
npm run dev

# 编译生成 electron 应用
npm run build

```

## 👀 界面

![picture 1](/static/images/preview.png)

## 备注

### 当前版本是基于跳佬的鱼排桌面端2.0进行的大范围重构

- 重构计划为
- 1.升级渲染进程 vue2.3 => vue3.4
- 2.拥抱typescript
- 3.迭代webpack，采用vite进行项目构建
- 4.修改less样式文件（考虑弃用less使用sass进行样式重构）
- 5.优化相关脚本

#### 迭代计划为5.8日开始,预计初版在端午左右完成，此项目并不是简单的在原来的源码上面进行修改，而是重新创建新项目并将原有逻辑等逐步迁移至当前项目中



###### 😁其实就是想让一些会写web的鱼油们拿到这个项目的时候可以不去考虑那么多的脚本问题，而是把关注点更多的放在渲染中
###### ~~我是不会告诉你们是牛战士进行的重构的~~
