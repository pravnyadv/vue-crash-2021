import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
	tasks: [],
};

const namespaced = true;

export const tasks = {
	namespaced,
	state,
	getters,
	actions,
	mutations,
};
