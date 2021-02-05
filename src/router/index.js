import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('layouts/index.vue')

/**
 * 路由配置参数作用：
 * hidden: 如果设置为true，则侧边栏不显示当前路由，默认值为false
 * alwaysShow: 如果设置true，则总是显示为根菜单
 * name: 路由名称
 * redirect: noRedirect 如果设置为noRedirect则不跳转在面包屑导航
 * 
 * meta: {
 *  roles: ['admin', 'editor'] 页面可访问的权限
 *  title: 'title' 页面标题，侧边栏title，面包屑导航名称
 *  icon: 'el-icon-' element ui icon
 *  noCache: true 如果设置为true则页面不会缓存，默认为false缓存页面
 *  breadcrumb: false 如果设置为true则不会在breadcrumd显示，默认为true
 *  activeMenu: 如果设置一个path，sidebar将会在高亮匹配项
 * }
 */

// 路由配置项数组
export const routes = [
  {
    path: '/',
    name: 'layouts',
    redirect: '/dashboard',
    component: Layout,
    children: [
      { 
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'el-icon-location'
        },
        component: () => import('views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/documentation',
    redirect: '/documentation/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Documentation',
        meta: {
          title: 'Documentation',
          icon: 'el-icon-menu'
        },
        component: () => import('views/documentation/index.vue') 
      }
    ]
  },
  {
    path: '/permission',
    redirect: '/permission/page',
    component: Layout,
    meta: {
      title: 'Permission',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'page',
        name: "PermissionPage",
        meta: {
          title: 'Page Permission'
        },
        component: () => import('views/permission/page.vue')
      },
      {
        path: 'directive',
        name: "PermissionDirective",
        meta: {
          title: 'Directive Permission'
        },
        component: () => import('views/permission/directive.vue')
      },
      {
        path: 'role',
        name: "PermissionRole",
        meta: {
          title: 'Role Permission',
          noCache: true
        },
        component: () => import('views/permission/role.vue')
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/list',
    meta: {
      title: '用户管理',
      icon: 'el-icon-user-solid'
    },
    children: [
      {
        path: 'list',
        component: () => import('views/users/list.vue'),
        meta: {
          title: '用户列表'
        }
      },
      {
        path: 'create',
        component: () => import('views/users/create.vue'),
        hidden: true,
        meta: {
          title: '创建新用户',
          activeMenu: '/users/list'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'userEdit',
        component: () => import('views/users/edit.vue'),
        hidden: true,
        meta: {
          title: '编辑用户信息',
          activeMenu: '/users/list',
          noCache: true
        }
      }
    ]
  }
]

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

