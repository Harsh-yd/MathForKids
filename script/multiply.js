const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const audio = document.getElementById("myAudio");

let answer = 0;
function generateRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

function generateEquation() {
    let num1 = generateRandom();
    let num2 = generateRandom();

    answer = num1 * num2;
    let dummyAnswer1 = generateRandom();
    let dummyAnswer2 = generateRandom();
    dummyAnswer1 = dummyAnswer1 != answer ? dummyAnswer1 : generateRandom();
    dummyAnswer2 = dummyAnswer2 != answer ? dummyAnswer2 : generateRandom();

    let allAnswers = [];
    let switchAnswers = [];

    answer = num1 * num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}
option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) generateEquation();
    else audio.play();
})
option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) generateEquation();
    else audio.play();
})
option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) generateEquation();
    else audio.play();
})

generateEquation();