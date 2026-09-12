// casas/trilha-completa.js
// Trilha de Estudo Estratégica ENAM 2026 (Foco 90%+) - Módulos de Constitucional, Processual Civil, etc.

const trilhaENAM = [
  // ==========================================
  // MÓDULO 1: DIREITO CONSTITUCIONAL
  // ==========================================
  {
    id: 1,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Poder Constituinte e Mutações Constitucionais",
    leiSeca: [
      { rotulo: "CF/88, Art. 60 (Emendas Constitucionais)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art60" }
    ],
    jurisprudencia: [
      { rotulo: "STF: Limites materiais implícitos e explícitos às PECs", url: "https://www.google.com/search?q=site:stf.jus.br+limites+materiais+PEC" }
    ],
    resumo: "O Poder Constituinte Originário é ilimitado, autônomo e incondicionado. O Derivado (Reformador) submete-se às limitações temporais, circunstanciais, formais e materiais (cláusulas pétreas do art. 60, § 4º).",
    pegadinhaFGV: "A FGV adora tentar fazer crer que direitos fundamentais fora do art. 5º não podem ser cláusulas pétreas. Lembre-se: o rol do art. 60, § 4º é exemplificativo.",
    questoes: [
      {
        numero: 1,
        enunciado: "Em relação ao poder constituinte derivado reformador, assinale a alternativa correta segundo a jurisprudência do STF:",
        opcoes: [
          "A) As normas constitucionais originárias podem ser alteradas por maioria simples do Congresso.",
          "B) O rol de cláusulas pétreas do art. 60, § 4º é taxativo.",
          "C) É vedada a proposta de emenda tendente a abolir a forma federativa de Estado.",
          "D) O Presidente da República pode vetar Emenda Constitucional aprovada."
        ],
        respostaCorreta: 2,
        comentario: "O art. 60, § 4º, I, da CF veda expressamente PEC tendente a abolir a forma federativa de Estado (cláusula pétrea)."
      }
    ]
  },
  {
    id: 2,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Direitos e Garantias Fundamentais I (Individuais e Coletivos)",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, Caput e incisos essenciais", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5" }
    ],
    jurisprudencia: [
      { rotulo: "STF Tema 280 (Inviolabilidade de Domicílio)", url: "https://www.google.com/search?q=site:stf.jus.br+Tema+280" }
    ],
    resumo: "Os direitos fundamentais possuem aplicação imediata, relatividade e eficácia horizontal. A inviolabilidade domiciliar protege qualquer compartimento privado não aberto ao público.",
    pegadinhaFGV: "A banca confunde prisão civil de depositário infiel (hoje vedada em qualquer hipótese pelo STF, Súmula Vinculante 25) com a do inadimplente de pensão alimentícia.",
    questoes: [
      {
        numero: 1,
        enunciado: "À luz da jurisprudência do STF, é lícita a prisão civil por dívida no ordenamento jurídico brasileiro em qual das seguintes hipóteses?",
        opcoes: [
          "A) Depositário infiel em qualquer modalidade contratual.",
          "B) Inadimplente voluntário e inescusável de obrigação alimentar.",
          "C) Descumprimento de contrato de alienação fiduciária em garantia.",
          "D) Falência de empresário individual com fraude comprovada."
        ],
        respostaCorreta: 1,
        comentario: "Conforme o art. 5º, LXVII, da CF e o Pacto de São José da Costa Rica (internalizado com status supralegal), apenas o inadimplente de obrigação alimentar admite prisão civil."
      }
    ]
  },

  // ==========================================
  // MÓDULO 2: DIREITO PROCESSUAL CIVIL
  // ==========================================
  {
    id: 10,
    disciplina: "Direito Processual Civil",
    prioridade: "Máxima",
    titulo: "Normas Fundamentais do Processo Civil",
    leiSeca: [
      { rotulo: "CPC/2015, Arts. 1º ao 12", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STJ: Primazia da decisão de mérito e cooperação", url: "https://www.google.com/search?q=site:stj.jus.br+primazia+decisao+de+merito" }
    ],
    resumo: "O CPC de 2015 é estruturado com base nos valores constitucionais, destacando o princípio da boa-fé objetiva processual, o contraditório substancial (vedação à decisão surpresa) e a primazia do julgamento de mérito.",
    pegadinhaFGV: "A FGV costuma afirmar que o juiz pode decidir com base em fundamento a respeito do qual não se deu oportunidade às partes se manifestarem. Errado, em virtude da vedação à decisão surpresa (art. 10 do CPC).",
    questoes: [
      {
        numero: 1,
        enunciado: "Com base nas normas fundamentais do CPC/2015, assinale a opção correta sobre a vedação à decisão surpresa:",
        opcoes: [
          "A) Aplica-se exclusivamente às matérias de ordem pública cognoscíveis de ofício.",
          "B) O juiz não pode decidir, em grau algum de jurisdição, com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de manifestar-se, ainda que sobre matéria anexa.",
          "C) Restringe-se aos processos que tramitam sob o rito dos juizados especiais cíveis.",
          "D) Pode ser suprida se a parte prejudicada interpor embargos de declaração no prazo de 5 dias."
        ],
        respostaCorreta: 1,
        comentario: "O art. 10 do CPC consagra expressamente o princípio do contraditório substancial, proibindo a decisão surpresa inclusive em matérias sobre as quais o juiz deva decidir de ofício."
      }
    ]
  }

  // ... Continue adicionando as demais casas seguindo este exato modelo até a Casa 50.
];
