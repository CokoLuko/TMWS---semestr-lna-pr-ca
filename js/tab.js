import { knihy } from "./knihy.js";

console.log(knihy[15].nazov);

const BibleTab = document.querySelector("#tabulka .container");

const knihyTab = [], indexTab = [], skratky = [], kapitoly = [], nazvy = [];

BibleTab.appendChild(document.createElement("div"));
BibleTab.appendChild(document.createElement("div"));

for (let i = 0; i < knihy.length; i++) {
    if (i == 46) {
        for (let e = 0; e < 7; e++) {
            BibleTab.appendChild(document.createElement("div"));
        }
    }

    knihyTab[i] = document.createElement("div");

    if (i < 5) {
        knihyTab[i].style.backgroundColor = "#f5ea0c";
    } else if (i < 19) {
        knihyTab[i].style.backgroundColor = "#f89e44";
    } else if (i < 26) {
        knihyTab[i].style.backgroundColor = "#ea1c4d";
    } else if (i < 32) {
        knihyTab[i].style.backgroundColor = "#ef5f98";
    } else if (i < 44) {
        knihyTab[i].style.backgroundColor = "#9e97c5";
    } else if (i < 46) {
        knihyTab[i].style.backgroundColor = "#f89e44";
    } else if (i < 50) {
        knihyTab[i].style.backgroundColor = "#30bfee";
    } else if (i < 51) {
        knihyTab[i].style.backgroundColor = "#f89e44";
    } else if (i < 21) {
        knihyTab[i].style.backgroundColor = "#f89e44";
    } else if (i < 51) {
        knihyTab[i].style.backgroundColor = "#f89e44";
    } else if (i < 64) {
        knihyTab[i].style.backgroundColor = "#288bcb";
    } else if (i < 72) {
        knihyTab[i].style.backgroundColor = "#29a699";
    } else if (i < 73) {
        knihyTab[i].style.backgroundColor = "#25aa50";
    }

    knihyTab[i].style.aspectRatio = "1/1";
    knihyTab[i].style.display = "flex";
    knihyTab[i].style.justifyContent = "center";
    knihyTab[i].style.alignItems = "center";
    knihyTab[i].style.flexDirection = "column";
    knihyTab[i].style.borderRadius = "var(--zaoblenie)";
    knihyTab[i].style.boxShadow = "0 0.5rem 1rem var(--shadow)";
    knihyTab[i].style.minWidth = "0";
    knihyTab[i].style.overflowWrap = "break-word";
    knihyTab[i].style.wordBreak = "break-word";
    knihyTab[i].className = "prvok";

    indexTab[i] = document.createElement("p");
    indexTab[i].textContent = i+1;
    indexTab[i].style.fontSize = "1rem";

    skratky[i] = document.createElement("h3");
    skratky[i].textContent = knihy[i].skratka;
    skratky[i].style.textAlign = "center";

    nazvy[i] = document.createElement("p");
    nazvy[i].textContent = knihy[i].nazov;
    nazvy[i].style.textAlign = "center";
    nazvy[i].style.fontSize = "1.2rem";
    nazvy[i].style.lineHeight = "1.2rem";

    kapitoly[i] = document.createElement("p");
    kapitoly[i].textContent = knihy[i].kapitoly;
    kapitoly[i].style.fontSize = "1rem";

    let poleDlhychNazvov = [9, 10, 22, 24, 26, 45, 46, 53, 54 ,59, 60, 61, 62, 67, 68, 69, 70, 71];

    if (poleDlhychNazvov.includes(i+1)) {
        nazvy[i].style.fontSize = "1rem";
    } else if (i+1 == 5 || i+1 == 51) {
        nazvy[i].style.fontSize = "0.9rem";
    }

    knihyTab[i].appendChild(indexTab[i]);
    knihyTab[i].appendChild(skratky[i]);
    knihyTab[i].appendChild(nazvy[i]);
    knihyTab[i].appendChild(kapitoly[i]);

    const nedostupneKnihyIndexy = [16, 17, 24, 25, 29, 44, 45];

    if (nedostupneKnihyIndexy.includes(parseInt(indexTab[i].textContent)-1)) {
        knihyTab[i].style.cursor = "no-drop";
        
    } else {
        knihyTab[i].style.cursor = "pointer";
        knihyTab[i].addEventListener("mouseover", () => {console.log("Kniha -> " + nazvy[i].textContent)})
        knihyTab[i].addEventListener("touch", () => {premiestnit(i+1)})
    }

    BibleTab.appendChild(knihyTab[i]);

    function premiestnit(kde) {
        window.location.replace("./kniha.html?q=" + kde);
    }
}