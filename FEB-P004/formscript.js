function capturarInformacoes() {
    const cidade = document.getElementById('cidade').value;
    const diarias = document.getElementById('diarias').value;
    const valor = document.getElementById('valor').value;
    const URL_Imagem = document.getElementById('imagem').value;

    console.log(URL_Imagem); 

    const novoDestino = document.createElement('div');
    novoDestino.className = 'card';

    novoDestino.innerHTML = `
        <header>
            <img src="${URL_Imagem}" alt="Imagem do Destino">
            <h3>${cidade}</h3>
        </header>
        <main>
            <ul>
                <li>Áereo ida e volta:</li>
                <li>Duração: ${diarias} diárias</li>
                <li>Café da manhã:</li>
            </ul>
            <div>
                <h2>Preço: R$ ${valor}</h2>
                <span>Taxas inclusas</span>
                <span>Em até 10x sem Juros</span>
            </div>
        </main>
    `;

    const containerDestinos = document.getElementById('Destino');
    containerDestinos.appendChild(novoDestino);

    document.getElementById('imagem').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('diarias').value = '';
}