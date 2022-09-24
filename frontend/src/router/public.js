const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'recover-password',
        name: 'recover-password',
        component: () => import('@/views/RecoverPassword.vue'),
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('@/views/ResetPassword.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/',
  },
]

export default routes;