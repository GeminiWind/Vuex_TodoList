import * as types from '../../mutation-types.js'

let mutations = {
	[types.ADD_NEW_TODO](state,payload) {
		console.log(payload);
		let newTodo = {content: payload, isCompleted: false};
		state.todos.push(newTodo);
	},
	[types.TOGGLE_STATUS](state,payload) {
		let todo = payload
		todo.isCompleted = !todo.isCompleted
	},
	[types.DELETE_TODO](state,payload) {
		state.todos.splice(state.todos.indexOf(payload),1);
	},
	[types.CLEAR_COMPLETED_LIST](state) {
		state.todos.forEach(todo => {
			if (todo.isCompleted === true )
				state.todos.splice(state.todos.indexOf(todo),1)
		})
	}
}

export default mutations