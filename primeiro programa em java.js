alert('Boas vindas ao meu site');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = ('Erro! Preencha todos os campos');

console.log('Nome:', nome);
console.log('Idade :', idade);
console.log('Numero de vendas:',  numeroDeVendas);
console.log('Saldo Disponivel:', saldoDisponivel);

alert(mensagemDeErro);
console.log('Mensagem de erro :', mensagemDeErro);

nome = prompt('Qual seu nome?');
console.log('nome do usuario:', nome);

idade = prompt('Qual sua idade?');
console.log('Idade do usuario:', idade);

if (idade >=18) {
    alert('Pode tira a habilitação!');
    console.log(' o usuario é maior da idade');
} else { 
    console.log('o usuario é menor de idade')
}


