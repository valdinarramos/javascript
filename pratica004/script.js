function gerar(){
    var n1 = document.getElementById('txt')
    var n11= Number(n1.value)
    var m = 0
    var c = 0
    var res = document.getElementById('res')
    res.innerHTML = ''
    do{
        c++
     m = n11*c
     res.innerHTML += `${n11} X ${c} = ${m} <br>`
    }while(c <=10);

}