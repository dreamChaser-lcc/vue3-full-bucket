import TransitionNode from '@/components/transitionNode'

export const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  redirect: '/error/404',
  component: () => import('@/view/shared/error/404.vue')
}
const routeName = 'error';
export const errorRoutes = {
  path: '/error',
  name: routeName,
  redirect: '/error/404',
  component: TransitionNode,
  meta: {
    title: '错误页',
    icon: 'EditOutlined',
    hidden: true
  },
  children: [
    {
      path: '404',
      name: `${routeName}-404`,
      meta: {
        title: '404',
      },
      component: () => import('@/view/shared/error/404.vue')
    }
  ]
}