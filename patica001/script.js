function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    //var hora =14
    var hora = data.getHours()
    var mintutos= data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${mintutos}.`
    if(hora >= 0 && hora <12){
        //bom dia
        img.src ='imagens/manha.png'
        document.body.style.background = '#e2cb9f'
    } else if(hora >=12 && hora < 18 ){
        // boa tarde 
        img.src ='imagens/tarde.png'
        document.body.style.background = '#FFC8A7'
    }else {
        //boa noite
        img.src ='imagens/noite.png'
        document.body.style.background = '#18344D'
    }
}