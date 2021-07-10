import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CONST from '@/utils/CONST'

// ui注入
Vue.use(ElementUI);


// 路由
import '@/router/routerIntercept'


// 请求
import api from '@/request/API'
Vue.prototype.$api = api


// 挂载工具类
import Utils from '@/utils/utils'
Vue.prototype.$utils = new Utils()


// 挂载md5
import md5 from 'js-md5';
Vue.prototype.$md5 = md5


// 挂载常量
Vue.prototype.$const = CONST


// 自动注册组件
const requireComponent = require.context('@/components', true, /\.vue$/)

requireComponent.keys().forEach(fileName => {

  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '').replace(/^${}/, '').split('/')[0]

  Vue.component(componentName, componentConfig.default || componentConfig)
})