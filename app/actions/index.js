export const addTodo = (text, id) => {
	return {
		type: 'ADD_TODO',
		text,
		id
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const setFilter = (filter) => {
	return {
		type: "SET_FILTER",
		filter
	}
}