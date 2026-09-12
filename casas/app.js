// casas/app.js
document.addEventListener("DOMContentLoaded", () => {
  // A variável 'trilhaENAM' vem direto do arquivo dados.js
  if (typeof trilhaENAM === "undefined" || trilhaENAM.length === 0) {
    console.error("Nenhuma casa encontrada na trilha.");
    return;
  }

  const seletorCasas = document.getElementById("seletor-casas");
  const conteudoCasa = document.getElementById("conteudo-casa");

  function renderizarCasa(casa) {
    const leiSecaHtml = casa.leiSeca.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">📖 ${item.rotulo}</a>`
    ).join("");

    const jurisprudenciaHtml = casa.jurisprudencia.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">⚖️ ${item.rotulo}</a>`
    ).join("");

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

  // Gera os botões do tabuleiro de forma dinâmica
  trilhaENAM.forEach((casa, index) => {
    const btn = document.createElement("button");
    btn.className = "casa-btn";
    btn.innerText = `Casa ${casa.id}`;
    
    btn.addEventListener("click", () => {
      document.querySelectorAll(".casa-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarCasa(casa);
    });

    seletorCasas.appendChild(btn);

    // Carrega a primeira casa por padrão ao abrir o site
    if (index === 0) {
      btn.classList.add("active");
      renderizarCasa(casa);
    }
  });
});
