import { createStore } from "vuex";
import { tasks } from "./modules/tasks/";

const store = createStore({
	modules: {
		tasks,
	},
	// plugins: [createLogger()],
	state: {},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;
