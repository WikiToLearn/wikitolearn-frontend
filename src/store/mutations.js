import Vue from "vue"

export const mutations = {
	SET_ROOT_CATEGORIES(state, { categories }) {
		state.rootCategories = categories
	},

	SET_CHAPTER(state, { chapter }) {
		Vue.set(state.chapters, chapter._id, chapter)
	},

	SET_NAVIGATION_LINKS(state, { navigationLinks }) {
		state.navigationLinks = navigationLinks
	},

	SET_CATEGORY(state, { category }) {
		Vue.set(state.categories, category.name, category)
	},

	SET_COURSE(state, { course }) {
		Vue.set(state.courses, course._id, course)
	},

	SET_PAGE(state, { page }) {
		Vue.set(state.pages, page._id, page)
	},

	SET_ERROR(state, { error }) {
		state.error = Object.assign({}, error)
	},

	EMPTY_ERROR(state) {
		state.error = null
	},

	CLEAR_ERROR(state) {
		state.error = null
	},

	CLEAR_COURSES(state) {
		state.courses = {}
	},

	CREATE_POLLING(state, { pollingId, pollTimer }) {
		Vue.set(state.pollingOperations, pollingId, {
			title: pollingId,
			id: pollingId,
			progress: 0,
			timer: pollTimer
		})
	},

	UPDATE_COURSE_FIELDS(state, course) {
		let courseToUpdate = state.courses[course._id]
		for (let key of Object.keys(course)) {
			courseToUpdate[key] = course[key]
		}
		Vue.set(state.courses, course._id, courseToUpdate)
	},

	UPDATE_CHAPTER_FIELDS(state, chapter) {
		let chapterToUpdate = state.chapters[chapter._id]
		for (let key of Object.keys(chapter)) {
			chapterToUpdate[key] = chapter[key]
		}
		Vue.set(state.chapters, chapter._id, chapterToUpdate)
	},

	UPDATE_PAGE_FIELDS(state, page) {
		let pageToUpdate = state.pages[page._id]
		for (let key of Object.keys(page)) {
			pageToUpdate[key] = page[key]
		}
		Vue.set(state.pages, page._id, pageToUpdate)
	},

	UPDATE_POLLING(state, { pollingId, progress }) {
		Vue.set(state.pollingOperations[pollingId], "progress", progress)
	},

	DELETE_POLLING(state, { id }) {
		clearTimeout(state.pollingOperations[id].timer)
		Vue.delete(state.pollingOperations, id)
	},

	UPDATE_ACTIVE_REQUESTS(state, { addNewRequest }) {
		state.activeApiRequests += addNewRequest
	},

	SET_META(state, { meta }) {
		state.meta = meta
	}
}
