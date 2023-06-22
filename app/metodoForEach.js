const elementoParaInserirPecas = document.getElementById('livros')

function exibirPecasNaTela(pecas) {
    elementoParaInserirPecas.innerHTML = ''
    pecas.forEach(peca => {
        let disponibilidade = peca.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
        elementoParaInserirPecas.innerHTML += `
        <div class="card">
                <img src="assets/img/produtos/ryzen.webp" alt="">
                <div class="description">
                    <h2>Ryzen 5 5600</h2>
                    <p>6 Core 12 Threads </p>
                </div>
        </div>
        `
      })
  
}
