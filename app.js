function moverPosiscionRandom(elm){
    elm.style.position = 'absolute'
    elm.style.top = Math.random() * (window.innerHeight - elm.
        offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.
            offsetWidth) + 'px';
}

let btnSI = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];


btnNo.addEventListener('mouseenter', function(e) {
    moverPosiscionRandom(e.target)
});

btnSI.addEventListener('click', function(e) {
    alert("Sabia que dirias que SI. Casemonos ya y tengamos hijos, TE AMO!!!! <3")

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\Audio_1.mpeg');
    cancion.play();
});