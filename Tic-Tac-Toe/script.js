// Player
function playerProfile(name, marker, move, points) {
	return { name, marker, move, points };
}

// Game Logic


const winCombo = ["123","456","789","147","258","369","159","357"];
const displayStatus = document.querySelector("#gameStatus"); 
// game win logic module
const WIN = (function(){
	const winCondition = function(move){
		return winCombo.some(combo => {
            return combo.split('').every(chWin => move.includes(chWin));
		});
	}	
	return{winCondition};
})();



// Game Controller Module
const main = (function () {
	let playerProfileOne, playerProfileTwo;
	let gameActive = true;
	const scoreOne = document.querySelector("#scoreOne");
	const scoreTwo = document.querySelector("#scoreTwo");

	const submitBtn = document.querySelector("#submit");
	submitBtn.addEventListener('click', () => {
		const playerOneName = document.querySelector("#playerOne").value || "Player 1";
		const playerTwoName = document.querySelector("#playerTwo").value || "Player 2";

		playerProfileOne = playerProfile(playerOneName, 'X', "", 0);
		playerProfileTwo = playerProfile(playerTwoName, 'O', "", 0);

		const hideStartPage = document.querySelector(".start-game");
		hideStartPage.classList.add("hide");
		const gameScreen = document.querySelector(".gameboard-screen");
		gameScreen.classList.remove("hide");

		const playerOneNameDisplay = document.querySelector("#playerOneName");
		playerOneNameDisplay.textContent = playerProfileOne.name;
		const playerTwoNameDisplay = document.querySelector("#playerTwoName");
		playerTwoNameDisplay.textContent = playerProfileTwo.name;
		scoreTwo.textContent = `Score: 0`;
		scoreOne.textContent = `Score: 0`;

		document.querySelector("#playerOne").value = "";
		document.querySelector("#playerTwo").value = "";

		const backToStartPage = document.querySelector("#restart");
		backToStartPage.addEventListener('click', () => {
			gameScreen.classList.add("hide");
			hideStartPage.classList.remove("hide");
			document.querySelectorAll(".gridbox").forEach(box => {
				box.textContent = "";				
			});

		});



		const gridSelector = document.querySelectorAll(".gridbox");
		let currentPlayer = playerProfileOne;
		
		gridSelector.forEach((element)=>{			
			element.addEventListener('click', () => {	
				if(!gameActive){
					displayStatus.textContent = `Reset The game Buddy!`;
					return;
				}	
				if(element.textContent === ""){
					element.textContent = `${currentPlayer.marker}`;
					
					currentPlayer.move += element.dataset.set;

					if(WIN.winCondition(currentPlayer.move)){
						displayStatus.textContent = `${currentPlayer.name}  Won`;
						currentPlayer.points++;

						// Points
						if (currentPlayer === playerProfileOne) {
							scoreOne.textContent = `Score: ${currentPlayer.points}`;
							scoreTwo.textContent = `Score: ${playerProfileTwo.points}`;
						} else {
							scoreTwo.textContent = `Score: ${currentPlayer.points}`;
							scoreOne.textContent = `Score: ${playerProfileOne.points}`;
						}
						
						gameActive = false;

					}else if(currentPlayer.move.length === 5){
						displayStatus.textContent = `It's Tie`;

						gameActive = false; 
					}else{
						currentPlayer = (currentPlayer === playerProfileOne) ? playerProfileTwo : playerProfileOne;	
						displayStatus.textContent = `${currentPlayer.name}'s Move`;
					}					
				}				
			});
		});
		

	});

	const resetTab = document.querySelector(".reset");
	resetTab.addEventListener('click', (event) => {
		gameActive = true;
		const gridSelector = document.querySelectorAll(".gridbox");
		gridSelector.forEach((element)=>{			
			element.textContent = ``;
			playerProfileOne.move = "";
			playerProfileTwo.move = "";
			displayStatus.textContent = `Game Started`;
		});
	});	
})();





