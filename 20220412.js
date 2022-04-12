const kep01 = document.getElementById("kep01");
const kep02 = document.getElementById("kep02");
const kep03 = document.getElementById("kep03");
const kep04 = document.getElementById("kep04");
const gombElore = document.getElementById("gombElore");
const gombHatra = document.getElementById("gombHatra");
const kepnagy = document.getElementById("kepnagy");

function fole(kep){
    kep.widt = 400;
    kep.height = 250;
}
function le(kep){
    kep.widt = 200;
    kep.height = 200;
}

kep01.addEventListener("mouseover", () => fole(kep01));
kep01.addEventListener("mouseout", () => le(kep01));
kep01.addEventListener("click", () => mutat(kep01.src));
kep02.addEventListener("mouseover", () => fole(kep02));
kep02.addEventListener("mouseout", () => le(kep02));
kep02.addEventListener("click", () => mutat(kep02.src));
kep03.addEventListener("click", () => mutat(kep03.src));
kep04.addEventListener("click", () => mutat(kep04.src));
kep03.addEventListener("mouseover", () => fole(kep03));
kep03.addEventListener("mouseout", () => le(kep03));
kep04.addEventListener("mouseover", () => fole(kep04));
kep04.addEventListener("mouseout", () => le(kep04));

function mutat(kep){
    kepnagy.src = kep;
};
