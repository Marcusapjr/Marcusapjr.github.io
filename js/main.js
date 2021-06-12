var baixou = false;
var img = document.createElement("img");


function botao(){
    if (baixou) {
        happy();
    } else {
        sad();
    }

}

function happy(){
    console.log("baixou");
    document.getElementById("resposta").innerHTML = "Baixou! :D" ;
    img.src = "media/free.gif";
    var srcI = document.getElementById("imagem");
    srcI.appendChild(img);
    var audio = document.createElement("audio");
    audio.src = "media/happy.mp3";
    audio.play();
}

function sad() {
    console.log("não baixou");
    document.getElementById("resposta").innerHTML = "Não baixou :(" ;
    img.src = "media/sad-lego-pirate.jpg";
    var srcI = document.getElementById("imagem");
    srcI.appendChild(img);
    var audio = document.createElement("audio");
    audio.src = "media/sad.mp3";
    audio.play();
        
}

