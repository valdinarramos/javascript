function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    var n_ano= Number(fano.value)
    if(n_ano == 0 || n_ano > ano){
        alert('[ERRO!] Verifique os dados e tente novamente.')
    }else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - n_ano   
        var genero = ''   
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            //genero= 'Homem'
            if (idade >= 0 && idade <10){
                genero ='menino'
            img.setAttribute('src','imagen/bebe-h.png')
            }else if (idade <21){
                genero = 'um jovem'
            img.setAttribute('src','imagen/jovem-h.png')
            }else if( idade < 50){
                genero = 'um homem'
            img.setAttribute('src','imagen/adulto-h.png')
            }else {
                genero = 'um homem idoso'
                img.setAttribute('src','imagen/idoso-h.png')
            }
            }else{
            genero= 'Mulher'
        }
        res.style.textAlign = 'center'
        res.style.padding = '20px'
        res.innerHTML =`Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}