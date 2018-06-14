var Rochambeau = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),
    playButton: document.getElementById("play"),

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        SPOCK: 3,
        LIZARD: 4
    },

    score: {
        win: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    player: new Player(),
    computer: new Player(),



    storePlayerChoice: function (choice) {
        Rochambeau.player.choice = choice;
        console.log("My choice = " + Rochambeau.player.choice);
        Rochambeau.storeComputerChoice();
    },

    storeComputerChoice: function () {
        Rochambeau.computer.choice = Math.floor(Math.random() * 5);
        console.log("Computer choice = " + Rochambeau.computer.choice);
    },

    playGame: function () {
        if (Rochambeau.player.choice == Rochambeau.computer.choice) {

            ++Rochambeau.score.ties;
            Rochambeau.displayGameResult("tie")
        } else if (Rochambeau.player.choice == Rochambeau.choices.ROCK && (Rochambeau.computer.choice == Rochambeau.choices.SCISSORS || Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if (Rochambeau.player.choice == Rochambeau.choices.PAPER && (Rochambeau.computer.choice == Rochambeau.choices.ROCK || Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if (Rochambeau.player.choice == Rochambeau.choices.SCISSORS && (Rochambeau.computer.choice == Rochambeau.choices.PAPER || Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if (Rochambeau.player.choice == Rochambeau.choices.SPOCK && (Rochambeau.computer.choice == Rochambeau.choices.SCISSORS || Rochambeau.computer.choice == Rochambeau.choices.ROCK)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if (Rochambeau.player.choice == Rochambeau.choices.LIZARD && (Rochambeau.computer.choice == Rochambeau.choices.SPOCK || Rochambeau.computer.choice == Rochambeau.choices.PAPER)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else {

            ++Rochambeau.score.losses;
            Rochambeau.displayGameResult("lose")
        }
    },

    displayGameResult: function (result) {

        var message = "Your choice was " + Rochambeau.player.choice + " and the computer's choice was " + Rochambeau.computer.choice + "."

        if (result === "win") {

            document.getElementById("result").textContent = message + " YOU WIN!"
            document.getElementById("result").className = "alert alert-success"
        } else if (result === "lose") {

            document.getElementById("result").textContent = message + " YOU LOSE!"
            document.getElementById("result").className = "alert alert-danger"
        } else {

            document.getElementById("result").textContent = message + " A tie."
            document.getElementById("result").className = "alert alert-info"
        }

        Rochambeau.updateMatches()
        Rochambeau.updateScoreBoard()
    },

    updateMatch: function (val) {
        ++Rochambeau.match[val]
    },

    updateScoreBoard: function (win, losses, ties, won, loss) {
        document.getElementById(win).textContent = Rochambeau.score.win,
            document.getElementById(losses).textContent = Rochambeau.score.losses,
            document.getElementById(ties).textContent = Rochambeau.score.ties,
            document.getElementById(won).textContent = Rochambeau.match.won,
            document.getElementById(loss).textContent = Rochambeau.match.loss
    },

    updateMatches: function () {
        if (Rochambeau.score[0] == 2) {
            ++Rochambeau.match[0],
                Rochambeau.score = [0, 0, 0],
                console.log("You won a match!")
        } else if (Rochambeau.score[2] == 2) {
            ++Rochambeau.match[1],
                Rochambeau.score = [0, 0, 0],
                console.log("Computer won a match!")
        }
    },



}

Rochambeau.rockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(0)
});
Rochambeau.paperButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(1)
});
Rochambeau.scissorsButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(2)
});
Rochambeau.spockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(3)
});
Rochambeau.lizardButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(4)
});
Rochambeau.playButton.addEventListener('click', () => {
    Rochambeau.playGame()
});

function Player() {
    this.choice = null;
};
