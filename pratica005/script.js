var c =[]
var maior = 0 
var menor = 100
var txt = document.getElementById('txt1')
var tab = document.getElementById('txtres')
var txt2
function isNumero (n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inlista(n , l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
 if(isNumero(txt.value) && !inlista(txt.value,c)){
    c.push(Number(txt.value))
    var item = document.createElement('option')
    item.text = `valor ${txt.value} adicionado!`
    tab.appendChild(item)
 }else{
    alert('Valor invalido ou já encontrado na lista')
 }
 txt.value =''
 txt.focus()
 txt2.innerHTML=''
}



var media = 0
function final(){
    if(c==0){
    alert('[ERRO] adicione numeros para finalizar')
}else{

    txt2= document.getElementById('rel')
    txt2.innerHTML= (`<p>Ao todo, temos ${c.length} numeros cadastrados</p>`)
    var soma = 0
    for (var i = 0; i < c.length; i++) {
        soma += c[i];
        if(c[i] > maior){
            maior = c[i]
        }
        if(c[i] < menor){
            menor = c[i]
        }
        media= (soma/c.length)
    }
     txt2.innerHTML += (`<p>O maior numero informado foi ${maior}</p>`)
     txt2.innerHTML += (`<p>O menor numero informado foi ${menor}</p>`)   
     txt2.innerHTML += (`<p>A soma dos valores é ${soma}</p>`)
     txt2.innerHTML += (`<p>A media dos valores é ${media}</p>`)

}
}