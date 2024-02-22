function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i == 0 || f == 0 || p ==0 ){
        alert('ERRO; verifique os dados e tente novamente')
    }else{
     res.innerHTML= 'Contando: '
    if(i < f){
        for(var c =i; c <= f; c += p){
            res.innerHTML +=`${c} \u{1f449}`
        }
    } else{
        for (var c = i; c>= f; c -= p ){
            res.innerHTML +=`${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
}
}
