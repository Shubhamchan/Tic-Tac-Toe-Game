let k = document.querySelectorAll(".box");
let lines = document.getElementsByClassName("line");
let p1 = "player1";
let p2 = "player2";
let resetbtn = document.querySelector("#reset");
let turn1 = true;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let h1 = document.querySelector("h1"); 
k.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turn1) {
                box.innerText = "O";
                turn1 = false;
            } else {
                box.innerText = "X";
                turn1 = true;
            }
            box.style.pointerEvents = "none";
            checkwinner();
            checkDraw();
        }
    });
});
const checkwinner = () => {
    for (let pattern of winPattern) {
        let pos1 = k[pattern[0]].innerText;
        let pos2 = k[pattern[1]].innerText;
        let pos3 = k[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                h1.innerText = turn1 ? "Player 2 is Winner" : "Player 1 is Winner";
                disableAllBoxes();
                return;
            }
        }
    }
};
const disableAllBoxes = () => {
    k.forEach((box) => {
        box.style.pointerEvents = "none";
    });
};

const checkDraw = () => {
    if([...k].every(box => box.innerText !== "")) {
        if (h1.innerText === "Start The Game(player1 vs player2)") {
            h1.innerText = "Match is Drawn";
        }
    }
};
resetbtn.addEventListener("click", () => {
    k.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    h1.innerText = "Start The Game(player1 vs player2)";
    turn1 = true;
});
