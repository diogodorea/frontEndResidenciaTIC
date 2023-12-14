// Função para fazer a requisição à API de notícias
function getNews() {
    return new Promise((resolve, reject) => {
        // Substitua a URL da API pela URL real da sua fonte de notícias
        fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Não foi possível obter as notícias.');
                }
                return response.json();
            })
            .then(data => {
                resolve(data); // Retorna os dados da API
            })
            .catch(error => {
                reject(error); // Retorna o erro, caso ocorra
            });
    });
}

// Função para exibir as notícias na página
function showNews() {
    getNews()
        .then(newsData => {
            // Ajuste esta parte de acordo com a estrutura dos dados da sua API
            const noticiasHTML = newsData.map(noticia => `
                <li>
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.introducao}</p>
                </li>
            `).join('');

            // Seleciona a lista de notícias e insere o conteúdo obtido da API
            document.querySelector('.apinoticia div').innerHTML = noticiasHTML;
        })
        .catch(error => {
            console.error('Erro ao carregar notícias:', error);
        });
}

// Chamada para exibir as notícias ao carregar a página
document.addEventListener('DOMContentLoaded', showNews);