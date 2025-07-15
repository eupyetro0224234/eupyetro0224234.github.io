const paginas = {
  inicio: `
    <h2>Bem-vindo à Minha Wiki</h2>
    <p>Este é um exemplo de uma wiki simples feita com HTML, CSS e JavaScript.</p>
    <p>Use o menu acima para navegar entre os artigos.</p>
  `,
  historia: `
    <h2>História</h2>
    <p>A história da nossa wiki começa com uma ideia: documentar tudo de forma simples e acessível.</p>
    <p>Desde então, novos artigos e contribuições têm sido adicionados diariamente.</p>
  `,
  personagens: `
    <h2>Personagens</h2>
    <ul>
      <li><strong>Ana:</strong> A protagonista determinada e corajosa.</li>
      <li><strong>João:</strong> O sábio que guia os demais com conhecimento.</li>
      <li><strong>Luna:</strong> A misteriosa aliada de passado incerto.</li>
    </ul>
  `,
  curiosidades: `
    <h2>Curiosidades</h2>
    <ul>
      <li>A wiki pode ser expandida facilmente com novos artigos.</li>
      <li>Você pode integrar Markdown com bibliotecas extras.</li>
      <li>Com um backend, poderia ter edição colaborativa!</li>
    </ul>
  `
};

function mostrarPagina(nome) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = paginas[nome] || "<h2>Página não encontrada</h2>";
}

// Carrega a página inicial
document.addEventListener("DOMContentLoaded", () => mostrarPagina('inicio'));
