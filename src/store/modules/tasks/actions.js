export const actions = {
	async addTask({ commit }, task) {
		const res = await fetch("api/tasks", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		commit("addTask", task);
	},
	async loadTasks({ commit }) {
		const res = await fetch("api/tasks");

		const data = await res.json();
		commit("setTasks", data);
	},
	async loadTask(id) {
		const res = await fetch(`api/tasks/${id}`);

		const data = await res.json();

		return data;
	},
	async toggleReminder({ dispatch, commit }, id) {
		const res = await fetch(`api/tasks/${id}`);
		const taskToToggle = await res.json();

		const updTask = {
			...taskToToggle,
			reminder: !taskToToggle.reminder,
		};

		const update = await fetch(`api/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await update.json();
		commit("toggleReminder", { id, reminder: data.reminder });
	},
	async deleteTask({ commit }, id) {
		if (confirm("Are you sure?")) {
			const res = await fetch(`api/tasks/${id}`, {
				method: "DELETE",
			});

			if (res.status === 200) {
				commit("deleteTask", id);
			} else {
				alert("Error deleting task");
			}
		}
	},
};
