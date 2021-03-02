export const mutations = {
	setTasks(state, tasks) {
		state.tasks = tasks;
	},
	addTask(state, task) {
		state.tasks = [...state.tasks, task];
	},
	deleteTask(state, id) {
		state.tasks = state.tasks.filter((task) => task.id !== id);
	},
	toggleReminder(state, { id, reminder }) {
		state.tasks = state.tasks.map((task) =>
			task.id === id ? { ...task, reminder: reminder } : task
		);
	},
};
