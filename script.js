var nome = '';

if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

//spread operator para juntar dados de um array em outro ou um objeto em outro:

let pessoa = {
    nome: "Matheus",
    idade: 34,
    cargo: "Programador"
}
console.log("pessoa com spread: ", pessoa);

let novaPessoa = {
    ...pessoa,
    ano: 200,
    cidade: "Franca"
}

console.log("Pessoa nova com spreads: ", novaPessoa);

//rest operator:

function minhaLista(...nomes) {
    console.log("Com rest: ", nomes);
}
minhaLista("Matheus", "Lucas", "Joao");

//
function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [...usuarios, ...novosUsuarios];
    console.log("Rest com spread de usuarios: ", totalUsuarios)
}
let usuarios = ["Matheus", "João"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");

// map: serve para percorrer todos os items desse array e retornar alguma coisa que queremos fazer
//o index do map é opcional e serve para mostrar a posição que o elemento do array está
const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function (item, index) {
    return item;
});
console.log("lista usando map: ", novaLista);

//reduce: Somar todos os items da lista de uma maneira mais simples

const soma = lista.reduce(function (total, proximoItem) {
    return total + proximoItem;
});

console.log("Reduce da lista: ", soma);

//find: achar algum item da lista

const find = lista.find(function(item){
    return item === 6 
})

console.log("find: ", find)