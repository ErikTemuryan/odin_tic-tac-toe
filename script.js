let mark = "X";
let weather = false;

function toggleMark() {
    if (mark === "X") {
        mark = "O";
        turn.innerHTML = "Player O your turn";
    } else {
        mark = "X";
        turn.innerHTML = "Player X your turn";
    }
}

function IfEmpty(cell) { 
    if (cell.innerHTML !== "") {
        alert("The cell isn't empty."); 
        return false; 
    } 
    return true; 
}

function reset() {
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
}

function win() {
    if (cell1.innerHTML === "X" && cell2.innerHTML === "X" && cell3.innerHTML === "X"
    || cell1.innerHTML === "X" && cell4.innerHTML === "X" && cell7.innerHTML === "X"
    || cell1.innerHTML === "X" && cell5.innerHTML === "X" && cell9.innerHTML === "X"
    || cell2.innerHTML === "X" && cell5.innerHTML === "X" && cell8.innerHTML === "X"
    || cell3.innerHTML === "X" && cell6.innerHTML === "X" && cell9.innerHTML === "X"
    || cell3.innerHTML === "X" && cell5.innerHTML === "X" && cell7.innerHTML === "X"
    || cell4.innerHTML === "X" && cell5.innerHTML === "X" && cell6.innerHTML === "X"
    || cell7.innerHTML === "X" && cell8.innerHTML === "X" && cell9.innerHTML === "X") {
        alert("Player X win");
        turn.innerHTML = "Player X win"
        mark = "X";
        turn.innerHTML = "Player X your turn"
        reset();
        return false;
    } else if (cell1.innerHTML === "O" && cell2.innerHTML === "O" && cell3.innerHTML === "O"
    || cell1.innerHTML === "O" && cell4.innerHTML === "O" && cell7.innerHTML === "O"
    || cell1.innerHTML === "O" && cell5.innerHTML === "O" && cell9.innerHTML === "O"
    || cell2.innerHTML === "O" && cell5.innerHTML === "O" && cell8.innerHTML === "O"
    || cell3.innerHTML === "O" && cell6.innerHTML === "O" && cell9.innerHTML === "O"
    || cell3.innerHTML === "O" && cell5.innerHTML === "O" && cell7.innerHTML === "O"
    || cell4.innerHTML === "O" && cell5.innerHTML === "O" && cell6.innerHTML === "O"
    || cell7.innerHTML === "O" && cell8.innerHTML === "O" && cell9.innerHTML === "O") {
        alert("Player O win");
        turn.innerHTML = "Player O win"
        mark = "X";
        turn.innerHTML = "Player X your turn"
        reset();
        return false;
    } else if (cell1.innerHTML !== "" && cell2.innerHTML !== "" && cell3.innerHTML !== "" && 
    cell4.innerHTML !== "" && cell5.innerHTML !== "" && cell6.innerHTML !== "" && 
    cell7.innerHTML !== "" && cell8.innerHTML !== "" && cell9.innerHTML !== "") {
        alert("It's tie")
        reset();
        mark = "X";
        turn.innerHTML = "Player X your turn"
    }
    return true;
}

const cell1 = document.querySelector(".board1");
const cell2 = document.querySelector(".board2");
const cell3 = document.querySelector(".board3");
const cell4 = document.querySelector(".board4");
const cell5 = document.querySelector(".board5");
const cell6 = document.querySelector(".board6");
const cell7 = document.querySelector(".board7");
const cell8 = document.querySelector(".board8");
const cell9 = document.querySelector(".board9");
const turn = document.getElementById("turn");



cell1.addEventListener("click", function() {
    if (IfEmpty(cell1)) {
        cell1.innerHTML = mark;
        cell1.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell2.addEventListener("click", function() {
    if (IfEmpty(cell2)) {
        cell2.innerHTML = mark;
        cell2.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell3.addEventListener("click", function() {
    if (IfEmpty(cell3)) {
        cell3.innerHTML = mark;
        cell3.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell4.addEventListener("click", function() {
    if (IfEmpty(cell4)) {
        cell4.innerHTML = mark;
        cell4.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell5.addEventListener("click", function() {
    if (IfEmpty(cell5)) {
        cell5.innerHTML = mark;
        cell5.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell6.addEventListener("click", function() {
    if (IfEmpty(cell6)) {
        cell6.innerHTML = mark;
        cell6.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell7.addEventListener("click", function() {
    if (IfEmpty(cell7)) {
        cell7.innerHTML = mark;
        cell7.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell8.addEventListener("click", function() {
    if (IfEmpty(cell8)) {
        cell8.innerHTML = mark;
        cell8.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

cell9.addEventListener("click", function() {
    if (IfEmpty(cell9)) {
        cell9.innerHTML = mark;
        cell9.classList.add("mark")
        weather = true;
        toggleMark();
        if (win()) {
            return true;
        }
    }
})

