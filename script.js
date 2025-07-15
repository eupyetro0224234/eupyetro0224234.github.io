const paginas = {
  inicio: `
    <h2>Bem-vindo à Minha Wiki</h2>
    <p>Esta é uma wiki simples feita com HTML, CSS e JavaScript.</p>
    <p>Use o menu à esquerda para navegar entre os tópicos.</p>
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
      <li>Wiki feita com HTML/CSS/JS puro.</li>
      <li>Funciona como uma SPA simples para GitHub Pages.</li>
    </ul>
  `
};

function mostrarPagina(nome) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = paginas[nome] || '<h2>Página não encontrada</h2>';
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina('inicio');

  // Liga os cliques dos links do menu
  document.querySelectorAll('a[data-pagina]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pagina = e.target.getAttribute('data-pagina');
      mostrarPagina(pagina);
    });
  });

  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');

    if (sidebar.classList.contains('hidden')) {
      toggleBtn.textContent = '⮞';
      toggleBtn.title = 'Mostrar menu';
    } else {
      toggleBtn.textContent = '⮜';
      toggleBtn.title = 'Ocultar menu';
    }
  });
});
