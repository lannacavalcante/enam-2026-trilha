// Exemplo: casas/casa1.js
const casa1 = {
  id: 1,
  titulo: "Controle Concentrado de Constitucionalidade",
  disciplina: "Direito Constitucional",
  prioridade: "Alta",
  leiSeca: [
    { rotulo: "CF/88, Art. 102, I, 'a'", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art102" },
    { rotulo: "CF/88, Art. 103", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art103" },
    { rotulo: "Lei nº 9.868/1999", url: "https://www.planalto.gov.br/ccivil_03/leis/l9868.htm" }
  ],
  jurisprudencia: [
    { rotulo: "STF: Legitimidade e Pertinência Temática", url: "https://www.google.com/search?q=site:stf.jus.br+jurisprudencia+\"pertinencia+tematica\"" },
    { rotulo: "STF: Princípio da Subsidiariedade (ADPF)", url: "https://www.google.com/search?q=site:stf.jus.br+jurisprudencia+\"ADPF\"+\"subsidiariedade\"" }
  ],
  resumo: "O STF exige demonstração estrita de pertinência temática para os legitimados especiais (art. 103, IV, V e IX). Vige o princípio da causa de pedir aberta associado à vinculação estrita ao pedido (princípio da congruência), admitida apenas a inconstitucionalidade por arrastamento.",
  pegadinhaFGV: "A FGV formula casos de leis municipais impugnadas perante o STF via ADI. Lembre-se: lei puramente municipal em face da CF só pode ser apreciada no STF via ADPF.",
  questoes: [
    {
      numero: 1,
      enunciado: "Determinada confederação sindical de servidores...",
      opcoes: [
        "A) Conhece-se a ação pela legitimidade universal.",
        "B) Não conhecimento por ausência de pertinência temática.",
        "C) Admite-se ratificação pelo PGR.",
        "D) Dispensada a pertinência temática se a lei for federal."
      ],
      respostaCorreta: 1,
      comentario: "Confederações sindicais dependem da demonstração de nexo temático direto entre a norma e suas atribuições funcionais."
    }
    // Repetir até completar as 10 questões
  ]
};
