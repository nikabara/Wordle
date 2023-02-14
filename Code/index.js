// References
const InputBoxes = document.querySelectorAll(".boxes");

// Variables
let countedInputs = 0;
let lineIndex = 1;

let lineWord = "";

// Functions
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// const cfind = (target, start, end, array) => {
//     if (start > end) {
//         return false;
//     }

//     const middle = Math.floor( (start + end) / 2);

//     if (array[middle] === target) {
//         return true;
//     }

//     if (array[middle] > target) {
//         return cfind(target, start, middle - 1, array);
//     }

//     if (array[middle] < target) {
//         return cfind(target, middle + 1, end, array);
//     }

//     else {
//         return false;
//     }
// };



// exclusive references

var rndWordIndex = getRandomIntInclusive(0, 12484);

const compareWords = (wordWritten, rndNumber, arrOfInputs) => {
    fetch('./data.json').then(res => res.json()).then(data => {
        var wordToGuess = data[rndNumber];
        data.forEach(word => {
            if (word === wordWritten.toLowerCase()) {
                // console.log("Word Found");
                console.log("word to guess is: " + wordToGuess.toLowerCase());
                // console.log("your word is: " + wordWritten.toLowerCase());
                for (let i = 0; i < 5; i++) {
                    if (wordWritten[i] === wordToGuess[i]) {
                        // console.log("Correct letter / Correct positon " + wordWritten[i]);
                        arrOfInputs[i].classList.add("CorrectLetterCorrectPos");
                    }
                    else if (wordWritten[i] !== wordToGuess[i]) {
                        if (wordToGuess.includes(wordWritten[i])) {
                            // console.log("Correct letter / Wrong position " + wordWritten[i]);
                            arrOfInputs[i].classList.add("CorrectLetterWrongPos");
                        }
                        else {
                            // console.log("Wrong word / Wrong position " + wordWritten[i]);
                            arrOfInputs[i].classList.add("WrongLetterWrongPos");
                        }
                    }
                }
            }
        });
    });   
};

// Main code
window.onload = () => {
    document.querySelector(".box1").focus();
    document.querySelector(".box1").classList.add("focused");
    onKeyDowns();
};

const onKeyDowns = () => {
    InputBoxes.forEach(element => {
            element.addEventListener("keydown", (e) => {
                if (e.key == "Enter" && countedInputs == 5) {
                    countedInputs = 0;
                    lineIndex++;

                    // Clamp line-index from 1 to 7
                    lineIndex = clamp(lineIndex, 1, 7);

                    switch (lineIndex) {
                    case 1:
                        document.querySelector(".box1").focus();
                    break;
                    case 2:
                        lineWord = `${document.querySelector(".box1").value}${document.querySelector(".box2").value}${document.querySelector(".box3").value}${document.querySelector(".box4").value}${document.querySelector(".box5").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box1"),document.querySelector(".box2"),document.querySelector(".box3"),document.querySelector(".box4"),document.querySelector(".box5")]);

                        document.querySelector(".box5").setAttribute("disabled", "");
                        document.querySelector(".box5").classList.remove("focused");

                        document.querySelector(".box6").focus();
                        document.querySelector(".box6").classList.add("focused");
                    break;
                    case 3:
                        lineWord = `${document.querySelector(".box6").value}${document.querySelector(".box7").value}${document.querySelector(".box8").value}${document.querySelector(".box9").value}${document.querySelector(".box10").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box6"),document.querySelector(".box7"),document.querySelector(".box8"),document.querySelector(".box9"),document.querySelector(".box10")]);

                        document.querySelector(".box10").setAttribute("disabled", "");
                        document.querySelector(".box10").classList.remove("focused");

                        document.querySelector(".box11").focus();
                        document.querySelector(".box11").classList.add("focused");
                    break;
                    case 4:
                        lineWord = `${document.querySelector(".box11").value}${document.querySelector(".box12").value}${document.querySelector(".box13").value}${document.querySelector(".box14").value}${document.querySelector(".box15").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box11"),document.querySelector(".box12"),document.querySelector(".box13"),document.querySelector(".box14"),document.querySelector(".box15")]);

                        document.querySelector(".box15").setAttribute("disabled", "");
                        document.querySelector(".box15").classList.remove("focused");

                        document.querySelector(".box16").focus();
                        document.querySelector(".box16").classList.add("focused");
                    break;
                    case 5:
                        lineWord = `${document.querySelector(".box16").value}${document.querySelector(".box17").value}${document.querySelector(".box18").value}${document.querySelector(".box19").value}${document.querySelector(".box20").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box16"),document.querySelector(".box17"),document.querySelector(".box18"),document.querySelector(".box19"),document.querySelector(".box20")]);

                        document.querySelector(".box20").setAttribute("disabled", "");
                        document.querySelector(".box20").classList.remove("focused");

                        document.querySelector(".box21").focus();
                        document.querySelector(".box21").classList.add("focused");
                    break;
                    case 6:
                        lineWord = `${document.querySelector(".box21").value}${document.querySelector(".box22").value}${document.querySelector(".box23").value}${document.querySelector(".box24").value}${document.querySelector(".box25").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box21"),document.querySelector(".box22"),document.querySelector(".box23"),document.querySelector(".box24"),document.querySelector(".box25")]);

                        document.querySelector(".box25").setAttribute("disabled", "");
                        document.querySelector(".box25").classList.remove("focused");
                        
                        document.querySelector(".box26").focus();
                        document.querySelector(".box26").classList.add("focused");
                    break;
                    case 7:
                        lineWord = `${document.querySelector(".box26").value}${document.querySelector(".box27").value}${document.querySelector(".box28").value}${document.querySelector(".box29").value}${document.querySelector(".box30").value}`;
                        // console.log(lineWord);

                        compareWords(lineWord, rndWordIndex, [document.querySelector(".box26"),document.querySelector(".box27"),document.querySelector(".box28"),document.querySelector(".box29"),document.querySelector(".box30")]);
                    
                        default:
                            break;
                    }

                    if (lineIndex == 7) {
                        document.querySelector(".box30").setAttribute("disabled", "");
                        document.querySelector(".box30").classList.remove("focused");
                    }
                }
                if (e.key != "Backspace" && e.key != "Enter") {
                    // console.log(rndWordIndex);
                    countedInputs++; 
                    countedInputs = clamp(countedInputs, 0, 5);
                    // console.log(countedInputs);

                    if (element.value.length == 0 && countedInputs <= 4) {
                        setTimeout(() => {
                            element.setAttribute("disabled", "");
                            element.nextElementSibling.focus();
                            element.classList.remove("focused");
                            element.nextElementSibling.classList.add("focused");
                        }, 10);
                    } 
                }
                if (e.key == "Backspace" && countedInputs != 0) {
                    countedInputs--;
                    countedInputs = clamp(countedInputs, 0, 5);

                    element.classList.remove("focused");
                    element.previousElementSibling.classList.add("focused");

                    if (countedInputs == 5) {
                        element.value = "";
                        element.previousElementSibling.removeAttribute("disabled");
                        element.previousElementSibling.focus();
                    }
                    if (countedInputs >= 0 && countedInputs < 4) {
                        element.value = "";
                        element.previousElementSibling.removeAttribute("disabled");
                        element.previousElementSibling.focus();
                    }
                }
            });
    });
};

