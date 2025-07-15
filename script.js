const paginas = {
  inicio: `
    <h2>Bem-vindo à Minha Wiki</h2>
    <p>Esta é uma wiki feita com HTML, CSS e JS, funcionando no GitHub Pages.</p>
    <p>Use o menu à esquerda para navegar pelos tópicos.</p>
  `,
  historia: `
    <h2>História</h2>
    <p>Começamos com uma simples ideia de compartilhar conhecimento.</p>
  `,
  personagens: `
    <h2>Personagens</h2>
    <ul>
      <li><strong>Ana</strong> – Protagonista</li>
      <li><strong>João</strong> – Mentor</li>
      <li><strong>Luna</strong> – Aliada misteriosa</li>
    </ul>
  `,
  curiosidades: `
    <h2>Curiosidades</h2>
    <ul>
      <li>Wiki 100% frontend.</li>
      <li>Compatível com GitHub Pages.</li>
    </ul>
  `
};

function mostrarPagina(nome) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = paginas[nome] || '<h2>Página não encontrada</h2>';
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina('inicio');

  document.querySelectorAll('a[data-pagina]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pagina = e.target.getAttribute('data-pagina');
      mostrarPagina(pagina);
    });
  });

  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    const escondida = sidebar.classList.contains('hidden');
    toggleBtn.textContent = escondida ? '⮞' : '⮜';
    toggleBtn.title = escondida ? 'Mostrar menu' : 'Ocultar menu';
  });
});
