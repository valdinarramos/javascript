var c =[]
var maior = 0 
var menor = 100
function adicionar(){
var txt = document.getElementById('txt1')
var tab = document.getElementById('txtres')
var num = Number(txt.value)
if(num <=0 || num > 100){
    alert('ERRO! tente novamente!')
}else{
    var item = document.createElement('option')
    item.text = `valor ${num} adicionado!`
    item.value = `tab${num}}`
    tab.appendChild(item)
    c.push(num)       
            
    
}

}
var media = 0
function final(){
    if(c==0){
    alert('[ERRO] adicione numeros para finalizar')
}else{

    var txt2= document.getElementById('rel')
    txt2.innerHTML= (`Ao todo, temos ${c.length} numeros cadastrados<br>`)
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
     txt2.innerHTML += (`O maior numero informado foi ${maior}<br>`)
     txt2.innerHTML += (`O menor numero informado foi ${menor}<br>`)   
     txt2.innerHTML += (`A soma dos valores é ${soma}<br>`)
     txt2.innerHTML += (`A media dos valores é ${media}`)

}
}