window.onload = function(){
    let skaiciaus1Laukelis = document.getElementById("skaicius1");
    console.log(skaiciaus1Laukelis);

    let skaiciaus2Laukelis = document.getElementById("skaicius2");
    console.log(skaiciaus2Laukelis);

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);

    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function() {
        let skaicius1 = skaiciaus1Laukelis.valueAsNumber;
        console.log(skaicius1);

        let skaicius2 = skaiciaus2Laukelis.valueAsNumber;
        console.log(skaicius2);

        console.log(skaiciuPalyginimas(skaicius1, skaicius2));

        pastraipa.innerHTML = "Skaiciu palyginimas: " + skaiciuPalyginimas(skaicius1,skaicius2);
    }
}



function skaiciuPalyginimas(skaicius1, skaicius2) {
    if (skaicius1 === skaicius2) {
        return skaicius1 ,skaicius2;
    }
    else if (skaicius1 > skaicius2) {
        return skaicius1;
    }
    else {
        return skaicius2;
    }
    }
