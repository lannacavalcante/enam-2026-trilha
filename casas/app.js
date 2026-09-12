// casas/dados.js (ou trilha-completa.js)
const trilhaENAM = [
  // ==========================================
  // I. DIREITO CONSTITUCIONAL (Casas 1 a 15)
  // ==========================================
  {
    id: 1,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Teoria da Constituição, Constitucionalismo e Poder Constituinte",
    leiSeca: [
      { rotulo: "CF/88, Art. 60 (Poder Constituinte Derivado Reformador)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art60" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 815 (Inconstitucionalidade de normas originárias e poder constituinte)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A FGV costuma tentar confundir poder constituinte derivado reformador com poder decorrente, além de afirmar a possibilidade de controle de constitucionalidade sobre normas constitucionais originárias (rejeitado expressamente pela jurisprudência do STF).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "A respeito das normas constitucionais originárias e do exercício do Poder Constituinte no ordenamento jurídico brasileiro, assinale a opção correta à luz da jurisprudência do Supremo Tribunal Federal:",
        opcoes: [
          "É admissível o controle concentrado de constitucionalidade em face de norma constitucional originária por ofensa a tratados de direitos humanos.",
          "O STF não admite a teoria das normas constitucionais inconstitucionais quando se trata do texto originário emanado pelo Poder Constituinte Originário.",
          "A mutação constitucional permite a alteração formal do texto da Carta Magna por deliberação judicial em sede de controle difuso.",
          "Norma originária pode ser considerada nula de pleno direito caso afronte cláusula pétrea instituída em assembleia prévia.",
          "O Poder Constituinte Derivado Decorrente possui eficácia ilimitada para reestruturar as cartas estaduais sem observância das normas de reprodução obrigatória."
        ],
        respostaCorreta: 1,
        comentario: "O STF firmou na ADI 815 que as normas constitucionais originárias não sofrem controle de constitucionalidade jurisdicional, repelindo a teoria das normas constitucionais inconstitucionais no Brasil."
      }
    ]
  },
  {
    id: 2,
    disciplina: "Direito Constitucional",
    prioridade: "Média",
    titulo: "Estrutura, Conteúdo e Eficácia do Preâmbulo e ADCT",
    leiSeca: [
      { rotulo: "CF/88, Preâmbulo e Disposições Transitórias", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#adct" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 2076 (Invocação da proteção de Deus e força normativa do preâmbulo)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Cuidado: o preâmbulo constitucional não possui força normativa vinculante, não constitui parâmetro de controle de constitucionalidade nem é de reprodução obrigatória pelos Estados-membros.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Constituição Estadual que omite expressamente no preâmbulo a invocação da proteção de Deus é objeto de impugnação perante a jurisdição constitucional. Segundo entendimento consolidado do STF:",
        opcoes: [
          "É inconstitucional por violação ao princípio da simetria e norma de reprodução obrigatória.",
          "É constitucional, pois o preâmbulo da Constituição da República não tem força jurídica cogente nem eficácia vinculante.",
          "É inconstitucional, uma vez que o preâmbulo é dotado de conteúdo material vinculante e paradigmático.",
          "Gera vício formal subjetivo sanável mediante emenda parlamentar automática.",
          "Requer suprimento obrigatório via modulação temporal de efeitos em controle concentrado."
        ],
        respostaCorreta: 1,
        comentario: "Na ADI 2076, o Pleno do STF assentou que o preâmbulo da CF/88 não se situa no âmbito do Direito, carecendo de força normativa vinculante e não consistindo norma de reprodução obrigatória."
      }
    ]
  },
  {
    id: 3,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Teoria da Norma Constitucional: Eficácia e Aplicação no Tempo e Espaço",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, § 1º (Aplicação Imediata dos Direitos Fundamentais)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5p1" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Repercussão Geral Tema 339 e ADI 2 (Revogação/Não recepção de leis anteriores)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O direito brasileiro não adota o instituto da inconstitucionalidade superveniente. A legislação pré-constitucional incompatível é revogada por ausência de recepção, não sendo atacável por ADI comum, salvo ADPF.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A respeito da recepção e da eficácia das normas infraconstitucionais editadas anteriormente ao advento da Constituição da República de 1988, é correto afirmar:",
        opcoes: [
          "O direito brasileiro admite formalmente a tese da inconstitucionalidade superveniente de diplomas legais.",
          "A lei pré-constitucional incompatível com a nova Carta é tida por não recepcionada (revogada), não sendo objeto idôneo de Ação Direta de Inconstitucionalidade genérica.",
          "As normas constitucionais de eficácia contida dependem obrigatoriamente de lei integrativa posterior para gerar qualquer efeito jurídico.",
          "A não recepção opera efeitos constitutivos ex nunc que demandam declaração pelo quórum de maioria de dois terços do STF.",
          "Apenas diplomas federais pré-constitucionais podem ser impugnados mediante ação de controle concentrado difuso."
        ],
        respostaCorreta: 1,
        comentario: "O STF não adota a teoria da inconstitucionalidade superveniente; o confronto de lei pré-constitucional com a nova ordem resolve-se no plano da revogação por não-recepção (incabível ADI, admitindo-se subsidiariamente ADPF)."
      }
    ]
  },
  {
    id: 4,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Interpretação Constitucional, Hermenêutica e Separação de Poderes",
    leiSeca: [
      { rotulo: "CF/88, Art. 2º (Poderes da União)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art2" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 656558 (Interpretação conforme e limites da hermenêutica judicial)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A interpretação conforme a Constituição não pode subverter o sentido unívoco e literal da lei quando não houver espaço para plurissignificação, sob pena de atuação indevida como legislador positivo.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Sobre a técnica de interpretação conforme a Constituição, assinale a proposição consentânea com a doutrina e jurisprudência:",
        opcoes: [
          "É cabível mesmo diante de expressões textuais inequívocas e sem espaço hermenêutico para polissemia legislativa.",
          "Constitui técnica aplicável exclusivamente perante o órgão fracionário de Tribunal de Justiça em mandados de segurança.",
          "Exige espaço de plurissignificação no texto examinado, visando resguardar a presunção de constitucionalidade da lei sem atuar como legislador positivo.",
          "Impossibilita o STF de conferir eficácia vinculante e erga omnes às decisões fixadas.",
          "Opera unicamente em sede de ação popular com efeitos retroativos inter partes."
        ],
        respostaCorreta: 2,
        comentario: "A interpretação conforme à Constituição só é admitida quando há espaço para interpretações plúrimas da norma, não podendo transfigurar o sentido inequívoco adotado pelo legislador."
      }
    ]
  },
  {
    id: 5,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Princípios Fundamentais da República Federativa do Brasil",
    leiSeca: [
      { rotulo: "CF/88, Arts. 1º a 4º (Princípios Fundamentais)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art1" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 3510 (Células-tronco embrionárias e dignidade humana)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A banca costuma trocar fundamentos da República (art. 1º) com objetivos fundamentais (art. 3º) e princípios das relações internacionais (art. 4º).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "Nos termos da Constituição Federal de 1988, constitui objetivo fundamental da República Federativa do Brasil:",
        opcoes: [
          "A soberania e a cidadania plena.",
          "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.",
          "A prevalência dos direitos humanos no plano global.",
          "O pluralismo político e os valores sociais do trabalho.",
          "A concessão de asilo político e autodeterminação dos povos."
        ],
        respostaCorreta: 1,
        comentario: "O art. 3º, III, da CF/88 elenca a erradicação da pobreza e da marginalização e a redução das desigualdades sociais e regionais como objetivos fundamentais."
      }
    ]
  },
  {
    id: 6,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Teoria Geral dos Direitos Fundamentais e Eficácia Horizontal",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, §§ 1º ao 3º", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 201819 (Eficácia horizontal dos direitos fundamentais em associações)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Atenção: Os direitos fundamentais incidem nas relações entre particulares de modo direto e imediato (eficácia horizontal direta), não necessitando de mediação legal obrigatória.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A expulsão sumária de associado de entidade privada sem abertura de contraditório e contradita processual viola a ordem constitucional com base na:",
        opcoes: [
          "Eficácia vertical exclusiva e indelegável do Estado.",
          "Teoria da eficácia horizontal direta e imediata dos direitos fundamentais nas relações privadas.",
          "Reserva estrita de jurisdição aplicável apenas aos contratos bancários.",
          "Cláusula de barreira normativa sem impacto sobre entidades particulares.",
          "Restrição institucional de legitimidade de órgãos sindicais."
        ],
        respostaCorreta: 1,
        comentario: "O STF consolidou que as violações aos direitos fundamentais não ocorrem somente no âmbito das relações entre o cidadão e o Estado, incidindo também nas relações privadas (eficácia horizontal)."
      }
    ]
  },
  {
    id: 7,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Garantias Processuais Constitucionais e Regime das Provas Ilícitas",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, incisos LIII a LVII", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5liii" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 251445 e Tema 999 (Provas ilícitas por derivação e serendipidade)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Admite-se o encontro fortuito de provas (serendipidade) em interceptações telefônicas, desde que haja legalidade da medida originária e correlação ou conexão investigativa.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Em matéria de interceptação legalmente autorizada para apurar crime punido com reclusão, descobre-se acidentalmente elemento sobre delito conexo. O aproveitamento do material:",
        opcoes: [
          "É ilícito por constituir nulidade insanável e desvio de finalidade estrita.",
          "É legítimo segundo a teoria do encontro fortuito de provas (serendipidade), mantida a higidez do ato originário.",
          "Exige ajuizamento imediato de ação declaratória de nulidade preliminar pela defesa.",
          "Submete-se à exclusão obrigatória por constituir fruto da árvore envenenada.",
          "Fica restrito aos casos em que a pena de detenção for inferior a seis meses."
        ],
        respostaCorreta: 1,
        comentario: "Segundo o STF e STJ, é lícita a valoração de crime conexo achado fortuitamente no bojo de interceptação validamente instaurada."
      }
    ]
  },
  {
    id: 8,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Direitos Fundamentais Sociais, Mínimo Existencial e Vedação ao Retrocesso",
    leiSeca: [
      { rotulo: "CF/88, Arts. 6º a 11 (Direitos Sociais)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art6" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADPF 45 e Tema 6 (Fornecimento de medicamentos e reserva do possível)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A cláusula da reserva do possível não pode ser invocada de modo abstrato ou genérico pelo Estado para aniquilar o núcleo básico do mínimo existencial.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O ente público invoca genericamente a escassez orçamentária (reserva do possível) para negar atendimento básico de saúde a menores desprovidos de recursos. Segundo a jurisprudência vinculante do STF:",
        opcoes: [
          "A alegação genérica é válida ante a discricionariedade absoluta do administrador orçamentário.",
          "A alegação não subsiste frente à proteção prioritária do mínimo existencial e à ineficácia de justificativas meramente genéricas.",
          "O Judiciário jamais pode ordenar gastos orçamentários por ferir a separação pura dos poderes.",
          "A proteção social fica condicionada ao superávit financeiro primário do exercício anterior.",
          "O mandado de injunção é a única via processual cabível para determinar a realização da despesa."
        ],
        respostaCorreta: 1,
        comentario: "O STF fixou a tese de que a cláusula da reserva do possível não é oponível ao mínimo existencial e exige comprovação concreta de carência material, repelindo alegações puramente retóricas."
      }
    ]
  },
  {
    id: 9,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Organização do Estado, Federalismo e Repartição de Competências",
    leiSeca: [
      { rotulo: "CF/88, Arts. 18 a 32 (Organização Político-Administrativa)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art18" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 38 e ADPF 672 (Competência concorrente e local)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Municípios possuem competência para legislar sobre horário bancário (SV 19), mas NÃO sobre tempo de atendimento em filas nem regras de segurança patrimonial interna de agências (competência federal sobre SFN).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Lei municipal disciplina o horário de funcionamento do comércio local e o tempo de espera em filas de agências bancárias instaladas em seu território. À luz da jurisprudência do STF:",
        opcoes: [
          "A matéria bancária é inteiramente privativa da União, sendo nula a integralidade do diploma municipal.",
          "O município tem competência para fixar o horário de funcionamento do comércio (SV 38) e legislar sobre o tempo em fila de banco por se tratar de matéria de interesse local.",
          "Apenas o Estado-membro possui competência supletiva para regulamentar filas de instituições de crédito.",
          "O ato incorre em inconstitucionalidade material por violar a livre iniciativa comercial e financeira.",
          "A fixação de horários comerciais atrai prerrogativa exclusiva e privativa do Congresso Nacional."
        ],
        respostaCorreta: 1,
        comentario: "Conforme a Súmula Vinculante 38 e tese de repercussão geral, é constitucional a lei municipal que fixa o horário do comércio e tempo em fila bancária (conforto/atendimento local), diferenciando-se da fixação de horário bancário (privativo da União)."
      }
    ]
  },
  {
    id: 10,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Poder Legislativo, Processo Legislativo e Fiscalização Financeira",
    leiSeca: [
      { rotulo: "CF/88, Arts. 44 a 75", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art44" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 43 e ADI 4029 (Tribunais de Contas e limites de julgamento)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Cuidado com o julgamento de contas de Chefe do Executivo: compete exclusivamente à Câmara Municipal julgar todas as contas do Prefeito (de governo e de gestão), atuando o Tribunal de Contas mediante parecer prévio.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Em relação ao controle e julgamento de contas de prefeitos municipais, assinale a opção correta consoante a jurisprudência vinculante do STF:",
        opcoes: [
          "O Tribunal de Contas do Estado julga em definitivo as contas de gestão do prefeito na condição de ordenador de despesas.",
          "Compete exclusivamente à Câmara Municipal o julgamento de todas as contas do Chefe do Executivo municipal, emitindo o Tribunal de Contas parecer prévio opinativo.",
          "A reprovação de contas pelo Tribunal de Contas atrai automaticamente a inelegibilidade sem intervenção do Legislativo.",
          "O parecer do Tribunal de Contas só deixa de prevalecer por decisão de três quintos dos membros do Parlamento local.",
          "O controle externo das contas de gestão exclui a intervenção da Câmara Municipal por simetria federativa."
        ],
        respostaCorreta: 1,
        comentario: "O STF assentou em repercussão geral que compete unicamente à Câmara de Vereadores julgar as contas de governo e de gestão dos prefeitos, prevalecendo o parecer prévio do Tribunal de Contas apenas se rejeitado por dois terços dos vereadores."
      }
    ]
  },
  {
    id: 11,
    disciplina: "Direito Constitucional",
    prioridade: "Média",
    titulo: "Poder Executivo: Atribuições, Responsabilidades e Regime Regulamentar",
    leiSeca: [
      { rotulo: "CF/88, Arts. 76 a 91", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art76" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 2292 (Decretos autônomos e extinção de cargos vagos)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O decreto autônomo (art. 84, VI, 'a' e 'b') só pode extinguir cargos públicos se ESTIVEREM VAGOS. A extinção de cargo ocupado e a criação de órgãos ou cargos dependem de lei formal.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O Presidente da República editou decreto autônomo extinguindo determinado cargo público efetivo devidamente provido. Sob a perspectiva da disciplina constitucional:",
        opcoes: [
          "O ato é válido, pois o Chefe do Executivo dispõe de competência discricionária irrestrita sobre organização administrativa.",
          "O ato é inconstitucional, pois o decreto autônomo apenas autoriza a extinção de funções ou cargos públicos quando vagos.",
          "O ato só seria válido caso precedido de referendo obrigatório do Conselho da República.",
          "A via do decreto autônomo é cabível unicamente no regime de estado de sítio.",
          "O decreto autônomo pode criar cargos públicos, mas não extingui-los sem oitiva do Judiciário."
        ],
        respostaCorreta: 1,
        comentario: "O art. 84, VI, 'b', da CF autoriza decreto para extinção de funções ou cargos públicos apenas quando vagos. Havendo provimento, impera a reserva de lei formal."
      }
    ]
  },
  {
    id: 12,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Poder Judiciário e Funções Essenciais à Justiça: Estatuto e Atribuições",
    leiSeca: [
      { rotulo: "CF/88, Arts. 92 a 135", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art92" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 3367 (Constitucionalidade e competências do Conselho Nacional de Justiça)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O Conselho Nacional de Justiça (CNJ) tem controle administrativo e financeiro sobre o Judiciário, mas carece de competência jurisdicional. Ele não pode rever mérito de sentença ou decisão de magistrado.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Em face de decisão judicial terminativa proferida por juiz de direito no exercício da atividade típica judicante, a parte maneja procedimento perante o CNJ requerendo anulação do mérito sentencial. O pleito:",
        opcoes: [
          "Deve ser conhecido, visto que o CNJ detém controle absoluto de integridade sobre todas as instâncias judiciais.",
          "Não pode ser conhecido, pois o CNJ possui competência puramente administrativa e disciplinar, sendo desprovido de atribuições de cunho jurisdicional.",
          "Depende de intervenção simultânea e vinculante do Ministério Público Federal.",
          "Submete-se ao juízo de admissibilidade da Corregedoria-Geral Eleitoral.",
          "É cabível apenas se a decisão ofender enunciado de Súmula do STF."
        ],
        respostaCorreta: 1,
        comentario: "Conforme assentado pelo STF na ADI 3367, o CNJ é órgão de natureza exclusivamente administrativa, fiscalizatória e financeira, inexistindo qualquer competência jurisdicional recursal sobre atos judiciais típicos."
      }
    ]
  },
  {
    id: 13,
    disciplina: "Direito Constitucional",
    prioridade: "Média",
    titulo: "Defesa do Estado, Instituições Democráticas e Segurança Pública",
    leiSeca: [
      { rotulo: "CF/88, Arts. 136 a 144", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art136" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 6457 e ADPF 635 (Limites das Forças Armadas e operações policiais)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "As Forças Armadas não exercem papel de 'poder moderador' nem podem intervir contra poderes constituídos. O art. 142 não outorga tutela militar sobre as decisões judiciais ou legislativas.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A respeito do papel constitucional das Forças Armadas e da segurança pública conforme o texto constitucional e a hermenêutica do STF, assinale a opção correta:",
        opcoes: [
          "O texto constitucional confere às Forças Armadas a prerrogativa de poder moderador para dirimir conflitos entre os Poderes.",
          "As Forças Armadas são instituições nacionais permanentes e regulares, sob a autoridade suprema do Presidente da República, não possuindo função de árbitro constitucional.",
          "A decretação do estado de defesa dispensa a fixação prévia de tempo de duração no decreto presidencial.",
          "Durante o estado de sítio, fica sumariamente suspensa a integridade e funcionamento do Congresso Nacional.",
          "Polícias civis subordinam-se administrativamente e operacionalmente aos juizados de garantia estaduais."
        ],
        respostaCorreta: 1,
        comentario: "O STF firmou em sede de ADI que o art. 142 da CF não autoriza intervenção militar arbitral nem confere às Forças Armadas a função de Poder Moderador entre as instituições."
      }
    ]
  },
  {
    id: 14,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Sistema Tributário Nacional, Orçamento e Finanças Públicas",
    leiSeca: [
      { rotulo: "CF/88, Arts. 145 a 169", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art145" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 50 e Súmula Vinculante 52 (Imunidades e Anterioridade)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A imunidade tributária de templos e entidades sem fins lucrativos (art. 150, VI) alcança imóveis alugados a terceiros, contanto que a renda seja vertida integralmente nas finalidades essenciais da entidade (SV 52).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Entidade de assistência social aluga imóvel próprio para atividade comercial e reverte a totalidade das rendas auferidas na manutenção de seus objetivos institucionais básicos. A incidência de IPTU:",
        opcoes: [
          "É cabível de pleno direito, ante a descaracterização da afetação material do imóvel.",
          "É vedada, incidindo a imunidade tributária conferida pelo art. 150, VI, da CF, consoante pacificado na Súmula Vinculante 52 do STF.",
          "Fica sujeita a lançamento suplementar por desvio de atividade imobiliária.",
          "Equipara-se à isenção precária revogável discricionariamente pelo Fisco municipal.",
          "Exige contrapartida de recolhimento proporcional de imposto predial territorial rústico."
        ],
        respostaCorreta: 1,
        comentario: "A Súmula Vinculante 52 do STF estabelece que a imunidade tributária subjetiva estende-se aos imóveis alugados a terceiros desde que o valor dos aluguéis seja aplicado nas atividades essenciais da entidade."
      }
    ]
  },
  {
    id: 15,
    disciplina: "Direito Constitucional",
    prioridade: "Alta",
    titulo: "Controle Concentrado e Difuso de Constitucionalidade: Processos e Decisões",
    leiSeca: [
      { rotulo: "CF/88, Arts. 102 e 103; Leis 9.868/99 e 9.882/99", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art102" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADC 1 e ADI 4029 (Efeitos ex nunc, modulação e quórum qualificado)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Para haver modulação temporal dos efeitos da decisão no controle concentrado ou no RE de repercussão geral, é indispensável o voto favorável de 2/3 dos membros do Supremo Tribunal Federal (8 ministros).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Ao modular temporalmente os efeitos da declaração de inconstitucionalidade de ato normativo federal com eficácia ex nunc por razões de segurança jurídica, o quórum qualificado exigido perante o Plenário do STF é de:",
        opcoes: [
          "Maioria simples dos presentes.",
          "Dois terços dos membros da Corte (8 ministros).",
          "Três quintos da composição total.",
          "Unanimidade dos integrantes da respectiva turma de julgamento.",
          "Maioria absoluta fixada em 6 ministros votantes."
        ],
        respostaCorreta: 1,
        comentario: "O art. 27 da Lei nº 9.868/1999 e a jurisprudência fixam que a modulação de efeitos restritiva ou prospectiva demanda o quórum de dois terços dos membros do Tribunal."
      }
    ]
  },

  // ==========================================
  // II. DIREITO ADMINISTRATIVO (Casas 16 a 36)
  // ==========================================
  {
    id: 16,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Administração Pública, Direitos Fundamentais e a Nova Hermenêutica da LINDB",
    leiSeca: [
      { rotulo: "LINDB, Arts. 20 a 30 (Lei 13.655/2018)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del4657compilado.htm#art20" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 6421 (Medida Provisória 966 e aplicação da LINDB ao erro grosseiro)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A LINDB veda decisões na esfera administrativa, controladora ou judicial baseadas em valores jurídicos abstratos sem a consideração das consequências práticas da decisão (art. 20).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Ao invalidar ato administrativo com arrimo na LINDB (introduzida pela Lei 13.655/2018), o julgador ou controlador deve obrigatoriamente:",
        opcoes: [
          "Pautar a decisão exclusivamente em conceitos jurídicos indeterminados abstratos.",
          "Indicar expressamente as consequências jurídicas e administrativas da invalidação, bem como avaliar as condições reais do gestor.",
          "Determinar a exoneração imediata de todo o corpo diretivo da agência executiva correspondente.",
          "Exigir depósito recursal caucionado para fins de concessão de medida suspensiva.",
          "Aplicar responsabilidade solidária sem apuração de dolo ou erro grosseiro."
        ],
        respostaCorreta: 1,
        comentario: "O art. 20 da LINDB veda decisões fundamentadas apenas em valores abstratos e exige a consideração das consequências práticas e das condições reais do agente público."
      }
    ]
  },
  {
    id: 17,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Funções Públicas, Atividade Administrativa e Reserva de Administração",
    leiSeca: [
      { rotulo: "CF/88, Art. 37, caput (Princípios Constitucionais)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art37" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 592581 (Reserva de administração e controle jurisdicional de políticas públicas)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O princípio da reserva de administração não é absoluto: o Judiciário pode determinar reformas em presídios e implementação de políticas essenciais quando constatada omissão ilegítima do Executivo.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O Ministério Público ajuíza ação civil pública buscando compelir o Estado a realizar obras emergenciais em estabelecimento prisional que viola direitos básicos. O ente estatal alega violação à 'reserva de administração'. À luz do STF:",
        opcoes: [
          "A alegação estatal prospera, pois a formulação e execução orçamentária constituem mérito administrativo insindicável.",
          "A intervenção judicial é legítima para assegurar a integridade física e os direitos fundamentais básicos de custodiados ante a inércia administrativa.",
          "A competência é exclusiva dos juizados especiais criminais por prevenção territorial.",
          "O magistrado fica impedido de proferir determinação de fazer com reflexo em dotações orçamentárias.",
          "A ação deve ser extinta sem resolução de mérito por carência da tutela processual originária."
        ],
        respostaCorreta: 1,
        comentario: "O STF, no RE 592581 (Repercussão Geral), fixou que o Judiciário é competente para determinar a implementação de reformas em presídios para garantir a dignidade humana, afastando o argumento genérico da reserva de administração."
      }
    ]
  },
  {
    id: 18,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Legalidade Administrativa, Competências e Consensualidade",
    leiSeca: [
      { rotulo: "Lei 9.784/99, Art. 2º e LINDB, Art. 26 (Compromisso Processual)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm#art2" }
    ],
    jurisprudencia: [
      { rotulo: "STJ - REsp 1823135 (Termo de ajustamento de conduta e discricionariedade mitigada)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "A legalidade para o particular é permissiva (art. 5º, II da CF), mas para a Administração é estrita (só age com expressa autorização em lei). Não confunda com a aplicação de acordos substitutivos (art. 26 da LINDB).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "Sobre o princípio da legalidade administrativa estrita e os instrumentos de consensualidade moderna, assinale a correta:",
        opcoes: [
          "O administrador público pode agir livremente caso inexistam normas proibitivas expressas.",
          "A legalidade administrativa vincula a atuação do agente à existência prévia de lei em sentido formal e material, permitindo-se compromissos para eliminar incertezas jurídicas (art. 26 LINDB).",
          "A celebração de termo de ajustamento de conduta dispensa expressamente a audiência pública de interessados.",
          "A discricionariedade administrativa é insuscetível de qualquer parâmetro de controle de razoabilidade ou proporcionalidade.",
          "A delegação de competência atribui renúncia definitiva ao poder fiscalizatório da autoridade delegante."
        ],
        respostaCorreta: 1,
        comentario: "A legalidade pública subordina a atuação estatal à estrita autorização legal, enquanto a consensualidade viabiliza acordos para sanear litígios ou incertezas fáticas conforme o art. 26 da LINDB."
      }
    ]
  },
  {
    id: 19,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Estrutura Organizacional: Desconcentração, Descentralização e Entidades",
    leiSeca: [
      { rotulo: "Decreto-Lei 200/67, Art. 4º e CF/88, Art. 37, XIX", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0200.htm#art4" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 4983 e Tema 130 (Regime jurídico e patrimônio das empresas públicas prestadoras)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Autarquia é criada por lei ordinária específica. Já as empresas públicas, sociedades de economia mista e fundações públicas têm a criação apenas AUTORIZADA por lei (dependendo de registro dos atos constitutivos).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "No âmbito da organização da Administração Pública indireta, consoante o art. 37, XIX, da Constituição Federal:",
        opcoes: [
          "Todas as entidades da Administração Indireta são criadas diretamente por lei complementar.",
          "Somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação.",
          "As empresas públicas têm sua personalidade jurídica constituída no momento da publicação da lei autorizativa, dispensando registro civil.",
          "A desconcentração pressupõe a transferência de serviços a pessoas jurídicas formalmente distintas.",
          "As subsidiárias de empresas estatais dispensam autorização legislativa genérica expressa na lei matriz."
        ],
        respostaCorreta: 1,
        comentario: "O art. 37, XIX, da CF estabelece que autarquias são criadas por lei específica, ao passo que a instituição de empresas públicas, sociedades de economia mista e fundações é apenas autorizada por lei."
      }
    ]
  },
  {
    id: 20,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Atos Administrativos: Elementos, Vícios, Convalidação e Extinção",
    leiSeca: [
      { rotulo: "Lei 9.784/99, Arts. 53 a 55 e Lei 4.717/65, Art. 2º", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm#art53" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula 473 (Autotutela administrativa e revogação/anulação)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Vício de competência (desde que não privativa) e vício de forma (quando não essencial) comportam convalidação. Vícios de motivo, objeto e finalidade JAMAIS são convalidáveis.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Identificado vício em ato administrativo consistente na inobservância de forma não essencial prescrita para a prática do ato, sem que haja prejuízo a terceiros ou ao interesse público, a Administração Pública:",
        opcoes: [
          "Deve obrigatoriamente revogar o ato por motivo de conveniência processual.",
          "Pode convalidar o ato, aproveitando os seus efeitos desde a origem (ex tunc).",
          "Deve declarar a nulidade absoluta imprescritível do ato administrativo praticado.",
          "Fica impedida de qualquer alteração após o decurso do prazo peremptório de 90 dias.",
          "Deve encaminhar o procedimento para ratificação definitiva pelo Ministério Público."
        ],
        respostaCorreta: 1,
        comentario: "Conforme o art. 55 da Lei nº 9.784/1999, nos casos em que não se verifique lesão ao interesse público nem prejuízo a terceiros, os atos com defeitos sanáveis (competência não exclusiva e forma não solene) podem ser convalidados."
      }
    ]
  },
  {
    id: 21,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Regulamentos Administrativos e o Limite dos Regulamentos Autônomos",
    leiSeca: [
      { rotulo: "CF/88, Art. 84, IV e VI", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art84" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 2447 (Exorbitância regulamentar e sustação parlamentar)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Se o regulamento de execução extrapola o conteúdo da lei que visa regulamentar, ocorre vício de ilegalidade (crise de legalidade), e não inconstitucionalidade direta/originária (salvo se violar reserva de lei material).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Decreto regulamentar de execução expedido pelo Chefe do Executivo inova originariamente na ordem jurídica ao estabelecer novas sanções pecuniárias não cominadas na lei matriz. O controle cabível perante o STF:",
        opcoes: [
          "É a Ação Direta de Inconstitucionalidade direta, por vulneração primária e imediata ao princípio da simetria das penas.",
          "A jurisprudência do STF afasta em regra o cabimento de ADI por configurar ilegalidade reflexa ou indireta (crise de legalidade em face da lei que pretendia regulamentar).",
          "Limita-se à avocação compulsória dos autos pelo Senado Federal.",
          "Consiste exclusivamente em mandado de injunção impetrado por partido político.",
          "Pode ser instaurado unicamente pelas mesas diretoras das assembleias estaduais."
        ],
        respostaCorreta: 1,
        comentario: "O STF não admite ADI contra decreto meramente regulamentar que exorbita a lei regulamentada, por constituir ofensa reflexa/indireta à Constituição (salvo se versar sobre regulamento autônomo sem qualquer base legal)."
      }
    ]
  },
  {
    id: 22,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Processo Administrativo: Princípios e Lei Geral de Processo Administrativo",
    leiSeca: [
      { rotulo: "Lei 9.784/99 (Processo Administrativo Federal)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 5 (Advogado no PAD)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Lembre-se da Súmula Vinculante 5 do STF: a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição. Contudo, deve ser assegurada a autodefesa ampla.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "Servidor público é submetido a Processo Administrativo Disciplinar (PAD) sem assistência de advogado legalmente constituído ou defensor dativo. À luz da Súmula Vinculante 5 do STF:",
        opcoes: [
          "O processo é nulo de pleno direito por desrespeito à ampla defesa.",
          "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.",
          "O procedimento deve ser convertido de ofício em inquérito policial civil.",
          "A nulidade restringe-se aos atos decisórios tomados na fase de interrogatório.",
          "Gera obrigação imediata de reintegração provisória ao cargo público."
        ],
        respostaCorreta: 1,
        comentario: "O enunciado da Súmula Vinculante 5 do STF declara expressamente que a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição Federal."
      }
    ]
  },
  {
    id: 23,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Licitações Públicas: Nova Lei de Licitações e Contratos e Contratação Direta",
    leiSeca: [
      { rotulo: "Lei 14.133/2021, Arts. 28 a 39 e Arts. 72 a 75", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 6890 e TCU - Acórdão 2622/2021 (Inexigibilidade e notória especialização)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A Lei 14.133/21 aboliu a tomada de preços e o convite, além de incluir a modalidade Diálogo Competitivo. Inexigibilidade de licitação pressupõe inviabilidade de competição (rol exemplificativo); dispensa traz rol taxativo.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Na contratação direta de serviços técnicos profissionais especializados com profissional de notória especialização para serviço de natureza predominantemente intelectual, nos termos da Lei nº 14.133/2021:",
        opcoes: [
          "Configura hipótese de dispensa de licitação em rol estritamente taxativo.",
          "Trata-se de hipótese expressa de inexigibilidade de licitação, configurada a inviabilidade fática ou jurídica de competição.",
          "Exige obrigatoriamente a adoção da modalidade de leilão reverso eletrônico.",
          "É vedada a subcontratação acessória sob qualquer modalidade ou pactuação.",
          "Requer autorização prévia por decreto do Chefe do Poder Executivo estadual."
        ],
        respostaCorreta: 1,
        comentario: "A Lei 14.133/2021 (art. 74, III) prevê expressamente como hipótese de inexigibilidade de licitação a contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais de notória especialização."
      }
    ]
  },
  {
    id: 24,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Contratos Administrativos: Regime Jurídico, Alteração, Riscos e Extinção",
    leiSeca: [
      { rotulo: "Lei 14.133/2021, Arts. 89 a 150", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm#art89" }
    ],
    jurisprudencia: [
      { rotulo: "STJ - REsp 1.834.184 (Fato do príncipe, matriz de risco e equilíbrio econômico)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "A alteração unilateral qualitativa ou quantitativa do contrato administrativo é cláusula exorbitante conferida à Administração (limitada a 25% para acréscimos/supressões em geral e 50% para acréscimos em reformas de edifícios).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A Administração Pública impõe alteração unilateral de contrato administrativo de obras e serviços comuns que resulta no acréscimo de 20% do valor inicial atualizado do ajuste. Diante dessa determinação:",
        opcoes: [
          "O contratado pode rescindir o ajuste sumariamente sem justa causa.",
          "O contratado é obrigado a aceitar a modificação, pois se encontra dentro do limite legal de até 25% fixado pela legislação para acréscimos unilaterais.",
          "A modificação é nula de pleno direito, pois qualquer aditamento exige anuência prévia e bilateral das partes.",
          "O reajuste veda a recomposição do equilíbrio econômico-financeiro originário.",
          "O limite de alteração unilateral para obras civis é de no máximo 5% ao ano."
        ],
        respostaCorreta: 1,
        comentario: "Pela Lei nº 14.133/2021 (art. 125), o contratado é obrigado a aceitar, nas mesmas condições contratuais, os acréscimos ou supressões unilaterais de até 25% do valor inicial atualizado do contrato em compras, obras e serviços."
      }
    ]
  },
  {
    id: 25,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Poder de Polícia: Características, Limites, Delegação e Sanções",
    leiSeca: [
      { rotulo: "CTN, Art. 78 (Conceito Legal de Poder de Polícia)", url: "https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm#art78" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Tema 532 (Delegação de poder de polícia a pessoas jurídicas de direito privado)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O STF fixou a tese de que É CONSTITUCIONAL a delegação do poder de polícia (incluindo a aplicação de multas) a empresas públicas e sociedades de economia mista prestadoras de serviços públicos em regime não concorrencial.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Sociedade de economia mista municipal prestadora de serviço público essencial de trânsito em regime de exclusividade recebe delegação legislativa para aplicar multas de trânsito. Segundo o STF (Tema 532):",
        opcoes: [
          "A delegação é inconstitucional, pois o poder sancionatório exige exercício exclusivo por órgãos da Administração Direta.",
          "É constitucional a delegação do poder de polícia, inclusive a aplicação de sanções (multas), a pessoas jurídicas de direito privado integrantes da administração indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial.",
          "A delegação é válida exclusivamente para a fase de fiscalização e consentimento de polícia, vedada a sanção.",
          "Depende de autorização expressa do Tribunal de Contas respectivo por meio de medida cautelar.",
          "Fica restrita aos casos em que o valor da autuação for partilhado com a Guarda Municipal."
        ],
        respostaCorreta: 1,
        comentario: "O STF assentou no RE 633782 (Tema 532) que é lícita a delegação das fases do poder de polícia, inclusive a fase sancionatória (aplicação de multas), a entidades da administração indireta de direito privado prestadoras exclusivas de serviço estatal em regime não concorrencial."
      }
    ]
  },
  {
    id: 26,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Intervenção do Estado na Propriedade Privada e Desapropriação",
    leiSeca: [
      { rotulo: "Decreto-Lei 3.365/1941 (Lei Geral de Desapropriações)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3365.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STJ - Tema 1019 e Súmula 119 (Desapropriação indireta e prescrição)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "Desapropriação indireta decorre de apossamento fático administrativo sem o devido processo prévio. Aplica-se o prazo prescricional decenal para a pretensão indenizatória decorrente de desapropriação indireta se houve obras/serviço relevante (art. 1.238, parágrafo único, do CC).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O Poder Público municipal apossou-se fisicamente de imóvel privado, incorporando-o ao domínio público sem instauração de processo expropriatório formal ou pagamento de indenização. Em face dessa desapropriação indireta:",
        opcoes: [
          "O proprietário pode manejar ação reivindicatória direta para reaver o bem físico sob posse pública definitiva.",
          "A ação de desapropriação indireta possui natureza real e visa à indenização pelas perdas e danos decorrentes do desapossamento, não cabendo retrocessão sobre a coisa afetada.",
          "A pretensão indenizatória prescreve no prazo improrrogável de um ano da ocupação provisória.",
          "O particular perde o direito de exigir juros compensatórios em qualquer circunstância.",
          "Exige prévio ajuizamento de interpelação judicial perante a Fazenda Nacional."
        ],
        respostaCorreta: 1,
        comentario: "Uma vez afetado faticamente o bem à finalidade pública (desapropriação indireta consumada), o bem não pode ser objeto de reivindicação (art. 35 do DL 3.365/41), restando ao particular postular a indenização por perdas e danos em ação de natureza real."
      }
    ]
  },
  {
    id: 27,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Serviços Públicos: Conceito, Princípios e Defesa do Usuário",
    leiSeca: [
      { rotulo: "Lei 13.460/2017 (Código de Defesa do Usuário de Serviços Públicos)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STJ - Tema 699 (Corte de energia elétrica por inadimplemento em prédios públicos essenciais)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "É lícito o corte do fornecimento de serviço essencial por inadimplemento do consumidor mediante prévio aviso. Contudo, é ILEGÍTIMO o corte em serviços públicos essenciais de saúde e segurança prestados pelo poder público inadimplente.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Concessionária de serviço público de energia elétrica suspende o fornecimento a hospital público municipal em decorrência de dívida histórica de faturas pretéritas, após aviso prévio. A legalidade do corte:",
        opcoes: [
          "É plenamente legítima em atenção ao princípio da continuidade tarifária irrestrita.",
          "É ilegal, consoante a jurisprudência consolidada do STJ, pois unidades públicas essenciais que prestam serviços de saúde e segurança não podem sofrer interrupção compulsória.",
          "Admite-se apenas se houver recusa em firmar termo de conciliação bancária compulsória.",
          "Exige anuência prévia do Tribunal de Contas respectivo em hasta ordinária.",
          "É autorizada desde que a dívida decorra de consumo ordinário do mês corrente."
        ],
        respostaCorreta: 1,
        comentario: "O STJ consolidou que é ilegítimo o corte de fornecimento de energia elétrica de pessoas jurídicas de direito público quando atingir serviços essenciais para a coletividade (hospitais, pronto-socorros e delegacias)."
      }
    ]
  },
  {
    id: 28,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Delegação de Serviços Públicos: Concessões, Permissões e Parcerias Público-Privadas",
    leiSeca: [
      { rotulo: "Lei 8.987/95 e Lei 11.079/2004 (PPPs)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 4451 e STJ - REsp 1.311.110 (Caducidade e encampação)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Encampação é a retomada do serviço por motivo de interesse público durante a vigência do contrato, mediante lei autorizativa específica e prévia indenização. Caducidade decorre de inadimplemento da concessionária.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A rescisão antecipada da concessão de serviço público promovida pelo poder concedente, fundada em razões de interesse público durante o prazo contratual, configura a:",
        opcoes: [
          "Caducidade, operada sem indenização prévia em virtude de culpa in eligendo.",
          "Encampação, a qual depende de lei autorizativa específica e indenização prévia das parcelas dos investimentos vinculados a bens reversíveis não amortizados.",
          "Anulação com efeitos ex tunc decorrente de vício de publicidade concorrencial.",
          "Rescisão amigável tácita decorrente de mora recíproca contratual.",
          "Intervenção executiva temporária com substituição definitiva de gestores."
        ],
        respostaCorreta: 1,
        comentario: "O art. 37 da Lei nº 8.987/1995 define encampação como a retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização."
      }
    ]
  },
  {
    id: 29,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Exploração de Atividade Econômica pelo Estado e Estatuto das Estatais",
    leiSeca: [
      { rotulo: "Lei 13.303/2016 (Estatuto Jurídico da Empresa Pública e Sociedade de Economia Mista)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 7331 (Normas sobre indicações de administradores e conselheiros de estatais)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A exploração direta de atividade econômica pelo Estado só é permitida quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo (art. 173 da CF).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Ressalvados os casos previstos na Constituição, a exploração direta de atividade econômica pelo Estado somente será permitida quando:",
        opcoes: [
          "Houver interesse da Fazenda Pública em aumentar o superávit orçamentário anual.",
          "For necessária aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei.",
          "A iniciativa privada declarar expressamente desinteresse de atuação mercadológica.",
          "For instituída mediante decreto executivo sem necessidade de aprovação legislativa.",
          "O capital social for exclusivamente proveniente de receitas do fundo partidário."
        ],
        respostaCorreta: 1,
        comentario: "A disciplina constitucional do art. 173 da CF/88 impõe que a atuação direta do Estado na ordem econômica só tem lugar frente a imperativos da segurança nacional ou a relevante interesse coletivo, fixados em lei."
      }
    ]
  },
  {
    id: 30,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Regulação Econômico-Social: Agências Reguladoras, LGPD e Liberdade Econômica",
    leiSeca: [
      { rotulo: "Lei 13.848/2019 (Agências Federais) e Lei 13.874/2019 (Liberdade Econômica)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13848.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 4874 (Poder normativo técnico da ANVISA e agências reguladoras)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Agências reguladoras possuem poder normativo técnico subordinado à lei. Não podem criar tipos penais, fixar sanções não previstas em lei matriz nem invadir competência primária do legislador.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Acerca da competência normativa das agências reguladoras, assinale a opção harmônica com a jurisprudência do Supremo Tribunal Federal:",
        opcoes: [
          "O poder normativo técnico das agências reguladoras é primário e inova originariamente na ordem jurídica sem submissão aos parâmetros da lei instituidora.",
          "A atuação normativa técnica das agências enquadra-se no conceito de deslegalização ou degradação do grau normativo, cabendo à agência preencher padrões técnicos balizados pela legislação setorial.",
          "O Judiciário não pode invalidar normas de agências reguladoras em nenhuma circunstância.",
          "A edição de atos normativos dispensa a elaboração prévia de Análise de Impacto Regulatório (AIR).",
          "As decisões das diretorias colegiadas de agências federais estão sujeitas a recurso hierárquico impróprio ordinário aos ministros de Estado."
        ],
        respostaCorreta: 1,
        comentario: "O STF reconhece que o poder normativo das agências reguladoras é de natureza técnica e secundária, autorizado pela lei-quadro para densificar conceitos e fixar padrões operacionais sem quebrar a reserva legal."
      }
    ]
  },
  {
    id: 31,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Agentes Públicos: Regime Constitucional, Provimento, Concurso e Responsabilidade",
    leiSeca: [
      { rotulo: "CF/88, Arts. 37 a 41 e Lei 8.112/90", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art37" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 13 (Vedação ao nepotismo) e Tema 1014 (Direito à nomeação)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Candidato aprovado dentro das vagas do edital possui direito público subjetivo à nomeação durante a validade do certame, salvo circunstâncias excepcionais e supervenientes imprevisíveis e graves.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Candidato obtém aprovação em concurso público dentro do número de vagas estipulado originalmente no edital. Durante o prazo de validade do certame, a Administração opta por não nomeá-lo por pura conveniência discricionária. À luz do STF:",
        opcoes: [
          "O candidato possui mera expectativa de direito insuscetível de tutela judicial.",
          "O candidato classificado dentro das vagas possui direito público subjetivo à nomeação, ressalvadas hipóteses excepcionalíssimas caracterizadas pela necessidade, imprevisibilidade, gravidade e superveniência de fatos extraordinários devidamente motivados.",
          "A Administração pode substituir as vagas do edital por contratação temporária terceirizada sem qualquer limitação judicial.",
          "A perda do prazo de validade fulmina em definitivo o direito subjetivo sem possibilidade de exame pelo Judiciário.",
          "O candidato deve ingressar exclusivamente com ação popular eleitoral perante o Tribunal de Justiça."
        ],
        respostaCorreta: 1,
        comentario: "O STF fixou a tese de Repercussão Geral (RE 598099) de que o candidato aprovado dentro do número de vagas previsto no edital do concurso possui direito subjetivo à nomeação, vinculando a Administração Pública."
      }
    ]
  },
  {
    id: 32,
    disciplina: "Direito Administrativo",
    prioridade: "Média",
    titulo: "Bens Públicos: Regime Jurídico, Afetação, Terras Devolutas e Alienação",
    leiSeca: [
      { rotulo: "Código Civil, Arts. 98 a 103", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm#art98" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula 340 e STJ - Súmula 619 (Ocupação de bem público como mera detenção)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "Bens públicos não estão sujeitos a usucapião (Súmula 340 do STF e art. 102 do CC). A ocupação de bem público por particular não gera posse, mas mera detenção de natureza precária (Súmula 619 do STJ).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "A ocupação irregular e indevida de área integrante do patrimônio público por particular gera para o ocupante:",
        opcoes: [
          "Direito à usucapião extraordinária após dez anos ininterruptos.",
          "Posse de boa-fé apta a garantir retenção por benfeitorias necessárias e úteis.",
          "Mera detenção de natureza precária, insuscetível de gerar posse e oponibilidade possessória ou indenizatória em face do Estado.",
          "Servidão perpétua administrativa oponível a terceiros adquirentes.",
          "Preempção obrigatória na hipótese de leilão judicial concorrencial."
        ],
        respostaCorreta: 2,
        comentario: "A Súmula 619 do STJ consagra que a ocupação indevida de bem público configura mera detenção, de natureza precária, insuscetível de retenção ou indenização por benfeitorias."
      }
    ]
  },
  {
    id: 33,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Controle da Atividade Administrativa: Tribunal de Contas e Limites do Controle Judicial",
    leiSeca: [
      { rotulo: "CF/88, Arts. 70 a 74", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art70" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 3 (Contraditório no Tribunal de Contas e prazo de 5 anos)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O Tribunal de Contas tem 5 anos para apreciar a legalidade do ato concessivo inicial de aposentadoria/pensão sem necessidade de contraditório prévio; ultrapassado esse prazo, o contraditório torna-se obrigatório.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Na apreciação da legalidade do ato de concessão inicial de aposentadoria, o Tribunal de Contas:",
        opcoes: [
          "Deve sempre abrir contraditório prévio desde o primeiro dia de tramitação dos autos.",
          "Está dispensado de assegurar o contraditório e a ampla defesa se o ato for apreciado no prazo de até cinco anos da sua chegada à Corte de Contas, tornando-se o contraditório exigível após o decurso desse período (SV 3).",
          "Não pode cancelar aposentadorias que envolvam cargos comissionados com mais de um ano.",
          "Exige sempre homologação terminativa do Poder Judiciário para que o cancelamento surta eficácia.",
          "Atua como órgão de jurisdição contenciosa definitiva e irrecorrível ao STF."
        ],
        respostaCorreta: 1,
        comentario: "Conforme a Súmula Vinculante 3 e o Tema 445 do STF, o Tribunal de Contas tem até cinco anos para apreciar a concessão inicial de aposentadoria sem contraditório prévio; findo esse prazo sem julgamento, opera-se o registro tácito ou necessidade de contraditório."
      }
    ]
  },
  {
    id: 34,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Ações Constitucionais e Nova Lei de Improbidade Administrativa (Lei 14.230/2021)",
    leiSeca: [
      { rotulo: "Lei 8.429/92 com as alterações da Lei 14.230/2021", url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Tema 1199 (Retroatividade e dolo na Lei de Improbidade)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A Nova LIA extinguiu a improbidade administrativa na modalidade CULPOSA (mesmo culposa grave). Exige-se SEMPRE o DOLO ESPECÍFICO. A retroatividade da lei mais benéfica aplica-se a casos sem trânsito em julgado.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "No tocante ao elemento subjetivo exigido para a caracterização dos atos de improbidade administrativa previstos na Lei nº 8.429/1992 após as alterações introduzidas pela Lei nº 14.230/2021 e ao Tema 1199 do STF:",
        opcoes: [
          "Subsiste a responsabilização por improbidade decorrente de culpa grave ou negligência inescusável do ordenador.",
          "Exige-se a demonstração de dolo específico para a configuração de qualquer ato de improbidade administrativa, tendo sido revogada a modalidade culposa, aplicando-se a nova norma aos processos em curso sem trânsito em julgado.",
          "O mero erro de interpretação da lei é expressamente tipificado como ato atentatório aos princípios administrativos.",
          "A ação de improbidade pode ser ajuizada privativamente por qualquer cidadão eleitor em pleno gozo dos direitos políticos.",
          "A indisponibilidade de bens prescinde de qualquer demonstração de perigo de dano ou dilapidação iminente."
        ],
        respostaCorreta: 1,
        comentario: "O STF fixou no Tema 1199 que a Lei 14.230/2021 revogou os atos culposos de improbidade, exigindo dolo estrito, aplicando-se a novel disciplina aos feitos sem trânsito em julgado e aos prazos prescricionais segundo as diretrizes fixadas."
      }
    ]
  },
  {
    id: 35,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Responsabilidade Civil do Estado: Regimes, Dano Moral e Erro Judiciário",
    leiSeca: [
      { rotulo: "CF/88, Art. 37, § 6º", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art37p6" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 1027633 (Tema 940 - Dupla garantia e ação direta contra servidor) e Tema 592 (Fuga de preso)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Tema 940 do STF (Tese da Dupla Garantia): A vítima de dano estatal DEVE ajuizar a ação indenizatória contra o ente público ou a pessoa jurídica de direito privado prestadora de serviço público, sendo vedado incluir o agente causador diretamente no polo passivo.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Cidadão sofre lesões corporais em decorrência de conduta culposa praticada por policial militar em serviço. Pretendendo indenização, ajuíza a demanda unicamente em desfavor da pessoa física do servidor. Consoante o Tema 940 do STF:",
        opcoes: [
          "A propositura da ação é perfeitamente legítima em face do litisconsórcio passivo alternativo garantido pelo Código Civil.",
          "O agente público é parte ilegítima para figurar no polo passivo da demanda originária, devendo a ação ser ajuizada contra o Estado, que poderá, em regresso, acionar o servidor em caso de dolo ou culpa.",
          "A responsabilidade objetiva recai de modo solidário e direto sobre a autoridade policial física.",
          "O Estado só pode ser acionado subsidiariamente após comprovada a insolvência material do militar envolvido.",
          "A reparação civil por dano corporal praticado por militar submete-se exclusivamente à Justiça Militar Estadual."
        ],
        respostaCorreta: 1,
        comentario: "O STF, no Tema 940 (Repercussão Geral), consolidou o princípio da dupla garantia: a ação indenizatória deve ser proposta diretamente em face da pessoa jurídica de direito público ou prestadora de serviço público, descabendo litisconsórcio passivo ou ação direta contra o agente estatal."
      }
    ]
  },
  {
    id: 36,
    disciplina: "Direito Administrativo",
    prioridade: "Alta",
    titulo: "Decadência e Prescrição nas Relações Administrativas e Controle de Contas",
    leiSeca: [
      { rotulo: "Lei 9.784/99, Art. 54 e Decreto 20.910/32", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm#art54" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Tema 666 e Tema 899 (Prescrição da pretensão de ressarcimento ao erário por ilícito civil)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Cuidado: É prescritível a pretensão de ressarcimento ao erário fundada em decisão de Tribunal de Contas (Tema 899) e em ilícito civil ordinário (Tema 666). Só é imprescritível o ressarcimento decorrente de improbidade administrativa dolosa (Tema 897).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Sobre a prescrição da pretensão de ressarcimento ao erário em face de decisões do Tribunal de Contas e em matéria de ilícitos administrativos, consoante o STF:",
        opcoes: [
          "Todas as ações de ressarcimento promovidas pela Fazenda Pública são perpétuas e imprescritíveis segundo o art. 37, § 5º, da CF.",
          "É prescritível a pretensão de ressarcimento ao erário fundada em decisão de Tribunal de Contas (Tema 899), aplicando-se a imprescritibilidade somente às condenações decorrentes de atos dolosos de improbidade administrativa.",
          "A Administração tem prazo decadencial improrrogável de dez anos para anular atos favoráveis praticados com má-fé do administrado.",
          "O prazo prescricional para a Fazenda executar seus créditos não tributários é de vinte anos conforme o Código Civil.",
          "A instauração de tomada de contas especial suspende a prescrição intercorrente de maneira indeterminada."
        ],
        respostaCorreta: 1,
        comentario: "O STF firmou em sede de Repercussão Geral (Temas 666, 897 e 899) que apenas são imprescritíveis as pretensões de ressarcimento decorrentes de atos dolosos de improbidade administrativa tipificados na Lei 8.429/92. O ressarcimento decorrente de decisão de Tribunal de Contas prescreve em 5 anos."
      }
    ]
  },

  // =========================================================================
  // III. NOÇÕES GERAIS DE DIREITO E FORMAÇÃO HUMANÍSTICA (Casas 37 a 45)
  // =========================================================================
  {
    id: 37,
    disciplina: "Formação Humanística",
    prioridade: "Média",
    titulo: "Sociologia do Direito e da Administração Judiciária",
    leiSeca: [
      { rotulo: "Resolução CNJ 75/2009 (Programa de Formação Humanística)", url: "https://atos.cnj.jus.br/atos/detalhar/68" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADPF 347 (Estado de Coisas Inconstitucional e sociologia do sistema carcerário)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A sociologia jurídica destaca o Direito como fato social e instrumento de controle social, analisando a defasagem entre a norma positivada (law in books) e a sua aplicação prática na sociedade (law in action).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Na perspectiva da sociologia da administração judiciária e das teorias contemporâneas do controle social, a distância constatada entre o conteúdo formal da lei e o seu efetivo cumprimento prático pelo sistema de justiça expressa a clássica dicotomia entre:",
        opcoes: [
          "Direito natural e justiça distributiva utilitarista.",
          "Law in books (o direito nos livros) e law in action (o direito em ação).",
          "Pragmatismo normativo e dogma do formalismo puro kelseniano.",
          "Decisão judicial vinculante e juízo arbitral voluntário.",
          "Controle difuso concreto e abstração dogmática primária."
        ],
        respostaCorreta: 1,
        comentario: "A clássica distinção cunhada pelo sociólogo e jurista Roscoe Pound contrapõe o direito em tese nos diplomas legislativos (law in books) e o direito efetivamente operado no contexto social e judicial (law in action)."
      }
    ]
  },
  {
    id: 38,
    disciplina: "Formação Humanística",
    prioridade: "Média",
    titulo: "Psicologia Judiciária: Vieses, Gestão de Conflitos e Comunicação",
    leiSeca: [
      { rotulo: "Resolução CNJ 125/2010 (Política Nacional de Resolução de Conflitos)", url: "https://atos.cnj.jus.br/atos/detalhar/156" }
    ],
    jurisprudencia: [
      { rotulo: "STJ - RHC 158.580 (Reconhecimento fotográfico, psicologia do testemunho e falsas memórias)", url: "https://www.stj.jus.br/" }
    ],
    pegadinhaFGV: "No campo da psicologia do testemunho, as 'falsas memórias' diferem da mentira deliberada. Elas consistem em recordações distorcidas criadas inconscientemente por sugestão ou contaminação externa.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A psicologia judiciária aplicada à instrução processual penal adverte que a reconstrução mnêmica de fatos por vítimas e testemunhas está sujeita à ocorrência de 'falsas memórias', que se caracterizam por:",
        opcoes: [
          "Falso testemunho doloso praticado com o propósito inequívoco de fraudar a verdade material.",
          "Lembranças sinceras de eventos que não ocorreram ou ocorreram de modo diverso, originadas sem má-fé a partir de processos de sugestionabilidade ou contaminação pós-evento.",
          "Vício formal de consentimento que atrai nulidade processual absoluta da audiência.",
          "Incapacidade civil absoluta de prestar depoimento perante o juízo singular.",
          "Perda orgânica de consciência diagnosticada por laudo pericial compulsório."
        ],
        respostaCorreta: 1,
        comentario: "Falsas memórias são recordações involuntárias, criadas sem o intuito de mentir, decorrentes de mecanismos de assimilação e distorções inconscientes provocadas por indução ou decurso do tempo."
      }
    ]
  },
  {
    id: 39,
    disciplina: "Formação Humanística",
    prioridade: "Alta",
    titulo: "Ética e Estatuto da Magistratura: Princípios de Bangalore e Código de Ética",
    leiSeca: [
      { rotulo: "Código de Ética da Magistratura Nacional (CNJ) e Princípios de Bangalore", url: "https://www.cnj.jus.br/gestao-estrategica/codigo-de-etica-da-magistratura/" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 4220 e STJ - Corte Especial (Independência e imparcialidade judicial)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O juiz deve manter postura recatada nas redes sociais, sendo-lhe expressamente vedado manifestar opinião sobre processo pendente de julgamento, seu ou de outrem (Resolução CNJ 305/2019 e Código de Ética).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "Conforme o Código de Ética da Magistratura Nacional e os Princípios de Bangalore de Conduta Judicial, é vedado ao magistrado:",
        opcoes: [
          "Participar de entidades acadêmicas e ministrar aulas em universidades.",
          "Manifestar, por qualquer meio de comunicação, opinião sobre processo pendente de julgamento, seu ou de outrem, ou depreciar decisões judiciais.",
          "Exercer o direito de voto em eleições majoritárias e proporcionais.",
          "Utilizar sistemas eletrônicos oficiais de automação de despachos de mero expediente.",
          "Determinar diligências saneadoras na fase pré-instrutória de ações coletivas."
        ],
        respostaCorreta: 1,
        comentario: "O art. 36, III, da LOMAN e o art. 12 do Código de Ética da Magistratura proíbem expressamente o juiz de manifestar opinião sobre processo sob julgamento, resguardando a imparcialidade objetiva."
      }
    ]
  },
  {
    id: 40,
    disciplina: "Formação Humanística",
    prioridade: "Média",
    titulo: "Filosofia do Direito: Justiça, Moral e a Hermenêutica da Lógica do Razoável",
    leiSeca: [
      { rotulo: "LINDB, Art. 5º (Fins Sociais e Exigências do Bem Comum)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del4657compilado.htm#art5" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 4277 (Hermenêutica e superação do positivismo estrito nas uniões homoafetivas)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A 'lógica do razoável' (desenvolvida por Luis Recaséns Siches) preconiza a superação do silogismo dedutivo rígido em favor de uma razão axiológica voltada às circunstâncias humanas e à finalidade justa do preceito.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A teoria da 'lógica do razoável', formulada na filosofia do direito por Luis Recaséns Siches para a interpretação jurídica, propõe que:",
        opcoes: [
          "A decisão jurídica deve decorrer da subsunção formal mecânica da premissa menor à premissa maior em pura álgebra lógica.",
          "A aplicação do Direito exige um raciocínio material fundado em valores humanos, fins práticos e circunstâncias do caso concreto, superando a mecânica do silogismo dedutivo puro.",
          "O texto normativo deve ser afastado discricionariamente pelo juiz por critério de simpatia subjetiva.",
          "A validade da norma depende da sua conformidade exclusiva com a doutrina pura de Thomas Hobbes.",
          "Apenas leis editadas por plebiscito direto comportam exame pelo Poder Judiciário."
        ],
        respostaCorreta: 1,
        comentario: "A lógica do razoável substitui a lógica formal tradicional por uma axiologia voltada à adequação entre as circunstâncias reais da vida social e a solução justa imposta pelos fins do Direito."
      }
    ]
  },
  {
    id: 41,
    disciplina: "Formação Humanística",
    prioridade: "Alta",
    titulo: "Teoria Geral do Direito, Precedentes e Julgamento com Perspectiva de Gênero",
    leiSeca: [
      { rotulo: "Protocolo para Julgamento com Perspectiva de Gênero (Resolução CNJ 492/2023)", url: "https://atos.cnj.jus.br/atos/detalhar/4976" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADPF 779 (Inconstitucionalidade da legítima defesa da honra no Tribunal do Júri)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O Protocolo para Julgamento com Perspectiva de Gênero do CNJ tornou-se OBRIGATÓRIO (Resolução CNJ 492/23) para todos os ramos da Justiça e níveis de jurisdição.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Nos termos da Resolução nº 492/2023 do Conselho Nacional de Justiça, o Protocolo para Julgamento com Perspectiva de Gênero:",
        opcoes: [
          "Possui natureza de recomendação puramente facultativa, aplicável apenas às varas de violência doméstica.",
          "É de adoção obrigatória por magistradas e magistrados de todo o Poder Judiciário nacional, devendo orientar a condução instrutória e a fundamentação decisória.",
          "Inviabiliza a ampla defesa do réu em feitos de natureza cível de família.",
          "Aplica-se unicamente nas sessões plenárias do Superior Tribunal de Justiça.",
          "Impede a concessão de fiança legal em qualquer modalidade de tutela cautelar."
        ],
        respostaCorreta: 1,
        comentario: "Por meio da Resolução CNJ nº 492/2023, o CNJ estabeleceu a obrigatoriedade das diretrizes do Protocolo para Julgamento com Perspectiva de Gênero para todo o Poder Judiciário brasileiro."
      }
    ]
  },
  {
    id: 42,
    disciplina: "Formação Humanística",
    prioridade: "Alta",
    titulo: "Controle de Convencionalidade, Tratados e Agenda 2030 no Judiciário",
    leiSeca: [
      { rotulo: "Pacto de San José da Costa Rica e Agenda 2030 da ONU", url: "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 466343 (Status supralegal dos tratados de direitos humanos) e Súmula Vinculante 25", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Tratados de direitos humanos aprovados pelo rito ordinário têm status SUPRALEGAL (ficam abaixo da CF, mas acima das leis ordinárias). Se aprovados pelo rito do art. 5º, § 3º, equivalem a Emendas Constitucionais.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Tratado internacional de proteção de direitos humanos aprovado pelo Congresso Nacional sem observância do rito especial previsto no art. 5º, § 3º, da Constituição ingressa na ordem jurídica brasileira com hierarquia:",
        opcoes: [
          "Infraconstitucional idêntica à de medida provisória ordinária revogável por lei superveniente.",
          "Supralegal, situando-se abaixo do texto constitucional e acima de toda a legislação ordinária infraconstitucional (paralisando a eficácia da lei com ele conflitante).",
          "Constitucional idêntica a uma emenda constitucional originária.",
          "Meramente programática sem qualquer aptidão para viabilizar controle difuso pelo juiz singular.",
          "De ato administrativo normativo do Ministério das Relações Exteriores."
        ],
        respostaCorreta: 1,
        comentario: "O STF fixou no julgamento do RE 466343 que os tratados de direitos humanos ratificados pelo rito comum possuem status supralegal, exercendo efeito paralisante sobre normas legais infraconstitucionais contrárias."
      }
    ]
  },
  {
    id: 43,
    disciplina: "Formação Humanística",
    prioridade: "Alta",
    titulo: "Direito Digital: Inteligência Artificial, Provas Digitais e Proteção de Dados",
    leiSeca: [
      { rotulo: "Lei 13.709/2018 (LGPD) e Resoluções CNJ 332/2020 e 345/2020", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 6387 (Direito fundamental à proteção de dados e autonomia informacional)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A Resolução 332/2020 do CNJ veda expressamente o uso de sistemas de Inteligência Artificial para a tomada de decisões judiciais finais autônomas: o ato decisório deve ser SEMPRE do magistrado humano.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "No âmbito do Poder Judiciário, a utilização de soluções de Inteligência Artificial para a prestação jurisdicional, consoante a Resolução CNJ nº 332/2020:",
        opcoes: [
          "Permite a delegação de julgamento de mérito em execuções fiscais repetitivas ao sistema autônomo sem necessidade de revisão do juiz.",
          "Impõe que a ferramenta atue unicamente como suporte auxiliar, permanecendo a tomada de decisões jurisdicionais como atribuição indelegável e exclusiva do magistrado humano.",
          "Exige o sigilo absoluto do código-fonte e dos algoritmos perante partes e advogados.",
          "Impede qualquer espécie de triagem informatizada de petições iniciais nos cartórios.",
          "Autoriza a dispensa do segredo de justiça em feitos digitais envolvendo crianças."
        ],
        respostaCorreta: 1,
        comentario: "A Resolução CNJ 332/2020 assegura o princípio da supervisão humana: sistemas de IA servem como suporte e auxílio analítico, nunca podendo substituir o magistrado na emissão do juízo decisório."
      }
    ]
  },
  {
    id: 44,
    disciplina: "Formação Humanística",
    prioridade: "Média",
    titulo: "Cognição Judicial, Análise Econômica do Direito e Economia Comportamental",
    leiSeca: [
      { rotulo: "LINDB, Arts. 20 e 21 (Consequencialismo Jurídico)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del4657compilado.htm#art20" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 6534 (Heurísticas, incentivos econômicos e segurança jurídica)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Heurísticas são atalhos mentais cognitivos que auxiliam a rapidez na tomada de decisões, mas provocam 'vieses cognitivos' sistemáticos (como viés de confirmação, viés de ancoragem e excesso de confiança).",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Sob a perspectiva da economia comportamental e da cognição judicial, o fenômeno pelo qual o julgador valoriza excessivamente os elementos instrutórios que corroboram sua hipótese inicial, desconsiderando contraprovas relevantes, conceitua-se como:",
        opcoes: [
          "Heurística da representatividade simétrica pura.",
          "Viés de confirmação.",
          "Efeito carona (free rider) do litígio predatório.",
          "Racionalidade econômica maximizadora perfeita de Pareto.",
          "Dilema do prisioneiro institucional."
        ],
        respostaCorreta: 1,
        comentario: "O viés de confirmação é a tendência cognitiva de buscar, interpretar e rememorar evidências que confirmem crenças ou impressões preestabelecidas, negligenciando dados contrastantes."
      }
    ]
  },
  {
    id: 45,
    disciplina: "Formação Humanística",
    prioridade: "Alta",
    titulo: "Direito da Antidiscriminação e Políticas de Ações Afirmativas",
    leiSeca: [
      { rotulo: "Lei 12.288/2010 (Estatuto da Igualdade Racial) e Resoluções CNJ", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12288.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADC 41 (Constitucionalidade das cotas raciais em concursos públicos) e ADI 5240", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O STF fixou na ADC 41 a constitucionalidade do uso subsidiário de comissões de heteroidentificação, com respeito à dignidade humana e garantia de contraditório, para evitar fraudes nas cotas raciais.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Em relação ao sistema de cotas raciais nos concursos públicos para ingresso em carreiras de Estado e aos procedimentos de verificação (ADC 41/STF):",
        opcoes: [
          "A autodeclaração do candidato é absoluta e insuscetível de qualquer controle de heteroidentificação por comissões da banca.",
          "É legítima a utilização de comissões de heteroidentificação baseadas no fenótipo do candidato para coibir fraudes à ação afirmativa, desde que respeitados a dignidade da pessoa humana e o devido processo legal.",
          "As cotas raciais são restritas a candidatos que comprovem carência socioeconômica extrema documental.",
          "O STF declarou que o sistema de cotas viola formalmente o princípio republicano da isonomia formal.",
          "A aprovação de cotistas depende de nota de corte idêntica à dos candidatos de ampla concorrência na primeira fase."
        ],
        respostaCorreta: 1,
        comentario: "Na ADC 41, o STF declarou a constitucionalidade da Lei nº 12.990/2014 e admitiu a realização de procedimentos de heteroidentificação baseados no critério fenotípico para evitar fraudes."
      }
    ]
  },

  // ==========================================
  // IV. DIREITOS HUMANOS (Casas 46 a 54)
  // ==========================================
  {
    id: 46,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Teoria Geral dos Direitos Humanos e Direitos Humanos nas Empresas",
    leiSeca: [
      { rotulo: "Declaração Universal dos Direitos Humanos (DUDH/1948)", url: "https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos" }
    ],
    jurisprudencia: [
      { rotulo: "Corte IDH - Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil (Trabalho análogo à escravidão)", url: "https://www.corteidh.or.cr/" }
    ],
    pegadinhaFGV: "Os Princípios Orientadores das Nações Unidas sobre Empresas e Direitos Humanos assentam-se em três pilares: o dever do Estado de Proteger, a responsabilidade corporativa de Respeitar e o acesso das vítimas a Remédios/Reparações.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O marco regulatório das Nações Unidas (Princípios Orientadores de Ruggie) sobre Empresas e Direitos Humanos estabelece a seguinte estrutura tripartite de governança:",
        opcoes: [
          "Imunidade corporativa, subsidiariedade judicial e flexibilização ambiental.",
          "Proteger (pelo Estado), Respeitar (pelas empresas) e Reparar/Remediar (facilitar o acesso à reparação eficaz às vítimas).",
          "Investimento privado, livre iniciativa estrita e renúncia a normas sindicais.",
          "Autorregulação absoluta, discricionariedade societária e sigilo de governança.",
          "Tributação punitiva, intervenção expropriatória e extinção automática da sociedade."
        ],
        respostaCorreta: 1,
        comentario: "A estrutura tripartite universal desenvolvida por John Ruggie e acolhida pela ONU fundamenta-se nos deveres de Proteger os direitos humanos (Estado), Respeitar os direitos humanos (Empresas) e Remediar as violações (Acesso a mecanismos reparatórios)."
      }
    ]
  },
  {
    id: 47,
    disciplina: "Direitos Humanos",
    prioridade: "Média",
    titulo: "Sistema Global de Proteção dos Direitos Humanos (Carta da ONU e Tratados)",
    leiSeca: [
      { rotulo: "Pacto Internacional sobre Direitos Civis e Políticos (Decreto 592/1992)", url: "https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0592.htm" }
    ],
    jurisprudencia: [
      { rotulo: "Comitê de Direitos Humanos da ONU - Caso Lula vs. Brasil (Comunicação 2841/2016)", url: "https://www.ohchr.org/" }
    ],
    pegadinhaFGV: "No Sistema Global da ONU, os órgãos de tratados (como o Comitê de Direitos Humanos) emitem decisões e pareceres que orientam o Estado brasileiro; não são sentenças judiciais executáveis perante a vara de execuções fiscais, mas demandam cumprimento de boa-fé em sede de convencionalidade.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "Em relação ao Sistema Global da ONU de proteção de direitos humanos e à atuação de seus Comitês convencionais (Treaty Bodies), é correto afirmar:",
        opcoes: [
          "Os comitês convencionais emitem sentenças condenatórias que detêm executoriedade judicial imediata automática no direito processual interno.",
          "Os órgãos de tratados emitem constatações (views) e recomendações que possuem relevante peso interpretativo internacional, impondo ao Estado subscritor obrigação de cumprimento de boa-fé no plano convencional.",
          "O Comitê contra a Tortura da ONU possui competência exclusiva para reformar acórdãos proferidos pelo STF.",
          "O acesso aos comitês da ONU prescinde do esgotamento de recursos internos da jurisdição nacional.",
          "O Conselho de Direitos Humanos é composto unicamente por juízes togados de carreira internacional vitalícios."
        ],
        respostaCorreta: 1,
        comentario: "Os Comitês de Direitos Humanos da ONU possuem natureza quase-jurisdicional; suas decisões não constituem sentenças judiciais domésticas tradicionais, mas detêm alta autoridade normativa e geram vinculação de boa-fé convencional ao Estado-parte."
      }
    ]
  },
  {
    id: 48,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Sistema Interamericano de Direitos Humanos: Comissão e Corte IDH",
    leiSeca: [
      { rotulo: "Convenção Americana sobre Direitos Humanos (Pacto de San José - Decreto 678/1992)", url: "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm" }
    ],
    jurisprudencia: [
      { rotulo: "Corte IDH - Caso Gomes Lund (Guerrilha do Araguaia) e Caso Herzog vs. Brasil", url: "https://www.corteidh.or.cr/" }
    ],
    pegadinhaFGV: "Indivíduos e vítimas de violações de direitos humanos NÃO têm legitimidade para submeter caso diretamente à Corte IDH. A petição individual deve ser proposta perante a COMISSÃO Interamericana (CIDH), que poderá posteriormente submetê-la à Corte.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Diante de grave violação a direitos humanos perpetrada por agentes do Estado brasileiro, a vítima pretende ingressar com demanda perante as instâncias do Sistema Interamericano. No tocante ao acesso à jurisdição da Corte Interamericana de Direitos Humanos:",
        opcoes: [
          "A vítima e seus defensores possuem capacidade postulatória autônoma direta perante a Corte IDH desde a fase inicial.",
          "Apenas os Estados-partes e a Comissão Interamericana têm o direito de submeter um caso à decisão da Corte IDH, cabendo ao indivíduo peticionar perante a Comissão Interamericana (CIDH).",
          "O recurso à Corte IDH prescinde de prévia ratificação soberana da competência contenciosa pelo Brasil.",
          "As decisões da Corte IDH possuem caráter meramente consultivo não vinculante para o Poder Judiciário nacional.",
          "A Comissão Interamericana atua como órgão subordinado ao Conselho de Segurança da ONU."
        ],
        respostaCorreta: 1,
        comentario: "O art. 61.1 do Pacto de San José da Costa Rica expressamente estipula que apenas os Estados-partes e a Comissão têm legitimidade processual ativa para submeter casos contenciosos à Corte IDH."
      }
    ]
  },
  {
    id: 49,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Controle de Convencionalidade Difuso e Concentrado no Brasil",
    leiSeca: [
      { rotulo: "Pacto de San José da Costa Rica, Art. 1.1 e 2º", url: "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - Súmula Vinculante 25 (Depositário infiel e convencionalidade) e Recomendação CNJ 123/2022", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O controle de convencionalidade DEVE ser exercido de ofício por todos os magistrados e tribunais brasileiros (Recomendação CNJ 123/2022 e jurisprudência da Corte IDH), não exigindo provocação da parte.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "A respeito da realização do controle de convencionalidade pelos juízes e tribunais brasileiros sob as orientações da Corte Interamericana e do Conselho Nacional de Justiça (Recomendação CNJ 123/2022):",
        opcoes: [
          "O controle de convencionalidade é monopólio exclusivo do Plenário do Supremo Tribunal Federal por via de ação direta.",
          "Todos os juízes e órgãos do Poder Judiciário devem exercer o controle difuso de convencionalidade ex officio, confrontando as normas infraconstitucionais com os tratados de direitos humanos vigentes.",
          "A apreciação de tratados de direitos humanos depende de cláusula expressa em tratado bilateral prévio.",
          "O controle de convencionalidade só tem cabimento quando a norma interna afrontar enunciado de súmula vinculante.",
          "O magistrado de primeiro grau que realiza controle de convencionalidade atua em desvio funcional administrativo."
        ],
        respostaCorreta: 1,
        comentario: "O controle difuso de convencionalidade é dever de todos os magistrados nacionais (ex officio ou a pedido), aferindo a compatibilidade dos atos normativos internos com a Convenção Americana e os precedentes vinculantes da Corte IDH."
      }
    ]
  },
  {
    id: 50,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Relação entre Direito Internacional dos Direitos Humanos e Direito Brasileiro",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, §§ 2º, 3º e 4º (Estatuto de Roma e Incorporação)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5p3" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 466343 e ADC 41 (Incorporação, supralegalidade e bloco de constitucionalidade)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "Os tratados de direitos humanos aprovados na forma do art. 5º, § 3º da CF (dois turnos, em cada casa do Congresso, por três quintos) equivalem a emendas constitucionais e integram o bloco de constitucionalidade.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Fácil",
        enunciado: "Nos termos do art. 5º, § 3º, da Constituição da República de 1988, os tratados e convenções internacionais sobre direitos humanos que forem aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros:",
        opcoes: [
          "Terão status de lei complementar federal infraconstitucional.",
          "Serão equivalentes às emendas constitucionais.",
          "Dependerão de homologação prévia pelo Tribunal Penal Internacional.",
          "Possuirão natureza de regulamento autônomo extraordinário.",
          "Poderão ser revogados por decisão unilateral de comissão parlamentar mista."
        ],
        respostaCorreta: 1,
        comentario: "O art. 5º, § 3º, da CF/88 outorga hierarquia equivalente às emendas constitucionais aos tratados internacionais sobre direitos humanos aprovados com quórum qualificado em dois turnos em ambas as Casas legislativas."
      }
    ]
  },
  {
    id: 51,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Direitos Humanos na Constituição Federal de 1988",
    leiSeca: [
      { rotulo: "CF/88, Art. 4º, II e Art. 5º, § 2º", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art4" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 3510 e ADPF 54 (Anencefalia e o direito à vida sob a ótica dos direitos humanos)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "A cláusula de abertura material de direitos humanos (art. 5º, § 2º da CF) consagra que os direitos expressos na Carta não excluem outros decorrentes do regime democrático e dos tratados internacionais firmados pelo país.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O princípio segundo o qual o rol de direitos e garantias fundamentais previstos expressamente no art. 5º da CF/88 não é taxativo, mas exemplificativo, expressa a denominada:",
        opcoes: [
          "Cláusula de reserva de lei absoluta estrita.",
          "Cláusula de abertura ou não taxatividade dos direitos fundamentais (art. 5º, § 2º da CF).",
          "Teoria dos limites dos limites (Schranken-Schranken) infraconstitucionais.",
          "Eficácia integradora do mandado de injunção privativo.",
          "Regra da preclusão consumativa material de garantias processuais."
        ],
        respostaCorreta: 1,
        comentario: "O art. 5º, § 2º, consagra a cláusula de abertura constitucional, pela qual os direitos explícitos não excluem outros decorrentes do regime republicano e de acordos internacionais."
      }
    ]
  },
  {
    id: 52,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Jurisprudência do STF em Matéria de Direitos Humanos",
    leiSeca: [
      { rotulo: "CF/88, Art. 5º, XLI e Lei 7.716/1989 (Crimes de Preconceito)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5xli" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADO 26 e MI 4733 (Criminalização da homotransfobia como racismo social)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O STF enquadrou as condutas homofóbicas e transfóbicas no conceito social de RACISMO tipificado na Lei nº 7.716/89 até que o Congresso legisle, configurando crimes inafiançáveis e imprescritíveis.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "No julgamento conjunto da ADO 26 e do MI 4733, o Plenário do Supremo Tribunal Federal assentou a seguinte tese jurídica quanto à discriminação contra a comunidade LGBTQIA+:",
        opcoes: [
          "As condutas configuram mera contravenção penal suscetível de transação penal perante o JECRIM.",
          "Até que sobrevenha lei emanada do Congresso Nacional, as condutas homofóbicas e transfóbicas, reais ou potenciais, enquadram-se nos crimes previstos na Lei de Racismo (Lei nº 7.716/1989), possuindo natureza inafiançável e imprescritível.",
          "A ausência de tipo penal impede qualquer punição penal sob pena de vulneração absoluta à reserva legal pura.",
          "As sanções ficam restritas à esfera civil da indenização por dano moral difuso sem tipicidade penal.",
          "O enquadramento criminal depende de que a conduta tenha sido praticada por funcionário público no exercício do cargo."
        ],
        respostaCorreta: 1,
        comentario: "O STF firmou na ADO 26 que a discriminação homotransfóbica configura modalidade de racismo em sua dimensão social e político-cultural, amoldando-se à Lei 7.716/89 até deliberação do Legislativo."
      }
    ]
  },
  {
    id: 53,
    disciplina: "Direitos Humanos",
    prioridade: "Média",
    titulo: "Princípios das Relações Internacionais e Procedimento de Incorporação de Tratados",
    leiSeca: [
      { rotulo: "CF/88, Art. 4º e Art. 84, VIII", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art4" }
    ],
    jurisprudencia: [
      { rotulo: "STF - ADI 1480 (Fases de incorporação dos tratados internacionais)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O procedimento de incorporação no Brasil é COMPLEXO: negociação e assinatura pelo Presidente -> aprovação pelo Congresso Nacional por Decreto Legislativo -> ratificação internacional -> promulgação interna por Decreto Presidencial.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Média",
        enunciado: "O rito de incorporação dos tratados internacionais comuns no ordenamento jurídico interno brasileiro, segundo o modelo sedimentado na jurisprudência do STF:",
        opcoes: [
          "Produz vigência interna imediata a partir do momento da assinatura do texto pelos plenipotenciários no exterior.",
          "É composto por procedimento complexo bifásico no plano doméstico, exigindo aprovação parlamentar via Decreto Legislativo e posterior promulgação mediante Decreto do Presidente da República para gerar eficácia interna plena.",
          "Dispensa referendo do Congresso Nacional quando versar sobre matéria de comércio exterior.",
          "Exige sempre quórum qualificado idêntico ao de revisão constitucional em sessão conjunta.",
          "Submete-se à autorização vinculante da Comissão Interamericana de Direitos Humanos."
        ],
        respostaCorreta: 1,
        comentario: "Conforme o STF (ADI 1480), a incorporação de tratado exige ato complexo que abrange a celebração pelo Executivo, a aprovação pelo Congresso Nacional (art. 49, I) e a promulgação por decreto do Presidente, conferindo executoriedade interna."
      }
    ]
  },
  {
    id: 54,
    disciplina: "Direitos Humanos",
    prioridade: "Alta",
    titulo: "Direitos dos Povos Originários: Declaração da ONU, Convenção 169 da OIT e Resoluções CNJ",
    leiSeca: [
      { rotulo: "Convenção 169 da OIT (Decreto 10.088/2019) e Resolução CNJ 287/2019 e 454/2022", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d10088.htm" }
    ],
    jurisprudencia: [
      { rotulo: "STF - RE 1017365 (Marco Temporal e direitos territoriais originários)", url: "https://portal.stf.jus.br/" }
    ],
    pegadinhaFGV: "O STF REJEITOU a tese do Marco Temporal: a proteção constitucional dos direitos originários indígenas sobre suas terras tradicionais decorre de indigenato e independe de posse física na data exata de 5 de outubro de 1988.",
    questoes: [
      {
        numero: 1,
        dificuldade: "Difícil (Magistratura)",
        enunciado: "Ao julgar a tese do 'marco temporal' referente à demarcação de terras indígenas (Tema 1031 / RE 1017365), o Plenário do Supremo Tribunal Federal fixou que:",
        opcoes: [
          "Apenas são passíveis de demarcação as terras que estavam sob ocupação física indígena comprovada em 5 de outubro de 1988.",
          "A teoria do indigenato consagra o direito congênito e originário dos povos indígenas sobre as terras tradicionalmente ocupadas, sendo inconstitucional a tese da fixação da data da promulgação da CF/88 como marco temporal rígido.",
          "A demarcação depende de concordância expressa e vinculante da assembleia legislativa estadual local.",
          "O direito de consulta prévia previsto na Convenção 169 da OIT aplica-se exclusivamente a atos administrativos municipais.",
          "O domínio imobiliário pleno das terras indígenas transfere-se em caráter privativo aos caciques locais."
        ],
        respostaCorreta: 1,
        comentario: "O STF refutou a tese do marco temporal, afirmando que a posse da terra pelas comunidades indígenas é um direito fundamental e originário (indigenato), anterior à própria formação do Estado brasileiro."
      }
    ]
  }
];
