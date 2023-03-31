import { defineConfig } from '@umijs/max';

export default defineConfig({
  base:"/web/",
  publicPath:"/web/",
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  valtio:{},
  define:{
    SupabaseUrl:process.env?.SupabaseUrl,
    SupabaseKey:process.env?.SupabaseKey
  },
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'pnpm',
});

