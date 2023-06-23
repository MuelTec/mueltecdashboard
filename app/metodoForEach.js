const elementoParaInserirPecas = document.getElementById('livros')

function exibirPecasNaTela(pecas) {
    elementoParaInserirPecas.innerHTML = ''
    pecas.forEach(peca => {
        let disponibilidade = peca.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
        elementoParaInserirPecas.innerHTML += `
        <div class="card">
                <img class"${disponibilidade}" src="assets/img/produtos/ryzen.webp" alt="">
                <div class="description">
                    <h2 class"peca-titulo"></h2>
                        ${peca.nome}
                    <p>6 Core 12 Threads ${peca.fabricante}</p>
                    <p class="livro__preco" id="preco">R$${peca.preco.toFixed(2)}</p>
                    <div class="tags">
                      <span class="tag">${peca.categoria}</span>
                    </div>
                </div>
        </div>
        `
      })
  
}
