// Exemplo de script principal (app.js ou dentro de <script> no index.html)
document.addEventListener("DOMContentLoaded", () => {
  // Lista de casas disponíveis (adicione novas casas aqui conforme for criando)
  const todasAsCasas = [casa1, casa2]; 

  const seletorCasas = document.getElementById("seletor-casas");
  const conteudoCasa = document.getElementById("conteudo-casa");

  function renderizarCasa(casa) {
    // Monta os links de Lei Seca
    const leiSecaHtml = casa.leiSeca.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">📖 ${item.rotulo}</a>`
    ).join("");

    // Monta os links de Jurisprudência
    const jurisprudenciaHtml = casa.jurisprudencia.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">⚖️ ${item.rotulo}</a>`
    ).join("");

    // Monta as questões
    const questoesHtml = casa.questoes.map(q => `
      <div class="questao-card">
        <p class="enunciado"><strong>Questão ${q.numero}:</strong> ${q.enunciado}</p>
        <div class="alternativas">
          ${q.opcoes.map((opcao, index) => `
            <label>
              <input type="radio" name="q${q.numero}" value="${index}"> ${opcao}
            </label>
          `).join("")}
        </div>
        <div class="comentario-box" style="margin-top: 10px; font-size: 0.85rem; color: var(--text-muted);">
          <em>Comentário: ${q.comentario}</em>
        </div>
      </div>
    `).join("");

    // Injeta o conteúdo no painel principal
    conteudoCasa.innerHTML = `
      <span style="font-size: 0.85rem; color: var(--accent-gold); font-weight: bold;">DISCIPLINA: ${casa.disciplina} | PRIORIDADE: ${casa.prioridade}</span>
      <h2 style="color: var(--text-highlight); margin: 10px 0 15px 0;">Casa ${casa.id}: ${casa.titulo}</h2>
      
      <div class="secao-titulo">1. Lei Seca de Destaque</div>
      <div class="link-box">${leiSecaHtml}</div>

      <div class="secao-titulo">2. Jurisprudência Vinculada (STF / STJ)</div>
      <div class="link-box">${jurisprudenciaHtml}</div>

      <div class="secao-titulo">3. Resumo Estratégico</div>
      <p style="margin-bottom: 15px; font-size: 0.95rem; text-align: justify;">${casa.resumo}</p>

      <div class="secao-titulo">4. Radar de Pegadinhas (FGV)</div>
      <div class="pegadinha-card">
        <strong>⚠️ Atenção:</strong> ${casa.pegadinhaFGV}
      </div>

      <div class="secao-titulo">5. Simulado de Fixação</div>
      ${questoesHtml}
    `;
  }

  // Cria os botões de seleção de cada casa dinamicamente
  todasAsCasas.forEach((casa, index) => {
    const btn = document.createElement("button");
    btn.className = "casa-btn";
    btn.innerText = `Casa ${casa.id}`;
    
    btn.addEventListener("click", () => {
      // Remove a classe active de todos e adiciona no clicado
      document.querySelectorAll(".casa-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarCasa(casa);
    });

    seletorCasas.appendChild(btn);

    // Carrega a primeira casa por padrão ao abrir a página
    if (index === 0) {
      btn.classList.add("active");
      renderizarCasa(casa);
    }
  });
});
