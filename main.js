const form = document.getElementById('tabelaa');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('numero-pessoa');


    let linha = '<tr class="contato">';
    linha += `<td class="nome">${inputNomePessoa.value}</td>`;
    linha += `<td>${inputNumeroPessoa.value}</td>`;
    linha += '</tr>';


    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    inputNomePessoa.value = ''; 
    inputNumeroPessoa.value = '';
});

