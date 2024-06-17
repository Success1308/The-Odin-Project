// NotesDom.js
const divNoteList = document.createElement('div');
divNoteList.classList.add('note-list');
function removeNoteFromLocalStorage(noteContent) {
	let notes = JSON.parse(localStorage.getItem('notes')) || [];
	notes = notes.filter(note => note !== noteContent);
	localStorage.setItem('notes', JSON.stringify(notes));
}


function addNote(noteContent) {
	const noteElement = createNoteElement(noteContent);

	const divNoteList = document.querySelector('.note-list'); 
	divNoteList.appendChild(noteElement);
}

function saveNoteToLocalStorage(noteContent) {
	let notes = JSON.parse(localStorage.getItem('notes')) || [];
	notes.push(noteContent);
	localStorage.setItem('notes', JSON.stringify(notes));
}


function renderNotesFromLocalStorage() {
	const notes = JSON.parse(localStorage.getItem('notes')) || [];
	notes.forEach((noteContent) => {
	  const noteElement = createNoteElement(noteContent);
	  divNoteList.appendChild(noteElement);
	});
  }


function createNoteElement(noteContent) {
	// Create elements
	const divNote = document.createElement('div');
	divNote.classList.add('note');
	
	const divNoteContent = document.createElement('div');
	divNoteContent.classList.add('note-content');
	
	const pNoteContent = document.createElement('p');
	pNoteContent.classList.add('note-content-1');
	pNoteContent.textContent = noteContent;
	
	const divActionsNote = document.createElement('div');
	divActionsNote.classList.add('actions-note');
	
	const buttonRemoveNote = document.createElement('button');
	buttonRemoveNote.classList.add('remove-note');
	
	const iRemoveNoteIcon = document.createElement('i');
	iRemoveNoteIcon.classList.add('fas', 'fa-times');
	iRemoveNoteIcon.addEventListener('click', () => {
		divNoteList.removeChild(divNote);
		removeNoteFromLocalStorage(noteContent);
		renderNotesFromLocalStorage();
	});
	
	// Constructing the note structure
	buttonRemoveNote.appendChild(iRemoveNoteIcon);
	divActionsNote.appendChild(buttonRemoveNote);
	divNoteContent.appendChild(pNoteContent);
	divNote.appendChild(divNoteContent);
	divNote.appendChild(divActionsNote);
	
	return divNote;
  }
  
  function createRightSide() {
	// Create elements
	const divRightSide = document.createElement('div');
	divRightSide.classList.add('rightSide');
	
	const h4Title = document.createElement('h4');
	h4Title.textContent = "Note's";
	


	const divInputRight = document.createElement('div');
	divInputRight.classList.add('input-right');
	divInputRight.id = 'inputContainer';
	
	const iAddNoteIcon = document.createElement('i');
	iAddNoteIcon.classList.add('fa-solid', 'fa-square-plus', 'project-add-icon');
	iAddNoteIcon.id = 'addNoteButton';
	
	const divInputContainer = document.createElement('div');
	divInputContainer.classList.add('input-container');
	divInputContainer.style.display = 'none';
	
	const textareaNoteInput = document.createElement('textarea');
	textareaNoteInput.id = 'note-input';
	textareaNoteInput.placeholder = 'Enter your note';
	
	const buttonAddNote = document.createElement('button');
	buttonAddNote.id = 'add-note-btn';
	buttonAddNote.textContent = 'Add';
	
	divInputContainer.appendChild(textareaNoteInput);
	divInputContainer.appendChild(buttonAddNote);
	
	divInputRight.appendChild(iAddNoteIcon);
	divInputRight.appendChild(divInputContainer);
	
	divRightSide.appendChild(h4Title);
	divRightSide.appendChild(divNoteList);
	divRightSide.appendChild(divInputRight);


    iAddNoteIcon.addEventListener('click', () => {
        divInputContainer.style.display = divInputContainer.style.display === 'block' ? 'none' : 'block';
    });
    buttonAddNote.addEventListener('click', () => {
        const noteContent = textareaNoteInput.value;
        if (noteContent) {
            addNote(noteContent);
			saveNoteToLocalStorage(noteContent); 
            textareaNoteInput.value = '';
            divInputContainer.style.display = 'none';
        }
    });
	

	renderNotesFromLocalStorage();

	return divRightSide; 
}




  export { createRightSide };
  