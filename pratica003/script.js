function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i == 0 || f <= 1 ){
        alert('ERRO; verifique os dados e tente novamente')
    } else if ( p == 0 ){
        alert('Não é permitido passo 0, nesse caso sera considerado passo 1')
        p = 1
    }
    var res = document.getElementById('res')
    res.innerHTML = ''
    for(var c = i; c <= f; c = c+p){
        res.innerHTML += `\u{1F449} ${c} `
    }
}