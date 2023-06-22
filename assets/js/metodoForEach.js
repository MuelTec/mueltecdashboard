const elementoParaInserirPecas = document.getElementById('livros')

function exibirPecasNaTela(pecas) {
    elementoParaInserirPecas.innerHTML = ''
    pecas.forEach(peca => {
        let disponibilidade = peca.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
        elementoParaInserirPecas.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${peca.imagem}"
          alt="" />
          <h2 class="livro__titulo">
            ${peca.nome}
          </h2>
          <p class="livro__descricao">${peca.fabricante}</p>
          <p class="livro__preco" id="preco">R$${peca.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${peca.categoria}</span>
          </div>
        </div>
          `
      })
  
}
