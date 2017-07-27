import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {
	todos: [{content: 'Analyze requirement', isCompleted: true},
	        {content: 'Design Database', isCompleted: false},
	        {content: 'Choose Framework', isCompleted: true},
	        {content: 'Implement Backend', isCompleted: false},
	        {content: 'Implement Frontend', isCompleted: false},] 
 },
 getters,
 actions,
 mutations
})
