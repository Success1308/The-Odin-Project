// todoDom.js

import Storage from './storage';
import {setCurrent, getCurrent, projectDefault} from './projectDOM';
import { formatDistanceToNow } from 'date-fns';

const storage = Storage();
const todoList = document.createElement('div');
todoList.classList.add('todo-list');


function renderTodos(project1) {
	todoList.innerHTML = ''; 
	const projectObject = storage.getProject(project1)  || storage.getProject("Today") ;
	if(projectObject.projectName === "Today"){	
		setCurrent("Today");	
		projectDefault.style.backgroundColor = "#e4d9f2"; 
		projectObject.toDos.forEach(todo => {
			const todoElement = createTodoElement(todo.task, todo.priority, todo.createdAt);
			todoList.appendChild(todoElement);
		});
	}else{
		projectObject.toDos.forEach(todo => {
			const todoElement = createTodoElement(todo.task, todo.priority, todo.createdAt);
			todoList.appendChild(todoElement);
		});
	}
}

function createTodoBody() {

	renderTodos(getCurrent());

	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('body');

	// Header
	const header = document.createElement('h4');
	header.textContent = "Have To Do's";
	bodyDiv.appendChild(header);
  
	// Todo List
	bodyDiv.appendChild(todoList);

	//  input todo

	const todoInput = document.createElement('div');
	todoInput.classList.add('todo-input');

	const inputTag = document.createElement('input');
	inputTag.type = 'text';
	inputTag.classList.add('input-tag');
	inputTag.required = true;
	todoInput.appendChild(inputTag);

	const inputPrioritySelect = document.createElement('select');
	inputPrioritySelect.name = 'Priority';
	inputPrioritySelect.id = 'Priority';
	inputPrioritySelect.required = true;

	const inputOptionDefault = document.createElement('option');
	inputOptionDefault.value = 'Priority';
	inputOptionDefault.required = true;
	inputOptionDefault.selected = true;
	inputOptionDefault.disabled = true;
	inputOptionDefault.textContent = 'Priority';
	inputPrioritySelect.appendChild(inputOptionDefault);

	const inputOptionHigh = document.createElement('option');
	inputOptionHigh.value = 'High';
	inputOptionHigh.textContent = 'High';
	inputPrioritySelect.appendChild(inputOptionHigh);

	const inputOptionMedium = document.createElement('option');
	inputOptionMedium.value = 'Medium';
	inputOptionMedium.textContent = 'Medium';
	inputPrioritySelect.appendChild(inputOptionMedium);

	const inputOptionLow = document.createElement('option');
	inputOptionLow.value = 'Low';
	inputOptionLow.textContent = 'Low';
	inputPrioritySelect.appendChild(inputOptionLow);

	todoInput.appendChild(inputPrioritySelect);

	const plusIcon = document.createElement('i');
	plusIcon.classList.add('fa-solid', 'fa-square-plus');
	todoInput.appendChild(plusIcon);


	plusIcon.addEventListener('click', function() {

		const textValue = inputTag.value;
		const priorityValue = inputPrioritySelect.value;

		if (textValue && priorityValue && priorityValue !== 'Priority') {

			const createdAt = new Date(); 

			const newTodo = createTodoElement(textValue, priorityValue, createdAt);
			todoList.appendChild(newTodo);

			const todoObject = { task: textValue, priority: priorityValue, createdAt};

			const currentProject = getCurrent();
			const projectObject = storage.getProject(currentProject);
			
			projectObject.toDos.push(todoObject);
			storage.saveProject(projectObject); 

			inputTag.value = '';
			inputPrioritySelect.value = inputOptionDefault.value;

			renderTodos(getCurrent());
			
		} else {
			alert('Please fill out both the text and priority fields.');
		}
	});

	bodyDiv.appendChild(todoInput);	
	return bodyDiv;

}
  

  
function createTodoElement(textValue, priorityValue, createdAt) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');
    const task = document.createElement('p');
    task.classList.add('task');
    task.textContent = textValue;
    todoContent.appendChild(task);
    todoElement.appendChild(todoContent);

    const bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');

	// my minutes ago functionality is not working
    
    const ago = document.createElement('p');
    ago.classList.add('ago');
    ago.textContent = formatDistanceToNow(createdAt, { addSuffix: true });
    bottomSection.appendChild(ago);

	function updateTimeAgo() {
        ago.textContent = formatDistanceToNow(createdAt, { addSuffix: true });
    }

    updateTimeAgo();
    const intervalId = setInterval(updateTimeAgo, 60000);
    todoElement.dataset.intervalId = intervalId;

    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'Priority';
    prioritySelect.id = 'Priority';
    const optionDefault = document.createElement('option');
    optionDefault.value = 'Priority';
	optionDefault.selected = !priorityValue;
    optionDefault.disabled = true;
    optionDefault.textContent = 'Priority';
    prioritySelect.appendChild(optionDefault);

    const optionHigh = document.createElement('option');
    optionHigh.value = 'High';
    optionHigh.textContent = 'High';
    prioritySelect.appendChild(optionHigh);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'Medium';
    optionMedium.textContent = 'Medium';
    prioritySelect.appendChild(optionMedium);

    const optionLow = document.createElement('option');
    optionLow.value = 'Low';
    optionLow.textContent = 'Low';
    prioritySelect.appendChild(optionLow);

	if (priorityValue) {
        prioritySelect.value = priorityValue;
    }


    bottomSection.appendChild(prioritySelect);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');
    checkButton.appendChild(checkIcon);
    actions.appendChild(checkButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-times');
    removeButton.appendChild(removeIcon);
    actions.appendChild(removeButton);

    bottomSection.appendChild(actions);
    todoElement.appendChild(bottomSection);

	prioritySelect.addEventListener('change', function() {
        const newPriority = prioritySelect.value;

        // Update priority in storage
        const currentProject = getCurrent();
        const projectObject = storage.getProject(currentProject);

        projectObject.toDos.forEach(todo => {
            if (todo.task === textValue && todo.priority === priorityValue) {
                todo.priority = newPriority;
            }
        });

        storage.saveProject(projectObject);
    });

	checkButton.addEventListener('click', function() {
        todoElement.classList.toggle('completed');

		const currentProject = getCurrent();
        const projectObject = storage.getProject(currentProject);

        projectObject.toDos.forEach(todo => {
            if (todo.task === textValue && todo.priority === priorityValue) {
                todo.completed = !todo.completed;
            }
        });

        storage.saveProject(projectObject);

		if (todoElement.classList.contains('completed')) {
            checkButton.style.color = '#6bffb8';
        } else {
            checkButton.style.color = ''; 
		}
    });

    removeButton.addEventListener('click', function() {

		const currentProject = getCurrent();
		const projectObject = storage.getProject(currentProject);
		projectObject.toDos = projectObject.toDos.filter(todo => {
			return !(todo.task === textValue && todo.priority === priorityValue);
		});
		storage.saveProject(projectObject); 

        todoElement.remove();
    });

    return todoElement;
}



function calculateTimeAgo() {
    const now = new Date();
    const minutesAgo = Math.floor(Math.random() * 60); // Example: Random minutes ago for demonstration

    const agoText = `${minutesAgo} minutes ago`; // Adjust this based on your actual time calculation

    return agoText;
}



export{
	createTodoBody,
	createTodoElement,
	renderTodos,
};

