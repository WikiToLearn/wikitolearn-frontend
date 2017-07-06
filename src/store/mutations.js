import Vue from "vue"

export const mutations = {
	SET_ROOT_CATEGORIES(state, { categories }) {
		state.rootCategories = categories
	},

	SET_CATEGORY(state, { category }) {
		Vue.set(state.categories, category.name, category)
	},

	SET_COURSE(state, { course }) {
		Vue.set(state.courses, course.name, course)
	},

	SET_PAGE(state, { page }) {
		Vue.set(state.pages, page.title, page)
	},

	SET_ERROR(state, { error }) {
		state.error = Object.assign({}, error)
	},

	CLEAR_ERROR(state) {
		state.error = null
	},

	CREATE_POLLING(state, { pollingId, pollTimer }) {
		Vue.set(state.pollingOperations, pollingId, {
			title: pollingId,
			id: pollingId,
			progress: 0,
			timer: pollTimer
		})
	},

	UPDATE_POLLING(state, { pollingId, progress }) {
		Vue.set(state.pollingOperations[pollingId], "progress", progress)
	},

	DELETE_POLLING(state, { id }) {
		clearTimeout(state.pollingOperations[id].timer)
		Vue.delete(state.pollingOperations, id)
	}
}
