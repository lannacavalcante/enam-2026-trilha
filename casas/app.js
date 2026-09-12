// casas/app.js
document.addEventListener("DOMContentLoaded", () => {
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

    // Monta as questões com suporte a correção interativa
    const questoesHtml = casa.questoes.map(q => `
      <div class="questao-card" id="questao-${q.numero}">
        <p class="enunciado"><strong>Questão ${q.numero}:</strong> ${q.enunciado}</p>
        <div class="alternativas">
          ${q.opcoes.map((opcao, index) => `
            <label class="opcao-label" data-questao="${q.numero}" data-indice="${index}" data-correta="${q.respostaCorreta}">
              <input type="radio" name="q${q.numero}" value="${index}"> ${opcao}
            </label>
          `).join("")}
        </div>
        <div class="feedback-container" id="feedback-${q.numero}" style="display: none; margin-top: 12px; padding: 10px; border-radius: 6px; font-size: 0.9rem;"></div>
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

    // Adiciona o comportamento de clique nas alternativas para corrigir na hora
    document.querySelectorAll(".opcao-label").forEach(label => {
      label.addEventListener("click", function() {
        const numeroQuestao = this.getAttribute("data-questao");
        const indiceSelecionado = parseInt(this.getAttribute("data-indice"));
        const indiceCorreto = parseInt(this.getAttribute("data-correta"));
        
        // Impede cliques múltiplos após responder
        const cardQuestao = document.getElementById(`questao-${numeroQuestao}`);
        if (cardQuestao.classList.contains("respondida")) return;
        cardQuestao.classList.add("respondida");

        // Desativa todos os inputs daquela questão
        const inputs = cardQuestao.querySelectorAll("input[type='radio']");
        inputs.forEach(input => input.disabled = true);

        // Pega a questão correspondente no objeto para resgatar o comentário
        const questaoObj = casa.questoes.find(q => q.numero == numeroQuestao);
        const feedbackDiv = document.getElementById(`feedback-${numeroQuestao}`);

        // Estiliza visualmente as opções (Certo/Errado)
        const labelsDaQuestao = cardQuestao.querySelectorAll(".opcao-label");
        labelsDaQuestao.forEach(lbl => {
          const idx = parseInt(lbl.getAttribute("data-indice"));
          if (idx === indiceCorreto) {
            lbl.style.backgroundColor = "rgba(35, 134, 54, 0.2)";
            lbl.style.borderColor = "var(--accent-green)";
            lbl.style.fontWeight = "bold";
          } else if (idx === indiceSelecionado && idx !== indiceCorreto) {
            lbl.style.backgroundColor = "rgba(218, 54, 51, 0.2)";
            lbl.style.borderColor = "var(--accent-red)";
          }
        });

        // Mostra o feedback de acerto/erro e o comentário explicativo
        if (indiceSelecionado === indiceCorreto) {
          feedbackDiv.style.backgroundColor = "rgba(35, 134, 54, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-green)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-green);">✔ Resposta Correta!</strong><br><br><em>Comentário:</em> ${questaoObj.comentario}`;
        } else {
          feedbackDiv.style.backgroundColor = "rgba(218, 54, 51, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-red)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-red);">✖ Resposta Incorreta.</strong><br><br><em>Comentário:</em> ${questaoObj.comentario}`;
        }
        feedbackDiv.style.display = "block";
      });
    });
  }

  // Gera os botões do tabuleiro dinamicamente
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

    if (index === 0) {
      btn.classList.add("active");
      renderizarCasa(casa);
    }
  });
});
