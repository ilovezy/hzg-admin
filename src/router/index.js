import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
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
      meta: { title: 'dashboard', icon: 'home', noCache: true }
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
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/AcInfo',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '用户管理',
      icon: 'peoples'
    },
    children: [{
      path: 'AcInfo',
      component: () => import('@/views/userManage/AcInfo'),
      name: 'AcInfo',
      meta: {
        title: '资产方公司信息录入'
      }
    }, {
      path: 'AcInfoEdit',
      component: () => import('@/views/userManage/AcInfoEdit'),
      name: 'AcInfoEdit',
      meta: {
        title: '资产方公司管理-新增/编辑/查看'
      }
    }, {
      path: 'AcInfoDetail',
      component: () => import('@/views/userManage/AcDetail'),
      name: 'AcInfoDetail',
      meta: {
        title: '资产方公司管理-查看' // 与上面一个页面可以合并吧
      }
    }, {
      path: 'AcCheck',
      component: () => import('@/views/userManage/AcCheck'),
      name: 'AcCheck',
      meta: {
        title: '资产方公司审核授信'
      }
    }, {
      path: 'NbPersonal',
      component: () => import('@/views/userManage/NbPersonal'),
      name: 'NbPersonal',
      meta: {
        title: '名义借款人管理（个人）'
      }
    }, {
      path: 'NbCompany',
      component: () => import('@/views/userManage/NbCompany'),
      name: 'NbCompany',
      meta: {
        title: '名义借款人管理（企业）'
      }
    },{
      path: 'BusPerson',
      component: () => import('@/views/userManage/BusPerson'),
      name: 'BusPerson',
      meta: {
        title: '业务人员管理'
      }
    }, {
      path: 'BusPersonEdit',
      component: () => import('@/views/userManage/BusPersonEdit'),
      name: 'BusPersonEdit',
      meta: {
        title: '业务人员管理'
      }
    }]
  },

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
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/svg-icons/index'),
      name: 'icons',
      meta: { title: 'icons', icon: 'icon', noCache: true }
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
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'createArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'editArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'articleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    hidden: true,
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

  { path: '*', redirect: '/404', hidden: true }
]
