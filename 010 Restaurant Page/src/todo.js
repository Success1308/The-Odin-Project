// todo.js

export default function ToDo(task, priority){
	let completed = false;


	const toggleComplete = () => {
		completed = !completed;
	}

	const createdAt = new Date(); 

	return {
		task,
		priority,	
		completed, 
		toggleComplete, 
		createdAt
	}
};