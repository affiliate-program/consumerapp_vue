import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const state = {
	searchHistory: []	//搜索历史
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
