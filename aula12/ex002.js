var agora = new Date()
var diasem = agora.getDay()
diasem = 8
switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Seguenda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[Erro] Dia da semana invalido')
}
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quita
5 = sexta
6 = sabado 
*/