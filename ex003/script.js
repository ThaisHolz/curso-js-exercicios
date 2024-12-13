function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else{
        var fsex = document.getElementsByName('radsexo');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto'); //Criando um id para o item foto

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.png');
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemH.png');
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto.png');
            }else{
                img.setAttribute('src', 'imagens/senhor.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menina.png');
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemM.png');
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulta.png');
            }else{
                img.setAttribute('src', 'imagens/senhora.png');
            }
        }
              
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
         
        //Deixando a img redonda e alinhada 
        img.style.borderRadius = '50%'; 
        img.style.width = '150px';
        img.style.transform = 'translate(-80%, -10%)';
        img.style.margin = 'auto';
    }
}