import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/myrepositories',
        component: () => import('pages/AppPages/GithubRepo.vue'),
      },
      {
        path: '/gistDisplay',
        component: () => import('pages/AppPages/GistDisplay.vue'),
      },
      {
        path: '/authentication',
        component: () => import('pages/AppPages/UserAuth.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
