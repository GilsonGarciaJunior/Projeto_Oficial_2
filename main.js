const form = document.getElementById('form-contato');
const contato = [];
const nome = [];

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    adicionaTabela();
})

function adicionaLinha() {
    const nomeUsuario = document.getElementById('nome-usuário');
    const telefoneUsuario = document.getElementById('telefone-usuário');

    if (contato.includes(telefoneUsuario.value)){
        alert(`o número de telefone: ${telefoneUsuario.value} já foi inserido`);
    } else {
        nome.push(nomeUsuario.value);
        contato.push(telefoneUsuario.value);

        let linha = '<tr>';
        linha += `<th>${nomeUsuario.value}</th>`;
        linha += `<th>${telefoneUsuario.value}</th>`;
        linha += '<tr>';

        linhas += linha;
    }

    nomeUsuario.value = '';
    telefoneUsuario.value = '';
}

function adicionaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}