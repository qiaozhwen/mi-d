import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', redirect: '/app' },
    {
      path: '/app ',
      component: '@/pages/index',
      routes: [
        { path: '/app/dash-bord', component: '@/pages/index' },
        { path: '/app/detail', component: '@/pages/index' },
        { path: '/app/test', component: '@/pages/index' },
      ],
    },
    { path: '/login', component: '@/pages/login' },
    { path: '/404', component: '@/pages/404' },
  ],
  fastRefresh: {},
});
