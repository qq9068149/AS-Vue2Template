import Vue from 'vue'
import CONST from '@/utils/CONST'


//vantUi导入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// 移动端调试
import vConsole from 'vconsole';
Vue.prototype.$vConsole= new vConsole();


// 移动端适配
import 'amfe-flexible/index.js'


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