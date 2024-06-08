
document.addEventListener("DOMContentLoaded" , () => {

	const container = document.querySelector(".container");
	const button = document.querySelector(".reset");
	const colorButtons = document.querySelectorAll(".clr");
	let selectedColor = "black"; 

	function createGrid(numSquare){
		
		// clear previous container
		container.innerHTML = "";

		// calculate size of each box
		const squareSize = 100 / numSquare;

		// set container width and height
		container.style.width = `${512}px`;
		container.style.height = `${512}px`;

		for(let i = 1; i <= numSquare * numSquare ; i++){
			const square = document.createElement("div");
			square.classList.add("square");
			square.style.width = `${squareSize}%`;
			square.style.height = `${squareSize}%`;
			// square.innerText = `${i}`;
			container.appendChild(square);

			// Add event listener to change color on click
			square.addEventListener("click", () => {
				square.style.backgroundColor = selectedColor;
			});
		}
	}
	

	colorButtons.forEach(button => {
		button.addEventListener("click", () => {
			selectedColor = button.getAttribute("data-color");
		});
	});


	
	button.addEventListener("click", () => {
		const promptContainer = document.createElement("div");
		promptContainer.classList.add("prompt-container");
	
		const promptText = document.createElement("div");
		promptText.classList.add("prompt-text");
		promptText.textContent = "Enter the size of Square N X N, So N :";
		promptContainer.appendChild(promptText);
	
		const userInput = document.createElement("input");
		userInput.classList.add("prompt-input");
		userInput.type = "number";
		userInput.min = "1";
		userInput.max = "60";
		promptContainer.appendChild(userInput);
	
		const confirmButton = document.createElement("button");
		confirmButton.classList.add("prompt-button");
		confirmButton.textContent = "Confirm";
		confirmButton.addEventListener("click", () => {
			const userSide = parseInt(userInput.value);
			if (userSide > 0 && !isNaN(userSide) && userSide <= 100) {
				createGrid(userSide);
				document.body.removeChild(promptContainer); // Remove the prompt after confirming
			} else {
				alert("Please enter a valid number between 1 and 100");
			}
		});
		promptContainer.appendChild(confirmButton);
	
		document.body.appendChild(promptContainer);
	});

	// initial grid
	createGrid(16);


});





