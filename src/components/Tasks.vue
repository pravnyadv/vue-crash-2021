<template>
	<div :key="task.id" v-for="task in tasks">
		<Task :task="task" />
	</div>
</template>

<script>
import Task from "./Task";
import { mapActions } from "vuex";

export default {
	name: "Tasks",
	props: {
		tasks: Array,
	},
	components: {
		Task,
	},
};
</script>
