        // Função para fazer a requisição à API de notícias do IBGE
        function getIBGENews() {
            return new Promise((resolve, reject) => {
                fetch('https://servicodados.ibge.gov.br/api/v3/noticias/')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Não foi possível obter as notícias do IBGE.');
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
        function showIBGENews() {
            getIBGENews()
                .then(newsData => {
                    // Ajuste esta parte de acordo com a estrutura dos dados da API
                    const noticiasHTML = newsData.map(noticia => `
                        <li>
                            <h3>${noticia.titulo}</h3>
                            <p>${noticia.resumo}</p>
                            <p>Data de publicação: ${noticia.dataPublicacao}</p>
                        </li>
                    `).join('');

                    // Seleciona a lista de notícias e insere o conteúdo obtido da API
                    document.querySelector('.noticias ul').innerHTML = noticiasHTML;
                })
                .catch(error => {
                    console.error('Erro ao carregar notícias do IBGE:', error);
                });
        }

        // Chamada para exibir as notícias ao carregar a página
        document.addEventListener('DOMContentLoaded', showIBGENews);
