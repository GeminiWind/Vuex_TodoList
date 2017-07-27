import * as types from '../../mutation-types.js'

let actions = {
	addTodo({commit},payload) {
		commit(types.ADD_NEW_TODO, payload)
	},
	toggleStatus({commit}, payload) {
		commit(types.TOGGLE_STATUS,payload)
	},
	deleteTodo({commit}, payload) {
		commit(types.DELETE_TODO,payload)
	},
	clearCompleted({commit}){
		commit(types.CLEAR_COMPLETED_LIST)
	}
}

export default actions