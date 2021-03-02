<template>
	<AddTask v-show="showAddTask" />
	<Tasks :tasks="tasks" />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import { mapActions, mapState } from "vuex";

export default {
	name: "Home",
	props: {
		showAddTask: Boolean,
	},
	components: {
		Tasks,
		AddTask,
	},
	computed: {
		...mapState("tasks", ["tasks"]),
	},
	methods: {
		...mapActions("tasks", ["loadTasks"]),
	},
	async created() {
		this.loadTasks();
	},
};
</script>
