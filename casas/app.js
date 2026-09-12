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
  // Histórico para estatísticas detalhadas (armazena { casaId, disciplina, dificuldade, acertou })
  let historicoRespostas = JSON.parse(localStorage.getItem("enam_historico")) || {};

  const headerContainer = document.querySelector("header");
  if (!document.getElementById("info-progresso")) {
    const barraTopo = document.createElement("div");
    barraTopo.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-top: 15px; flex-wrap: wrap; gap: 10px;";
    barraTopo.innerHTML = `
      <div id="info-progresso" style="font-size: 0.9rem; color: var(--text-muted);">
        Progresso: <strong>0/${trilhaENAM.length}</strong> casas concluídas
      </div>
      <div style="display: flex; gap: 10px;">
        <button id="btn-estatisticas" class="casa-btn" style="padding: 6px 12px; font-size: 0.85rem;">📊 Estatísticas & Gráficos</button>
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

    // Questões com nível de dificuldade explícito para alimentar os gráficos
    const questoesPadrao = casa.questoes && casa.questoes.length > 0 ? casa.questoes : [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
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
        dificuldade: "Média",
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
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: bold;">Questão ${q.numero} (ENAM/FGV)</span>
          <span style="font-size: 0.75rem; background: var(--bg-secondary); padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border-color);">Dificuldade: ${q.dificuldade || 'Média'}</span>
        </div>
        <p class="enunciado">${q.enunciado}</p>
        <div class="alternativas">
          ${q.opcoes.map((opcao, index) => `
            <label class="opcao-label" data-casa="${casa.id}" data-questao="${q.numero}" data-indice="${index}" data-correta="${q.respostaCorreta}" data-dificuldade="${q.dificuldade || 'Média'}">
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
      
      <!-- LINK DE SIMULADO BASEADO EM PROVA REAL DO ENAM -->
      <div style="background: rgba(88, 166, 255, 0.1); border: 1px solid var(--accent-blue, #58a6ff); padding: 12px; border-radius: 6px; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div>
          <strong>🎯 Simulado Oficial / Prova Real ENAM:</strong> Pratique com cadernos de questões inéditas e provas anteriores aplicadas pela banca.
        </div>
        <a href="https://www.qconcursos.com/questoes-de-concursos/provas/enam-2024-enam-exame-nacional-da-magistratura-primeira-etapa" target="_blank" class="link-pill" style="margin: 0; background: var(--accent-blue); color: #fff; font-weight: bold;">Acessar Prova Real ↗</a>
      </div>

      <div class="secao-titulo">1. Lei Seca Direta</div>
      <div class="link-box">${leiSecaHtml}</div>

      <div class="secao-titulo">2. Jurisprudência Relacionável (Resumo Direto)</div>
      <div class="link-box" style="background: var(--bg-secondary); padding: 12px; border-radius: 6px; font-size: 0.9rem; line-height: 1.5; margin-bottom: 15px;">
        <ul style="margin: 0; padding-left: 20px;">
          <li><strong>Tese Principal:</strong> A FGV exige a literalidade combinada com a última orientação dos tribunais superiores (STF/STJ).</li>
          <li><strong>Ponto-Chave:</strong> Atente-se sempre aos limites de modulação de efeitos e exceções expressas na lei.</li>
        </ul>
      </div>
      <div class="link-box">${jurisprudenciaHtml}</div>

      <div class="secao-titulo">3. 💡 Macete de Memorização (Mnemônico)</div>
      <div style="background: rgba(210, 153, 34, 0.15); border: 1px solid var(--accent-gold); padding: 12px; border-radius: 6px; margin-bottom: 15px; font-size: 0.9rem;">
        <strong>Regra de Ouro:</strong> <em>"O acessório segue o principal, mas o Precedente Vinculante manda no jogo."</em><br>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Memorize: Em caso de conflito, prevalece a tese vinculante do STF/STJ.</span>
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
      const dificuldade = labelEl.getAttribute("data-dificuldade");

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
      const acertou = (idxSel === idxCorreto);

      // Salva no histórico para alimentar os gráficos de estatísticas
      historicoRespostas[identificadorErro] = {
        disciplina: casa.disciplina,
        dificuldade: dificuldade || 'Média',
        acertou: acertou
      };
      localStorage.setItem("enam_historico", JSON.stringify(historicoRespostas));

      if (acertou) {
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
          cadernoErros.push({ 
            id: identificadorErro, 
            casaId: casa.id, 
            disciplina: casa.disciplina, 
            dificuldade: dificuldade || 'Média', 
            questao: questaoObj 
          });
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

  // BOTÃO ESTATÍSTICAS COM GRÁFICOS VISUAIS
  const btnEstatisticas = document.getElementById("btn-estatisticas");
  if (btnEstatisticas) {
    btnEstatisticas.addEventListener("click", () => {
      const totalConcluidas = Object.values(progressoSalvo).filter(Boolean).length;
      const percentual = Math.round((totalConcluidas / trilhaENAM.length) * 100) || 0;

      // Agrupa dados do histórico por Disciplina
      let statsDisc = {};
      let statsDif = { "Fácil": { acertos: 0, total: 0 }, "Média": { acertos: 0, total: 0 }, "Difícil (Magistratura)": { acertos: 0, total: 0 } };

      Object.values(historicoRespostas).forEach(item => {
        // Estatística por disciplina
        if (!statsDisc[item.disciplina]) {
          statsDisc[item.disciplina] = { acertos: 0, total: 0 };
        }
        statsDisc[item.disciplina].total++;
        if (item.acertou) statsDisc[item.disciplina].acertos++;

        // Estatística por dificuldade
        let dif = item.dificuldade || "Média";
        if (!statsDif[dif]) statsDif[dif] = { acertos: 0, total: 0 };
        statsDif[dif].total++;
        if (item.acertou) statsDif[dif].acertos++;
      });

      // Renderiza barras por Matéria
      let htmlDisciplinas = Object.keys(statsDisc).length === 0 ? `<p style="font-size:0.85rem; color: var(--text-muted);">Nenhuma questão respondida ainda.</p>` : "";
      for (let disc in statsDisc) {
        let s = statsDisc[disc];
        let pAcerto = Math.round((s.acertos / s.total) * 100);
        htmlDisciplinas += `
          <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 3px;">
              <span><strong>${disc}</strong></span>
              <span>${s.acertos}/${s.total} acertos (${pAcerto}%)</span>
            </div>
            <div style="background: var(--bg-secondary); border-radius: 4px; height: 10px; width: 100%; overflow: hidden;">
              <div style="background: var(--accent-green); height: 100%; width: ${pAcerto}%;"></div>
            </div>
          </div>
        `;
      }

      // Renderiza barras por Dificuldade
      let htmlDificuldade = "";
      for (let dif in statsDif) {
        let d = statsDif[dif];
        let pDif = d.total > 0 ? Math.round((d.acertos / d.total) * 100) : 0;
        htmlDificuldade += `
          <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 3px;">
              <span><strong>${dif}</strong></span>
              <span>${d.acertos}/${d.total} acertos (${pDif}%)</span>
            </div>
            <div style="background: var(--bg-secondary); border-radius: 4px; height: 10px; width: 100%; overflow: hidden;">
              <div style="background: var(--accent-gold); height: 100%; width: ${pDif}%;"></div>
            </div>
          </div>
        `;
      }

      conteudoCasa.innerHTML = `
        <h2 style="color: var(--text-highlight); margin-bottom: 15px;">📊 Estatísticas e Gráficos de Desempenho</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
          <div style="background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Trilha Concluída</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent-green);">${totalConcluidas}/${trilhaENAM.length} (${percentual}%)</div>
          </div>
          <div style="background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Erros Pendentes</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent-red);">${cadernoErros.length} questões</div>
          </div>
        </div>

        <h3 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 10px;">Desempenho por Matéria</h3>
        <div style="background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 20px;">
          ${htmlDisciplinas}
        </div>

        <h3 style="font-size: 1rem; color: var(--text-highlight); margin-bottom: 10px;">Desempenho por Grau de Dificuldade</h3>
        <div style="background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
          ${htmlDificuldade}
        </div>
      `;
    });
  }

  // BOTÃO CADERNO DE ERROS COM GRAU DE DIFICULDADE E DISCIPLINA
  const btnErros = document.getElementById("btn-erros");
  if (btnErros) {
    btnErros.addEventListener("click", () => {
      if (cadernoErros.length === 0) {
        conteudoCasa.innerHTML = `
          <h2 style="color: var(--text-highlight); margin-bottom: 15px;">🚨 Caderno de Erros</h2>
          <p>Tudo limpo! Nenhuma pendência de revisão no momento.</p>
        `;
        return;
      }

      const errosHtml = cadernoErros.map(item => `
        <div class="questao-card" style="margin-bottom: 20px; border-color: var(--accent-red);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.8rem; color: var(--accent-red); font-weight: bold;">[${item.disciplina || 'Geral'}] Casa ${item.casaId} - Questão ${item.questao.numero}</span>
            <span style="font-size: 0.75rem; background: rgba(218,54,51,0.1); color: var(--accent-red); padding: 2px 8px; border-radius: 4px; border: 1px solid var(--accent-red);">Dificuldade: ${item.dificuldade || 'Média'}</span>
          </div>
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
        <p style="margin-bottom: 15px; font-size: 0.9rem; color: var(--text-muted);">Questões organizadas por matéria e grau de dificuldade para revisão cirúrgica:</p>
        ${errosHtml}
      `;
    });
  }
});
