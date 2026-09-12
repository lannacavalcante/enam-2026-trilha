// casas/app.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof trilhaENAM === "undefined" || trilhaENAM.length === 0) {
    console.error("Nenhuma casa encontrada na trilha.");
    return;
  }

  const seletorCasas = document.getElementById("seletor-casas");
  const conteudoCasa = document.getElementById("conteudo-casa");

  let progressoSalvo = JSON.parse(localStorage.getItem("enam_progresso")) || {};
  let cadernoErros = JSON.parse(localStorage.getItem("enam_erros")) || [];

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

    // GERADOR DE QUESTÕES REAIS / PADRÃO ENAM-FGV MAIS DIFÍCEIS
    // Caso o array casa.questoes não tenha questões avançadas injetadas, criamos um simulado de alta exigência contextualizado
    const questoesPadrao = casa.questoes && casa.questoes.length > 0 ? casa.questoes : [
      {
        numero: 1,
        enunciado: `Em sede de controle concentrado de constitucionalidade, o Plenário do STF modulou os efeitos de decisão declaratória de inconstitucionalidade de lei tributária restitiva de direitos, conferindo-lhe eficácia <em>ex nunc</em>. Posteriormente, fundamentando-se na referida decisão da Corte Suprema, um contribuinte ajuizou ação rescisória visando desconstituir julgado transitado em julgado que lhe fora desfavorável antes da modulação. À luz da jurisprudência vinculante e da sistemática constitucional, assinale a alternativa correta:`,
        opcoes: [
          "A ação rescisória é inteiramente incabível, visto que a modulação de efeitos opera preclusão máxima intransponível sobre quaisquer relações jurídicas anteriores.",
          "A ação rescisória é cabível, desde que respeitados os limites estritos da modulação temporal fixada pelo Supremo Tribunal Federal, que baliza os efeitos retroativos ou prospectivos do julgado.",
          "A decisão do STF em controle concentrado possui eficácia erga omnes automática, derrogando de plano e sem necessidade de ação autônoma todas as sentenças passadas, independentemente de trânsito em julgado.",
          "O ajuizamento de ação rescisória é vedado em matéria tributária quando houver modulação restritiva, prevalecendo a segurança jurídica absoluta da coisa julgada material em detrimento da isonomia.",
          "A via adequada para o pleito seria o mandado de segurança coletivo repressivo, sendo imprópria a ação rescisória por ausência de previsão legal expressa no Código de Processo Civil."
        ],
        respostaCorreta: 1,
        comentario: "Conforme a jurisprudência do STF, a modulação de efeitos no controle concentrado delimita o alcance temporal da declaração de inconstitucionalidade, balizando o cabimento de ações rescisórias e permitindo-as estritamente dentro dos parâmetros prospectivos ou retroativos definidos pela Corte no acórdão paradigma."
      },
      {
        numero: 2,
        enunciado: `Durante investigação criminal complexa conduzida pelo Ministério Público, autorizou-se judicialmente interceptação telefônica devidamente fundamentada. No curso das diligências, os órgãos de persecução penal descobriram fortuitamente ('encontro fortuito de provas') a prática de infração penal diversa, conexa, punida com reclusão, mas que não era o objeto original da investigação. Diante desse cenário e do entendimento consolidado do STJ e STF, assinale a afirmativa correta:`,
        opcoes: [
          "A prova colhida fortuitamente é considerada ilícita por desvio de finalidade, devendo ser imediatamente entranhada em autos apartados e destruída, vedado o seu aproveitamento.",
          "O aproveitamento do encontro fortuito de provas é plenamente válido e lícito, desde que o delito descoberto seja punido com reclusão e guarde conexão com os fatos investigados ou evidencie organização criminosa, dispensando nova autorização judicial.",
          "A utilização da prova fortuita depende impreterivelmente de imediata oitiva da defesa técnica e de concordância expressa do juiz natural da causa originária por meio de incidente de cizânia processual.",
          "O encontro fortuito de provas só possui validade jurídica se o crime revelado for de menor potencial ofensivo, visando proteger o princípio da proporcionalidade estrita.",
          "A prova é natimorta, aplicando-se a teoria dos frutos da árvore envenenada, visto que a interceptação telefônica é medida cautelar de interpretação restritiva insuscetível de ampliações teleológicas."
        ],
        respostaCorreta: 1,
        comentario: "O STF e o STJ firmaram entendimento de que o encontro fortuito de provas (serendipidade) em interceptações telefônicas legais é válido, desde que o crime fortuito seja punido com pena de reclusão e haja conexão com o fato investigado ou revele organização criminosa, sem exigência de prévia autorização específica para aquele delito incidental."
      }
    ];

    const questoesHtml = questoesPadrao.map(q => `
      <div class="questao-card" id="questao-${casa.id}-${q.numero}">
        <p class="enunciado"><strong>Questão ${q.numero} (Padrão ENAM/FGV):</strong> ${q.enunciado}</p>
        <div class="alternativas">
          ${q.opcoes.map((opcao, index) => `
            <label class="opcao-label" data-casa="${casa.id}" data-questao="${q.numero}" data-indice="${index}" data-correta="${q.respostaCorreta}">
              <input type="radio" name="q${casa.id}-${q.numero}" value="${index}"> [${String.fromCharCode(65 + index)}] ${opcao}
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

      <div class="secao-titulo">5. Simulado de Alta Complexidade (Padrão Magistratura) <span style="font-size: 0.75rem; color: var(--text-muted);">(Atalhos: use as teclas 1, 2, 3, 4 ou 5)</span></div>
      ${questoesHtml}
    `;

    ativarLogicaQuestao(casa, questoesPadrao);
  }

  function ativarLogicaQuestao(casa, questoesPadrao) {
    const labels = document.querySelectorAll(`.opcao-label[data-casa="${casa.id}"]`);
    
    function processarResposta(labelEl) {
      const numQ = labelEl.getAttribute("data-questao");
      const idxSel = parseInt(labelEl.getAttribute("data-indice"));
      const idxCorreto = parseInt(labelEl.getAttribute("data-correta"));

      const cardQ = document.getElementById(`questao-${casa.id}-${numQ}`);
      if (!cardQ || cardQ.classList.contains("respondida")) return;
      cardQ.classList.add("respondida");

      cardQ.querySelectorAll("input[type='radio']").forEach(i => i.disabled = true);

      const questaoObj = questoesPadrao.find(q => q.numero == numQ);
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
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-green);">✔ Resposta Correta!</strong><br><br><em>Comentário Estratégico:</em> ${questaoObj.comentario}`;
        }
        cadernoErros = cadernoErros.filter(e => e.id !== identificadorErro);
      } else {
        if (feedbackDiv) {
          feedbackDiv.style.backgroundColor = "rgba(218, 54, 51, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-red)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-red);">✖ Resposta Incorreta.</strong><br><br><em>Comentário Estratégico:</em> ${questaoObj.comentario}`;
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
      if (["1", "2", "3", "4", "5"].includes(e.key)) {
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

  seletorCasas.innerHTML = "";
  const idsJaCriados = new Set();

  trilhaENAM.forEach((casa) => {
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

  const btnEstatisticas = document.getElementById("btn-estatisticas");
  if (btnEstatisticas) {
    btnEstatisticas.addEventListener("click", () => {
      const totalCasasConcluidas = Object.values(progressoSalvo).filter(Boolean).length;
      const percentual = Math.round((totalCasasConcluidas / trilhaENAM.length) * 100) || 0;
      
      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">📊 Estatísticas de Desempenho</h2>
        <p style="margin-bottom: 10px;">Casas Concluídas: <strong>${totalCasasConcluidas} de ${trilhaENAM.length} (${percentual}%)</strong></p>
        <p style="margin-bottom: 10px;">Questões Desafiadoras no Caderno de Erros: <strong>${cadernoErros.length}</strong></p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 20px;">Você está se preparando no padrão de exigência da Magistratura! Foco total nas teses do STF e STJ.</p>
      `;
    });
  }

  const btnErros = document.getElementById("btn-erros");
  if (btnErros) {
    btnErros.addEventListener("click", () => {
      if (cadernoErros.length === 0) {
        conteudoCasa.innerHTML = `
          <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros</h2>
          <p>Excelente! Nenhuma questão pendente de revisão complexa no momento.</p>
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
                [${String.fromCharCode(65 + idx)}] ${opcao} ${idx === item.questao.respostaCorreta ? '<strong>(Gabarito Comentado)</strong>' : ''}
              </div>
            `).join("")}
          </div>
          <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-muted);">
            <em>Comentário Estratégico:</em> ${item.questao.comentario}
          </div>
        </div>
      `).join("");

      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros (${cadernoErros.length})</h2>
        <p style="margin-bottom: 15px; color: var(--text-muted); font-size: 0.9rem;">Revisão direcionada dos pontos críticos de alta dificuldade:</p>
        ${errosHtml}
      `;
    });
  }
});
