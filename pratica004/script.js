function gerar(){
    var n1 = document.getElementById('txt')
    var tab = document.getElementById('seltab')
    
    if(n1.value.length == 0){
        alert('Por favor digite um numero para proseguir!')
    }else{
        var num= Number(n1.value)
        var c = 0
        tab.innerHTML = ''
        while ( c <= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }

}


/* res.innerHTML = ''
    do{
        c++
     m = n11*c
     res.innerHTML += `${n11} X ${c} = ${m} <br>`
    }while(c <=10); */