let indexAtual = 0;

function moverImgsCarrossel(direcaoSeta){
    const track = document.getElementById("track");
    const imgs = track.querySelectorAll("img");
    const totalImgs = imgs.length;

    indexAtual += direcaoSeta;

    if(indexAtual<0){
        indexAtual = totalImgs - 1;
    }else if(indexAtual>=totalImgs){
        indexAtual = 0;
    }

    const mover = -indexAtual * 100;
    track.style.transform = `translateX(${mover}%)`;

}