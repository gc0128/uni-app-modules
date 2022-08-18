//状态管理初始化配置
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		user
	}
})

export default store;