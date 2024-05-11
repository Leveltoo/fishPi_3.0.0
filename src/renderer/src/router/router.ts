import { createRouter, createWebHistory } from 'vue-router'
import Index from '@renderer/view/index.vue'

const localHistory = [
  {
    path: '/',
    name: 'home',
    component: Index,
    children: [
      {
        path: 'login',
        meta: {
          title: '登录',
          name: 'login'
        },
        component: () => import('@renderer/view/login.vue')
      },
      {
        path: '',
        meta: {
          title: '首页',
          name: 'home'
        },
        component: () => import('@renderer/view/home.vue'),
        children: [
          {
            path: 'setting',
            meta: {
              title: '设置',
              name: 'setting'
            },
            component: () => import('@renderer/view/setting.vue')
          },
          {
            path: 'chatroom',
            meta: {
              title: '聊天室',
              name: 'chatroom'
            },
            component: () => import('@renderer/view/chatroom.vue')
          },
          {
            path: 'breezemoons',
            meta: {
              title: '清风明月',
              name: 'breezemoons'
            },
            component: () => import('@renderer/view/breezemoons.vue')
          },
          {
            path: 'articles',
            meta: {
              title: '最新帖子',
              name: 'articles'
            },
            component: () => import('@renderer/view/articles.vue')
          },
          {
            path: 'article/:id',
            meta: {
              title: '帖子详情',
              name: 'article'
            },
            component: () => import('@renderer/view/article.vue')
          },
          {
            path: 'extension',
            meta: {
              title: '扩展插件',
              name: 'extension'
            },
            component: () => import('@renderer/view/extension.vue')
          },
          {
            path: 'context/:ext',
            meta: {
              title: '',
              name: 'context'
            },
            component: () => import('@renderer/view/context.vue')
          },
          {
            path: 'chat',
            meta: {
              title: '私聊',
              name: 'chat'
            },
            component: () => import('@renderer/view/chats.vue'),
            children: [
              {
                path: ':user',
                meta: {
                  title: '私聊',
                  name: 'chat'
                },
                component: () => import('@renderer/view/chat.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: [...localHistory]
})
export default router
