let player = 1;
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");
let matrix = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]];


b1.addEventListener("click", function () {
    boxClick(b1);
});
b2.addEventListener("click", function () {
    boxClick(b2);
});
b3.addEventListener("click", function () {
    boxClick(b3);
});
b4.addEventListener("click", function () {
    boxClick(b4);
});
b5.addEventListener("click", function () {
    boxClick(b5);
});
b6.addEventListener("click", function () {
    boxClick(b6);
});
b7.addEventListener("click", function () {
    boxClick(b7);
});
b8.addEventListener("click", function () {
    boxClick(b8);
});
b9.addEventListener("click", function () {
    boxClick(b9);
});

function boxClick(x) {
    if (x.innerHTML != '0') {
        return;
    }
    else if (player === 1) {
        x.innerHTML = '1';
        player = 2;
    }
    else if (player == 2) {
        x.innerHTML = '-1';
        player = 1;
    }
    else {
        alert('something went wrong');
    }
    check();
}

function check() {
    // horizontal lines
    if (b1.innerHTML != '0' && areEqual(b1.innerHTML, b2.innerHTML, b3.innerHTML)) {
        if (b1.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b1.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    if (b4.innerHTML != '0' && areEqual(b4.innerHTML, b5.innerHTML, b6.innerHTML)) {
        if (b4.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b4.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    if (b7.innerHTML != '0' && areEqual(b7.innerHTML, b8.innerHTML, b9.innerHTML)) {
        if (b7.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b7.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    // vertical lines
    if (b1.innerHTML != '0' && areEqual(b1.innerHTML, b4.innerHTML, b7.innerHTML)) {
        if (b1.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b1.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    if (b2.innerHTML != '0' && areEqual(b2.innerHTML, b5.innerHTML, b8.innerHTML)) {
        if (b2.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b2.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    if (b3.innerHTML != '0' && areEqual(b3.innerHTML, b6.innerHTML, b9.innerHTML)) {
        if (b3.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b3.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    // cross lines

    if (b1.innerHTML != '0' && areEqual(b1.innerHTML, b5.innerHTML, b9.innerHTML)) {
        if (b1.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b1.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

    if (b3.innerHTML != '0' && areEqual(b3.innerHTML, b5.innerHTML, b7.innerHTML)) {
        if (b3.innerHTML == '1') {
            console.log('Player 1 Wins');
            alert('Player 1 Wins');
            reset();
        }
        else if (b3.innerHTML == '-1') {
            console.log('Player 2 wins');
            alert('Player 2 Wins');
            reset();
        }
        else {

        }
    }

}

function reset() {
    for (let row of matrix) {
        for (let element of row) {
            element.innerHTML = '0';
        }
    }
}

function areEqual() {
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        if (arguments[i] === null || arguments[i] !== arguments[i - 1])
            return false;
    }
    return true;
}