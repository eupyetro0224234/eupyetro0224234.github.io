const paginas = {
  inicio: `
    <h2>Bem-vindo à Minha Wiki</h2>
    <p>Este é um exemplo de uma wiki simples feita com HTML, CSS e JavaScript.</p>
    <p>Use o menu à esquerda para navegar entre os artigos.</p>
  `,
  historia: `
    <h2>História</h2>
    <p>A história da nossa wiki começa com uma ideia: documentar tudo de forma simples e acessível.</p>
  `,
  personagens: `
    <h2>Personagens</h2>
    <ul>
      <li><strong>Ana:</strong> A protagonista determinada.</li>
      <li><strong>João:</strong> O sábio conselheiro.</li>
      <li><strong>Luna:</strong> A aliada misteriosa.</li>
    </ul>
  `,
  curiosidades: `
    <h2>Curiosidades</h2>
    <ul>
      <li>A wiki é totalmente feita com HTML/CSS/JS puro.</li>
      <li>Você pode expandir facilmente com novos tópicos.</li>
    </ul>
  `
};

function mostrarPagina(nome) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = paginas[nome] || "<h2>Página não encontrada</h2>";
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPagina('inicio');

  const toggleBtn = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    toggleBtn.textContent = sidebar.classList.contains("hidden") ? "⮞" : "⮜";
  });
});
