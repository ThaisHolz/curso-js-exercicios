function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('manha');
    var data = new Date();
    var hora = data.getHours();
   // var hora = 8 //Teste de hora forçado
    msg.innerHTML = `Agora são ${hora} horas.`;

    //Mostrando a imagem correta
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png';
        document.body.style.background = '#B0BC98';
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#D496A7';
    } else {
        img.src = 'imagens/noite.png';
        document.body.style.background = '#5D576B';
    }        
}
