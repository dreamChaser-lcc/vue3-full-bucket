/**模拟权限路由数据 */
export const authorityRouter = [
  {
    "id": 1,
    "url": "system",
    "sort": 1,
    "icon": "icon-BUG",
    "keepAlive": 0,
    "viewPath": null,
    "parentId": -1,
    "name": "系统管理"
  },
  {
    "id": 3,
    "url": "system/role",
    "sort": 1,
    "icon": "icon-yunwei",
    "keepAlive": 0,
    "viewPath": "view/icons",
    "parentId": 1,
    "name": "角色管理"
  },
  {
    "id": 5,
    "url": "system/dict",
    "sort": 1,
    "icon": "icon-juxing-zeng",
    "keepAlive": 1,
    "viewPath": "views/auth/system/dict/index.vue",
    "parentId": 1,
    "name": "字典管理"
  },
  {
    "id": 98,
    "url": "knowledge/points",
    "sort": 1,
    "icon": "icon-jueceyinqing",
    "keepAlive": 0,
    "viewPath": "views/auth/system/access/index.vue",
    "parentId": 97,
    "name": "知识点"
  },
  {
    "id": 99,
    "url": "23",
    "sort": 1,
    "icon": "",
    "keepAlive": 1,
    "viewPath": "views/auth/system/access/index.vue",
    "parentId": 97,
    "name": "23"
  },
  {
    "id": 100,
    "url": "ssss",
    "sort": 1,
    "icon": "",
    "keepAlive": 1,
    "viewPath": "views/auth/system/access/index.vue",
    "parentId": 1,
    "name": "ssss"
  },
  {
    "id": 79,
    "url": "/user/config",
    "sort": 2,
    "icon": "icon-zhuzhuangtu",
    "keepAlive": 1,
    "viewPath": "views/shared/demos/icons/Iconfont.vue",
    "parentId": 1,
    "name": "用户中心"
  },
  {
    "id": 97,
    "url": "knowledge",
    "sort": 2,
    "icon": "icon-liucheng1",
    "keepAlive": 0,
    "viewPath": "",
    "parentId": -1,
    "name": "知识树"
  },
  {
    "id": 78,
    "url": "/setting/user",
    "sort": 3,
    "icon": "icon-ziduanguanli",
    "keepAlive": 1,
    "viewPath": "views/shared/demos/form/rule-form.vue",
    "parentId": 1,
    "name": "个人设置"
  },
  {
    "id": 4,
    "url": "system/access",
    "sort": 4,
    "icon": "icon-liucheng1",
    "keepAlive": 0,
    "viewPath": "views/auth/system/access/index.vue",
    "parentId": 1,
    "name": "资源管理"
  },
  {
    "id": 2,
    "url": "system/account",
    "sort": 5,
    "icon": "icon-yunwei",
    "keepAlive": 1,
    "viewPath": "views/auth/system/account/index.vue",
    "parentId": 1,
    "name": "账号管理"
  }
];
