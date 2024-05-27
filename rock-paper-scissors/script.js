let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loose: 0, tie: 0 };

updateScore();

function play(ourPick) {
	const moves = ['✊', '✋', '✌️'];
	const computerMove = moves[Math.floor(Math.random() * moves.length)];
	let result = '';

	if (ourPick === computerMove) {
		result = "It's a tie";
		score.tie++;
	} else if ((ourPick === '✊' && computerMove === '✌️') ||
			   (ourPick === '✋' && computerMove === '✊') ||
			   (ourPick === '✌️' && computerMove === '✋')) {
		result = 'You win';
		score.wins++;
	} else {
		result = 'You lose';
		score.loose++;
	}

	localStorage.setItem('score', JSON.stringify(score));
	updateScore();

	document.querySelector('.js-result').innerHTML = result;
	document.querySelector('.js-move').innerHTML = `You ${ourPick} - ${computerMove} Computer`;
}

function resetScore() {
	score = { wins: 0, loose: 0, tie: 0 };
	localStorage.removeItem('score');
	updateScore();
}

function updateScore() {
	const scoreElement = document.querySelector('.js-score');
	scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.loose}, Ties: ${score.tie}`;
}