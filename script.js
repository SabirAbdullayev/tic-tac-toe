let say = 1;
let o = "O";
let x = "X";
let M = [];
let oyuncu1 = "";
let oyuncu2 = "";
let xal1 = 0;
let xal2 = 0;

onload = function () {
    Basla();
    Massiv();
    Table();
}
function Basla() {
    oyuncu1 = oyuncu1 == "" ? prompt("1. Oyunçunun adı:") : oyuncu1;
    oyuncu2 = oyuncu2 == "" ? prompt("2. Oyunçunun adı:") : oyuncu2;
    Massiv();
    Table();
    Scoreboard();
}
function Scoreboard() {
    document.getElementsByTagName(
        "div"
    )[0].innerHTML = `${oyuncu1} : ${xal1} - ${oyuncu2} : ${xal2}`;
}
function Qalib(z) {
    return z == x ? `${oyuncu1} qalib oldu!` : `${oyuncu2} qalib oldu!`;
}
function Hesab(z) {
    if (z == x) {
        xal1++;
        return;
    }
    else {
        xal2++;
        return;
    }
}
function Massiv() {
    for (let i = 0; i < 3; i++) {
        M[i] = [];
    }
}

function Table() {
    let tbl = "";

    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
            M[i][j] = M[i][j] == undefined ? "" : M[i][j];
            tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += `</tr>`;
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}
function Click(i, j) {
    if (M[i][j] == "") {
        if (say % 2 == 0) {
            M[i][j] = o;
        }
        else {
            M[i][j] = x;
        }
        say++;
        setTimeout(Yoxla, 1500);
        Table();
    }
}
function Yoxla() {
    if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
        alert(Qalib(M[0][0]));
        Hesab(M[0][0]);
        Scoreboard();
        Basla();
    }
    if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != "") {
        alert(Qalib(M[0][2]));
        Hesab(M[0][2]);
        Scoreboard();
        Basla();
    }
    for (let i = 0; i < 3; i++) {
        if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
            alert(Qalib(M[i][0]));
            Hesab(M[i][0]);
            Scoreboard();
            Basla();
        }
    }
    for (let i = 0; i < 3; i++) {
        if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
            alert(Qalib(M[0][i]));
            Hesab(M[0][i]);
            Scoreboard();
            Basla();
        }
    }
}
function beraber() {
    xal1;
    xal2;
    Basla();
    return;
}
