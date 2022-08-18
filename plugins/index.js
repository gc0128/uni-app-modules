import tab from './tab';
import modal from './modal';
import auth from './auth';

export default {
  install(Vue) {
    // 页签操作
    Vue.prototype.$tab = tab
    // 认证对象
    Vue.prototype.$auth = auth
    // 模态框对象
    Vue.prototype.$modal = modal
  }
}
