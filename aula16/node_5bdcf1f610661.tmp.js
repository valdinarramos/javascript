/*function imppar(num){
    if(num%2==1){
        return`impar`
    }else{
        return`par`
    }
}

console.log(imppar(6))*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
    console.log(`Você digitou: ${numero}`);
    rl.close();
});
