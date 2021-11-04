function tellStep(){
    let initial = document.getElementById('txtInitial');
    let end = document.getElementById('txtEnd');
    let step = document.getElementById('txtStep');
    let answer = document.getElementById('answer');

    if(initial.value == 0 || end.value == 0 || step.value == 0){
        alert('[ERRO] Verifique os dados informados!')
    }else{
        answer.innerHTML = 'Contando: '
        let i = parseInt(initial.value);
        let e = parseInt(end.value);
        let s = parseInt(step.value);

        if(i < e){
            for(let c = i; c <= e; c += s){
                answer.innerHTML += `${c} \u{1F449} `;
            }
        }else{
            for(let c = i; c >= e; c -= s){
                answer.innerHTML += `${c} \u{1F449} `;
            }
        }     
        answer.innerHTML += `\u{1F3C1}`
    }
}

function clearInformation(){
    document.getElementById('txtInitial').value = '';
    document.getElementById('txtEnd').value = '';
    document.getElementById('txtStep').value = '';
    document.getElementById('answer').value = '';

    answer.innerHTML = 'Preparando a contagem...';
}