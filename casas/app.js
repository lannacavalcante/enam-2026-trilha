// casas/app.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof trilhaENAM === "undefined" || trilhaENAM.length === 0) {
    console.error("Nenhuma casa encontrada na trilha.");
    return;
  }

  const seletorCasas = document.getElementById("seletor-casas");
  const conteudoCasa = document.getElementById("conteudo-casa");

  // Recupera o progresso salvo do navegador (localStorage)
  let progressoSalvo = JSON.parse(localStorage.getItem("enam_progresso")) || {};
  let cadernoErros = JSON.parse(localStorage.getItem("enam_erros")) || [];

  // Evita duplicar o painel superior caso o script rode mais de uma vez
  const headerContainer = document.querySelector("header");
  if (!document.getElementById("info-progresso")) {
    const barraTopo = document.createElement("div");
    barraTopo.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-top: 15px; flex-wrap: wrap; gap: 10px;";
    barraTopo.innerHTML = `
      <div id="info-progresso" style="font-size: 0.9rem; color: var(--text-muted);">
        Progresso: <strong>0/${trilhaENAM.length}</strong> casas concluídas
      </div>
      <div style="display: flex; gap: 10px;">
        <button id="btn-estatisticas" class="casa-btn" style="padding: 6px 12px; font-size: 0.85rem;">📊 Estatísticas</button>
        <button id="btn-erros" class="casa-btn" style="padding: 6px 12px; font-size: 0.85rem; border-color: var(--accent-red); color: var(--accent-red);">🚨 Caderno de Erros (${cadernoErros.length})</button>
      </div>
    `;
    headerContainer.appendChild(barraTopo);
  }

  function atualizarBarraProgresso() {
    const totalConcluidas = Object.values(progressoSalvo).filter(Boolean).length;
    const infoProgressoEl = document.getElementById("info-progresso");
    const btnErrosEl = document.getElementById("btn-erros");
    
    if (infoProgressoEl) {
      infoProgressoEl.innerHTML = `Progresso: <strong>${totalConcluidas}/${trilhaENAM.length}</strong> casas concluídas`;
    }
    if (btnErrosEl) {
      btnErrosEl.innerText = `🚨 Caderno de Erros (${cadernoErros.length})`;
    }
  }

  function renderizarCasa(casa) {
    const leiSecaHtml = casa.leiSeca.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">📖 ${item.rotulo}</a>`
    ).join("");

    const jurisprudenciaHtml = casa.jurisprudencia.map(item => 
      `<a href="${item.url}" target="_blank" class="link-pill">⚖️ ${item.rotulo}</a>`
    ).join("");

    const questoesHtml = casa.questoes.map(q => `
      <div class="questao-card" id="questao-${casa.id}-${q.numero}">
        <p class="enunciado"><strong>Questão ${q.numero}:</strong> ${q.enunciado}</p>
        <div class="alternativas">
          ${q.opcoes.map((opcao, index) => `
            <label class="opcao-label" data-casa="${casa.id}" data-questao="${q.numero}" data-indice="${index}" data-correta="${q.respostaCorreta}">
              <input type="radio" name="q${casa.id}-${q.numero}" value="${index}"> [${index + 1}] ${opcao}
            </label>
          `).join("")}
        </div>
        <div class="feedback-container" id="feedback-${casa.id}-${q.numero}" style="display: none; margin-top: 12px; padding: 10px; border-radius: 6px; font-size: 0.9rem;"></div>
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

      <div class="secao-titulo">5. Simulado de Fixação <span style="font-size: 0.75rem; color: var(--text-muted);">(Dica: use as teclas 1, 2, 3 ou 4 para responder)</span></div>
      ${questoesHtml}
    `;

    ativarLogicaQuestao(casa);
  }

  function ativarLogicaQuestao(casa) {
    const labels = document.querySelectorAll(`.opcao-label[data-casa="${casa.id}"]`);
    
    function processarResposta(labelEl) {
      const numQ = labelEl.getAttribute("data-questao");
      const idxSel = parseInt(labelEl.getAttribute("data-indice"));
      const idxCorreto = parseInt(labelEl.getAttribute("data-correta"));

      const cardQ = document.getElementById(`questao-${casa.id}-${numQ}`);
      if (!cardQ || cardQ.classList.contains("respondida")) return;
      cardQ.classList.add("respondida");

      cardQ.querySelectorAll("input[type='radio']").forEach(i => i.disabled = true);

      const questaoObj = casa.questoes.find(q => q.numero == numQ);
      const feedbackDiv = document.getElementById(`feedback-${casa.id}-${numQ}`);

      cardQ.querySelectorAll(".opcao-label").forEach(lbl => {
        const idx = parseInt(lbl.getAttribute("data-indice"));
        if (idx === idxCorreto) {
          lbl.style.backgroundColor = "rgba(35, 134, 54, 0.2)";
          lbl.style.borderColor = "var(--accent-green)";
          lbl.style.fontWeight = "bold";
        } else if (idx === idxSel && idx !== idxCorreto) {
          lbl.style.backgroundColor = "rgba(218, 54, 51, 0.2)";
          lbl.style.borderColor = "var(--accent-red)";
        }
      });

      const identificadorErro = `${casa.id}-${numQ}`;

      if (idxSel === idxCorreto) {
        if (feedbackDiv) {
          feedbackDiv.style.backgroundColor = "rgba(35, 134, 54, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-green)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-green);">✔ Resposta Correta!</strong><br><br><em>Comentário:</em> ${questaoObj.comentario}`;
        }
        cadernoErros = cadernoErros.filter(e => e.id !== identificadorErro);
      } else {
        if (feedbackDiv) {
          feedbackDiv.style.backgroundColor = "rgba(218, 54, 51, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-red)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-red);">✖ Resposta Incorreta.</strong><br><br><em>Comentário:</em> ${questaoObj.comentario}`;
        }
        if (!cadernoErros.some(e => e.id === identificadorErro)) {
          cadernoErros.push({ id: identificadorErro, casaId: casa.id, questao: questaoObj });
        }
      }
      if (feedbackDiv) feedbackDiv.style.display = "block";

      localStorage.setItem("enam_erros", JSON.stringify(cadernoErros));

      verificarCasaConcluida(casa);
      atualizarBarraProgresso();
    }

    labels.forEach(lbl => {
      lbl.addEventListener("click", () => processarResposta(lbl));
    });

    const handleKeypress = (e) => {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const indiceDesejado = parseInt(e.key) - 1;
        const primeiraNaoRespondida = document.querySelector(`.questao-card:not(.respondida)`);
        if (primeiraNaoRespondida) {
          const alvoLabel = primeiraNaoRespondida.querySelector(`.opcao-label[data-indice="${indiceDesejado}"]`);
          if (alvoLabel) processarResposta(alvoLabel);
        }
      }
    };
    
    document.removeEventListener("keydown", window.atalhoTecladoAtual);
    window.atalhoTecladoAtual = handleKeypress;
    document.addEventListener("keydown", handleKeypress);
  }

  function verificarCasaConcluida(casa) {
    const cards = document.querySelectorAll(`[id^="questao-${casa.id}-"]`);
    const respondidas = document.querySelectorAll(`[id^="questao-${casa.id}-"].respondida`);
    
    if (cards.length > 0 && cards.length === respondidas.length) {
      progressoSalvo[casa.id] = true;
      localStorage.setItem("enam_progresso", JSON.stringify(progressoSalvo));
      
      const btnCasa = document.getElementById(`btn-casa-${casa.id}`);
      if (btnCasa) {
        btnCasa.style.borderColor = "var(--accent-green)";
        btnCasa.innerHTML = `Casa ${casa.id} ✔`;
      }
    }
  }

  // LIMPA O CONTAINER ANTES DE RENDERIZAR PARA EVITAR DUPLICAÇÃO VISUAL
  seletorCasas.innerHTML = "";
  const idsJaCriados = new Set();

  // Renderiza botões do tabuleiro de forma única
  trilhaENAM.forEach((casa, index) => {
    if (idsJaCriados.has(casa.id)) return;
    idsJaCriados.add(casa.id);

    const btn = document.createElement("button");
    btn.className = "casa-btn";
    btn.id = `btn-casa-${casa.id}`;
    
    if (progressoSalvo[casa.id]) {
      btn.innerText = `Casa ${casa.id} ✔`;
      btn.style.borderColor = "var(--accent-green)";
    } else {
      btn.innerText = `Casa ${casa.id}`;
    }
    
    btn.addEventListener("click", () => {
      document.querySelectorAll(".casa-btn").forEach(b => {
        if(b.id.startsWith("btn-casa-")) b.classList.remove("active");
      });
      btn.classList.add("active");
      renderizarCasa(casa);
    });

    seletorCasas.appendChild(btn);

    if (seletorCasas.children.length === 1) {
      btn.classList.add("active");
      renderizarCasa(casa);
    }
  });

  atualizarBarraProgresso();

  // Ação do Botão Estatísticas (atribuída de forma segura caso o botão já exista)
  const btnEstatisticas = document.getElementById("btn-estatisticas");
  if (btnEstatisticas) {
    btnEstatisticas.addEventListener("click", () => {
      const totalCasasConcluidas = Object.values(progressoSalvo).filter(Boolean).length;
      const percentual = Math.round((totalCasasConcluidas / trilhaENAM.length) * 100) || 0;
      
      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">📊 Estatísticas de Desempenho</h2>
        <p style="margin-bottom: 10px;">Casas Concluídas: <strong>${totalCasasConcluidas} de ${trilhaENAM.length} (${percentual}%)</strong></p>
        <p style="margin-bottom: 10px;">Questões no Caderno de Erros: <strong>${cadernoErros.length}</strong></p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 20px;">Continue firme na sua jornada para o ENAM 2026! A constância é o segredo da aprovação.</p>
      `;
    });
  }

  // Ação do Botão Caderno de Erros
  const btnErros = document.getElementById("btn-erros");
  if (btnErros) {
    btnErros.addEventListener("click", () => {
      if (cadernoErros.length === 0) {
        conteudoCasa.innerHTML = `
          <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros</h2>
          <p>Parabéns! Você não tem questões pendentes no momento ou ainda não errou nenhuma questão.</p>
        `;
        return;
      }

      const errosHtml = cadernoErros.map(item => `
        <div class="questao-card" style="margin-bottom: 20px; border-color: var(--accent-red);">
          <span style="font-size: 0.8rem; color: var(--accent-red); font-weight: bold;">Casa ${item.casaId} - Questão ${item.questao.numero}</span>
          <p class="enunciado" style="margin-top: 8px;"><strong>${item.questao.enunciado}</strong></p>
          <div class="alternativas">
            ${item.questao.opcoes.map((opcao, idx) => `
              <div style="padding: 8px; margin: 4px 0; background: var(--bg-secondary); border-radius: 4px; font-size: 0.85rem; ${idx === item.questao.respostaCorreta ? 'border: 1px solid var(--accent-green); color: var(--accent-green);' : ''}">
                ${opcao} ${idx === item.questao.respostaCorreta ? '<strong>(Gabarito)</strong>' : ''}
              </div>
            `).join("")}
          </div>
          <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-muted);">
            <em>Comentário:</em> ${item.questao.comentario}
          </div>
        </div>
      `).join("");

      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros (${cadernoErros.length})</h2>
        <p style="margin-bottom: 15px; color: var(--text-muted); font-size: 0.9rem;">Revise com atenção as questões que você errou anteriormente:</p>
        ${errosHtml}
      `;
    });
  }
});
