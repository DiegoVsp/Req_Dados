// Minha API KEY
import chave from './chaves.js'

var api_Key = {
  key: chave
}

// Requisição do Metodo GET

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${api_Key.key}`)
  .then((response) => {
    // se a resposta for diferente de ok
    // então, ele retorna o erro
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    // se estiver tudo ok ele retorna os dados
    return response.json();
  })
  .then((api) => {
    console.log(api)
    var texto = "";
    // Get 10 coins and symbols
    for (let i = 0; i < 10; i++) {
      var { first_historical_data } = api.data[i]
      var data = new Date(first_historical_data).toLocaleDateString()

      // Mostrar Informações da API
      texto = texto + `
                  
      <div class="media">
          <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
          <div class="media-body">
          <h5 class="mt-2">${api.data[i].name}</h5>
          <p>${data}</p>
          </div>
      </div>
      `;
      document.querySelector('#coins').innerHTML = texto
    }
  })
  .catch((error) => {
    console.error(error.message);
  })