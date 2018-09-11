/**
 * 设置路由
 * 1.登录注册页面
 * -- 路由：/login
 * -- 对应组件：@/componets/Login
 * 2.笔记本列表页面
 * -- 路由：/notebooks
 * -- 对应组件：@/components/NotebookList
 * 3.笔记详情页面
 * -- 路由：/note/:noteId
 * -- 对应组件：@/components/NoteDetail
 * 4.回收站笔记详情页面
 * -- 路由：/trash/:noteId
 * -- 对应组件：@/components/TrashDetail
 */

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import NotebookList from '@/components/NotebookList';
import NoteDetail from '@/components/NoteDetail';
import TrashDetail from '@/components/TrashDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notebooks',
      component: NotebookList
    },
    {
      path: '/note/:noteId',
      component: NoteDetail
    },
    {
      path: '/trash/:noteId',
      component: TrashDetail
    }
  ]
});
