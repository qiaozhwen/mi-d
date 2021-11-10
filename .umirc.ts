import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', redirect: '/app' },
    {
      path: '/app ',
      component: '@/pages/app/home',
      routes: [
        { path: '/app/dash-bord', component: '@/pages/app/dashboard' },
        { path: '/app/detail', component: '@/pages/app/detail' },
      ],
    },
    { path: '/login', component: '@/pages/login' },
    { path: '/404', component: '@/pages/404' },
  ],
  fastRefresh: {},
});
