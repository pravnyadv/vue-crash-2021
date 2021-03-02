// // import axios from "axios";

// const tasks = {
// 	namespaced: true,
// 	state: {
// 		tasks: [],
// 	},
// 	actions: {
// 		async loadTasks({ commit }) {
// 			const res = await fetch("api/tasks");

// 			const data = await res.json();
// 			commit("setTasks", data);
// 		},
// 	},
// 	mutations: {
// 		setTasks(state, tasks) {
// 			state.tasks = tasks;
// 		},
// 	},
// 	getters: {
// 		getTasks(state) {
// 			return state.tasks;
// 		},
// 	},
// };

// export default tasks;
