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

    // GERADOR DE QUESTÕES DE ALTA COMPLEXIDADE (PADRÃO MAGISTRATURA / FGV)
    const questoesPadrao = casa.questoes && casa.questoes.length > 0 ? casa.questoes : [
      {
        numero: 1,
        enunciado: `Em sede de controle concentrado de constitucionalidade, o Plenário do STF modulou os efeitos de decisão declaratória de inconstitucionalidade com eficácia <em>ex nunc</em>. Posteriormente, um contribuinte ajuizou ação rescisória para desconstituir julgado anterior desfavorável. À luz da jurisprudência vinculante, assinale a correta:`,
        opcoes: [
          "A ação rescisória é inteiramente incabível por preclusão máxima.",
          "A ação rescisória é cabível, desde que respeitados estritamente os limites da modulação temporal fixada pelo STF.",
          "A decisão do STF anula automaticamente todas as sentenças passadas sem necessidade de ação autônoma.",
          "O ajuizamento de ação rescisória é vedado em matéria tributária por segurança jurídica absoluta.",
          "A via adequada seria exclusivamente o mandado de segurança coletivo."
        ],
        respostaCorreta: 1,
        comentario: "STF: A modulação temporal baliza o cabimento de ações rescisórias, permitindo-as estritamente dentro dos parâmetros definidos no acórdão paradigma."
      },
      {
        numero: 2,
        enunciado: `Durante interceptação telefônica legal, os órgãos de persecução descobriram fortuitamente ('serendipidade') a prática de crime diverso, conexo, punido com reclusão, mas que não era o objeto original. Assinale a afirmativa correta:`,
        opcoes: [
          "A prova fortuita é ilícita por desvio de finalidade e deve ser destruída.",
          "O aproveitamento do encontro fortuito é válido, desde que o crime descoberto seja punido com reclusão e haja conexão ou organização criminosa, dispensando nova autorização.",
          "A utilização depende de imediata oitiva da defesa e concordância do juiz da causa.",
          "O encontro fortuito só vale se o crime revelado for de menor potencial ofensivo.",
          "A prova é nula por aplicação da teoria dos frutos da árvore envenenada."
        ],
        respostaCorreta: 1,
        comentario: "STF/STJ: O encontro fortuito em interceptação legal é lícito se o crime isolado admitir reclusão e houver conexão com os fatos apurados."
      }
    ];

    const questoesHtml = questoesPadrao.map(q => `
      <div class="questao-card" id="questao-${casa.id}-${q.numero}">
        <p class="enunciado"><strong>Questão ${q.numero} (ENAM/FGV):</strong> ${q.enunciado}</p>
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
      
      <div class="secao-titulo">1. Lei Seca Direta</div>
      <div class="link-box">${leiSecaHtml}</div>

      <div class="secao-titulo">2. Jurisprudência Relacionável (Resumo Direto)</div>
      <div class="link-box" style="background: var(--bg-secondary); padding: 12px; border-radius: 6px; font-size: 0.9rem; line-height: 1.5; margin-bottom: 15px;">
        <ul style="margin: 0; padding-left: 20px;">
          <li><strong>Tese Principal:</strong> A FGV exige a literalidade combinada com a última orientação dos tribunais superiores (STF/STJ).</li>
          <li><strong>Ponto-Chave:</strong> Atente-se sempre aos limites de modulação de efeitos, competências absolutas e exceções expressas na lei.</li>
        </ul>
      </div>
      <div class="link-box">${jurisprudenciaHtml}</div>

      <div class="secao-titulo">3. 💡 Macete de Memorização (Mnemônico)</div>
      <div style="background: rgba(210, 153, 34, 0.15); border: 1px solid var(--accent-gold); padding: 12px; border-radius: 6px; margin-bottom: 15px; font-size: 0.9rem;">
        <strong>Regra de Ouro:</strong> <em>"O acessório segue o principal, mas a Súmula Vinculante manda no jogo."</em><br>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Memorize: Sempre que houver conflito entre regra geral e precedente vinculante, prevalece a tese defensiva do tribunal superior.</span>
      </div>

      <div class="secao-titulo">4. Radar de Pegadinhas (FGV)</div>
      <div class="pegadinha-card">
        <strong>⚠️ Pegadinha clássica:</strong> ${casa.pegadinhaFGV}
      </div>

      <div class="secao-titulo">5. Simulado de Alta Complexidade <span style="font-size: 0.75rem; color: var(--text-muted);">(Atalhos: Teclas 1 a 5)</span></div>
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
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-green);">✔ Correto!</strong><br><em>Justificativa:</em> ${questaoObj.comentario}`;
        }
        cadernoErros = cadernoErros.filter(e => e.id !== identificadorErro);
      } else {
        if (feedbackDiv) {
          feedbackDiv.style.backgroundColor = "rgba(218, 54, 51, 0.15)";
          feedbackDiv.style.border = "1px solid var(--accent-red)";
          feedbackDiv.innerHTML = `<strong style="color: var(--accent-red);">✖ Incorreto.</strong><br><em>Justificativa:</em> ${questaoObj.comentario}`;
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
      const totalConcluidas = Object.values(progressoSalvo).filter(Boolean).length;
      const percentual = Math.round((totalConcluidas / trilhaENAM.length) * 100) || 0;
      
      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">📊 Estatísticas de Desempenho</h2>
        <p style="margin-bottom: 10px;">Casas Concluídas: <strong>${totalConcluidas} de ${trilhaENAM.length} (${percentual}%)</strong></p>
        <p style="margin-bottom: 10px;">Itens no Caderno de Erros: <strong>${cadernoErros.length}</strong></p>
      `;
    });
  }

  const btnErros = document.getElementById("btn-erros");
  if (btnErros) {
    btnErros.addEventListener("click", () => {
      if (cadernoErros.length === 0) {
        conteudoCasa.innerHTML = `
          <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros</h2>
          <p>Tudo limpo! Nenhuma pendência de revisão.</p>
        `;
        return;
      }

      const errosHtml = cadernoErros.map(item => `
        <div class="questao-card" style="margin-bottom: 20px; border-color: var(--accent-red);">
          <span style="font-size: 0.8rem; color: var(--accent-red); font-weight: bold;">Casa ${item.casaId} - Questão ${item.questao.numero}</span>
          <p class="enunciado" style="margin-top: 8px;"><strong>${item.questao.enunciado}</strong></p>
          <div class="alternativas">
            ${item.questao.opcoes.map((opcao, idx) => `
              <div style="padding: 6px; margin: 3px 0; background: var(--bg-secondary); border-radius: 4px; font-size: 0.85rem; ${idx === item.questao.respostaCorreta ? 'border: 1px solid var(--accent-green); color: var(--accent-green);' : ''}">
                [${String.fromCharCode(65 + idx)}] ${opcao} ${idx === item.questao.respostaCorreta ? '<strong>(Gabarito)</strong>' : ''}
              </div>
            `).join("")}
          </div>
          <div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">
            <em>Justificativa:</em> ${item.questao.comentario}
          </div>
        </div>
      `).join("");

      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros (${cadernoErros.length})</h2>
        ${errosHtml}
      `;
    });
  }
});
