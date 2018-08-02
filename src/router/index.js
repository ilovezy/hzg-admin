import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '和掌柜风控管理',icon: 'home', noCache: true }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: 'documentation',
      meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }]
  },
  {
    path: '/demo',
    component: Layout,
    redirect: '/demo/index',
    children: [{
      path: 'index',
      component: () => import('@/views/demo/demoPage1'),
      name: 'demoTest',
      meta: { title: 'hlelo 测试用', icon: 'documentation', noCache: true }
    }]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },

  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'component-demo',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [
      {
        path: 'tinymce',
        component: () => import('@/views/components-demo/tinymce'),
        name: 'tinymce-demo',
        meta: { title: 'tinymce' }
      },
      {
        path: 'markdown',
        component: () => import('@/views/components-demo/markdown'),
        name: 'markdown-demo',
        meta: { title: 'markdown' }
      },
      {
        path: 'json-editor',
        component: () => import('@/views/components-demo/jsonEditor'),
        name: 'jsonEditor-demo',
        meta: { title: 'jsonEditor' }
      },
      {
        path: 'splitpane',
        component: () => import('@/views/components-demo/splitpane'),
        name: 'splitpane-demo',
        meta: { title: 'splitPane' }
      },
      {
        path: 'avatar-upload',
        component: () => import('@/views/components-demo/avatarUpload'),
        name: 'avatarUpload-demo',
        meta: { title: 'avatarUpload' }
      },
      {
        path: 'dropzone',
        component: () => import('@/views/components-demo/dropzone'),
        name: 'dropzone-demo',
        meta: { title: 'dropzone' }
      },
      {
        path: 'sticky',
        component: () => import('@/views/components-demo/sticky'),
        name: 'sticky-demo',
        meta: { title: 'sticky' }
      },
      {
        path: 'count-to',
        component: () => import('@/views/components-demo/countTo'),
        name: 'countTo-demo',
        meta: { title: 'countTo' }
      },
      {
        path: 'mixin',
        component: () => import('@/views/components-demo/mixin'),
        name: 'componentMixin-demo',
        meta: { title: 'componentMixin' }
      },
      {
        path: 'back-to-top',
        component: () => import('@/views/components-demo/backToTop'),
        name: 'backToTop-demo',
        meta: { title: 'backToTop' }
      },
      {
        path: 'drag-dialog',
        component: () => import('@/views/components-demo/dragDialog'),
        name: 'dragDialog-demo',
        meta: { title: 'dragDialog' }
      },
      {
        path: 'dnd-list',
        component: () => import('@/views/components-demo/dndList'),
        name: 'dndList-demo',
        meta: { title: 'dndList' }
      },
      {
        path: 'drag-kanban',
        component: () => import('@/views/components-demo/dragKanban'),
        name: 'dragKanban-demo',
        meta: { title: 'dragKanban' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'tab',
      meta: { title: 'tab', icon: 'tab' }
    }]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamicTable/index'),
        name: 'dynamicTable',
        meta: { title: 'dynamicTable' }
      },
      {
        path: 'drag-table',
        component: () => import('@/views/table/dragTable'),
        name: 'dragTable',
        meta: { title: 'dragTable' }
      },
      {
        path: 'inline-edit-table',
        component: () => import('@/views/table/inlineEditTable'),
        name: 'inlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'tree-table',
        component: () => import('@/views/table/treeTable/treeTable'),
        name: 'treeTableDemo',
        meta: { title: 'treeTable' }
      },
      {
        path: 'custom-tree-table',
        component: () => import('@/views/table/treeTable/customTreeTable'),
        name: 'customTreeTableDemo',
        meta: { title: 'customTreeTable' }
      },
      {
        path: 'complex-table',
        component: () => import('@/views/table/complexTable'),
        name: 'complexTable',
        meta: { title: 'complexTable' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: () => import('@/views/clipboard/index'),
      name: 'clipboardDemo',
      meta: { title: 'clipboardDemo', icon: 'clipboard' }
    }]
  },


  { path: '*', redirect: '/404', hidden: true }
]
