function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('selTab');

    if(num.value.length == 0){
        window.alert('Por favor digite um número.');
    } else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''; //Para limpar o resultado da tabuada 

        while(c <= 10){
            let item = document.createElement('option'); //Para criar um item no select
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab ${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}