const routes = [
  {
    path: '/',
    component: () => import('../pages/Index')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default routes
