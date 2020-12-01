
myChoose = "paper";

function getRandom(myChoose) {
    var random = Math.random();
    var computerChoose;

    if (random < 0, 33) {
        computerChoose = "paper";
    } else if (random < 0, 66) {
        computerChoose = "scissor";
    } else {
        computerChoose = "rock";
    }
    console.log("computerChoose: " + computerChoose);
    console.log("myChoose:" + myChoose);
    if (computerChoose === myChoose) {
        return 0;
    } else if ((computerChoose == "rock" && myChoose == "scissor") || (computerChoose == "paper" && myChoose == "rock") || (computerChoose == "scissor" && myChoose == "paper")) {
        return 1;
    } else {
        return -1;
    }
}
console.log(getRandom(myChoose));