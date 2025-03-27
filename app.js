
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroSorteado; 

    for (let i = 0; i < quantidade; i++){
        numeroSorteado = obterNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numeroSorteado)){
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);

    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    
}


function obterNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}




