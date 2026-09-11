// casas/casa2.js
const casa2 = {
  id: 2,
  titulo: "Direitos e Garantias Fundamentais e Remédios Constitucionais",
  disciplina: "Direito Constitucional",
  prioridade: "Máxima (Edital ENAM / FGV)",
  leiSeca: [
    { rotulo: "CF/88, Art. 5º (Inviolabilidade de Domicílio, Sigilos e Remédios)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm#art5" },
    { rotulo: "Lei nº 12.016/2009 (Mandado de Segurança)", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12016.htm" },
    { rotulo: "Lei nº 9.507/1997 (Habeas Data)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9507.htm" },
    { rotulo: "Lei nº 4.717/1965 (Ação Popular)", url: "https://www.planalto.gov.br/ccivil_03/leis/l4717.htm" }
  ],
  jurisprudencia: [
    { rotulo: "STF Tema 280 (Ingresso forçado em domicílio sem mandado)", url: "https://www.google.com/search?q=site:stf.jus.br+Tema+280+\"inviolabilidade+de+domicilio\"" },
    { rotulo: "STF Tema 977 (Perfis genéticos e autoincriminação)", url: "https://www.google.com/search?q=site:stf.jus.br+Tema+977+\"perfil+genetico\"" },
    { rotulo: "STJ Súmula 633 (Prazo decadencial no Mandado de Segurança)", url: "https://www.google.com/search?q=site:stj.jus.br+sumula+633" },
    { rotulo: "STF Súmula Vinculante 11 (Uso de algemas)", url: "https://www.google.com/search?q=site:stf.jus.br+\"Sumula+Vinculante+11\"+algemas" }
  ],
  resumo: "A FGV prioriza a colidência de direitos fundamentais resolvida por sopesamento e proporcionalidade. Os direitos fundamentais possuem eficácia horizontal (aplicável a entidades privadas sem exigência de prévio contraditório formal estrito, mas com respeito a garantias procedimentais mínimas) e eficácia vertical com dimensão objetiva (dever de proteção estatal contra desproteção - 'Untermassverbot'). O Mandado de Segurança exige prova pré-constituída sem dilação probatória, com prazo decadencial estrito de 120 dias a contar da ciência do ato lesivo (não se interrompe por pedido administrativo de reconsideração sem efeito suspensivo). O Habeas Data exige a comprovação formal de prévia recusa das informações pela autoridade administrativa (Súmula 2 do STJ).",
  pegadinhaFGV: "A banca explora com frequência a invasão de domicílio fundada unicamente em denúncia anônima ou atitude suspeita/fuga do indivíduo: o STF fixou no Tema 280 que a entrada forçada sem mandado judicial exige justa causa prévia demonstrada por elementos objetivos, sob pena de nulidade absoluta das provas e responsabilidade civil e penal do agente. Outra pegadinha clássica é confundir a legitimidade da Ação Popular (exclusiva de cidadão no pleno gozo dos direitos políticos, comprovada com título de eleitor) com a legitimidade da Ação Civil Pública (Ministério Público, Defensoria Pública, entes estatais e associações com pré-constituição de um ano).",
  questoes: [
    {
      numero: 1,
      enunciado: "Policiais militares em patrulhamento de rotina avistaram um indivíduo em via pública que, ao notar a presença da viatura, demonstrou nervosismo e ingressou correndo no pátio de sua residência. Sem mandado judicial, os agentes pularam o muro, entraram no imóvel e encontraram no quarto 500 gramas de substância entorpecente. Diante da jurisprudência consolidada do Supremo Tribunal Federal (Tema 280 da Repercussão Geral), a diligência policial descrita:",
      opcoes: [
        "A) É inteiramente lícita, pois o crime de tráfico de drogas tem natureza permanente, autorizando o flagrante delito e o ingresso domiciliar a qualquer hora do dia ou da noite.",
        "B) É ilícita, pois a mera fuga desacompanhada de outros elementos preliminares objetivos não constitui justa causa suficiente para mitigar a garantia da inviolabilidade do domicílio.",
        "C) É válida apenas se ratificada expressamente por despacho fundamentado da autoridade policial civil nas 24 horas seguintes.",
        "D) É lícita em razão da descoberta efetiva do entorpecente, aplicando-se o princípio da convalidação posterior do ato administrativo emergencial.",
        "E) Depende exclusivamente de autorização judicial prévia, não sendo admitido ingresso em domicílio no período noturno sob nenhuma hipótese."
      ],
      respostaCorreta: 1,
      comentario: "O STF fixou a tese de que a entrada forçada em domicílio sem mandado judicial só é lícita se amparada em fundadas razões, devidamente justificadas pelas circunstâncias do caso concreto prévias ao ingresso. A simples evasão ao avistar a polícia não supre a justa causa."
    },
    {
      numero: 2,
      enunciado: "Uma associação privada desportiva excluiu sumariamente de seu quadro de sócios determinado associado sob a alegação de cometimento de ato de indisciplina grave, sem que lhe fosse franqueada a oportunidade de apresentar defesa prévia escrita ou recurso, sob a alegação de que suas regras internas eram regidas exclusivamente pelo Direito Privado. À luz da teoria da eficácia horizontal dos direitos fundamentais fixada pelo Supremo Tribunal Federal, o procedimento adotado:",
      opcoes: [
        "A) É juridicamente perfeito, visto que a autonomia privada impede a incidência de garantias constitucionais nas relações interpessoais privadas.",
        "B) Exige apenas indenização prévia das cotas patrimoniais, sendo prescindível o contraditório em entidades sem fins lucrativos.",
        "C) Padece de nulidade, haja vista que os direitos fundamentais possuem eficácia horizontal nas relações privadas, assegurando o contraditório e a ampla defesa no processo de exclusão de associado.",
        "D) Apenas seria nulo caso a associação recebesse verba ou incentivo tributário direto da União.",
        "E) Deve ser mantido, competindo ao Judiciário intervir apenas em matéria de legalidade estrita de atos mercantis."
      ],
      respostaCorreta: 2,
      comentario: "O STF consolidou a eficácia horizontal (ou eficácia privada) dos direitos fundamentais, obrigando entidades privadas (como clubes e associações) a respeitarem garantias fundamentais mínimas, notadamente o contraditório e a ampla defesa em penalidades gravosas de exclusão."
    },
    {
      numero: 3,
      enunciado: "Um cidadão requereu formalmente por via administrativa à Secretaria de Fazenda de seu Município o fornecimento de certidão contendo dados a respeito do recolhimento de tributos de determinado imóvel de propriedade de terceiro, com o fito de instruir futura negociação de compra e venda. A autoridade municipal negou o pedido sob o argumento de sigilo fiscal. Diante da negativa expressa, o interessado impetrou Habeas Data perante o Poder Judiciário. O instrumento manejado:",
      opcoes: [
        "A) É a via processual adequada, pois visa assegurar o conhecimento de registros e dados constantes de entidades governamentais.",
        "B) Não é a via adequada, pois o Habeas Data destina-se estritamente à obtenção ou retificação de informações relativas à pessoa do próprio impetrante.",
        "C) É cabível, mas exigia prévio ajuizamento de Mandado de Segurança Coletivo pelo Ministério Público.",
        "D) Deverá ser conhecido de ofício e processado como Mandado de Injunção perante a Vara de Fazenda Pública.",
        "E) É viável somente se acompanhado de prova de recolhimento de custas processuais fixadas pela lei local."
      ],
      respostaCorreta: 1,
      comentario: "O Habeas Data tem natureza estritamente personalíssima (art. 5º, LXXII, 'a', CF), servindo para assegurar o conhecimento de informações relativas à própria pessoa do impetrante, e não a terceiros. Para certidões de interesse de terceiros ou esclarecimento de situações, a via correta seria o Mandado de Segurança."
    },
    {
      numero: 4,
      enunciado: "Servidor público estadual teve indeferida administrativamente a concessão de licença-capacitação pelo Secretário de Estado em decisão publicada no Diário Oficial em 10 de fevereiro. Inconformado, apresentou pedido de reconsideração sem efeito suspensivo perante a mesma autoridade em 1º de março, o qual restou indeferido em 15 de julho. Em 20 de agosto do mesmo ano, impetrou Mandado de Segurança contra o indeferimento originário. Sobre a admissibilidade da ação mandamental:",
      opcoes: [
        "A) Ocorreu decadência, pois o pedido de reconsideração na via administrativa desprovido de efeito suspensivo não interrompe nem suspende o prazo decadencial de 120 dias.",
        "B) A impetração é tempestiva, pois o pedido de reconsideração reinicia a contagem do prazo decadencial a partir de seu indeferimento definitivo.",
        "C) Não incide prazo decadencial em matéria envolvendo regime jurídico de servidor público, admitindo-se a prescrição ordinária quinquenal.",
        "D) O prazo decadencial ficou suspenso durante todo o período de tramitação do recurso administrativo.",
        "E) A via mandamental converte-se automaticamente em Ação Ordinária no caso de transcurso de mais de 90 dias entre a publicação e a citação."
      ],
      respostaCorreta: 0,
      comentario: "Conforme dispõe a Súmula 430 do STF e a remansosa jurisprudência do STJ, o pedido de reconsideração na via administrativa, desprovido de efeito suspensivo, não interrompe nem suspende o prazo decadencial de 120 dias para a impetração de Mandado de Segurança (art. 23 da Lei 12.016/2009)."
    },
    {
      numero: 5,
      enunciado: "Determinada pessoa jurídica de direito privado, inconformada com o conteúdo de edital de licitação que supostamente privilegiava fornecedores multinacionais em detrimento da indústria regional, ajuizou Ação Popular perante a Vara da Fazenda Pública, pleiteando a nulidade do certame e o ressarcimento ao erário por danos morais coletivos. Sobre a petição inicial:",
      opcoes: [
        "A) O juiz deverá dar regular prosseguimento, pois as pessoas jurídicas possuem ampla legitimidade para a tutela do patrimônio público por meio de Ação Popular.",
        "B) A ação deve ser indeferida por ilegitimidade ativa ad causam, uma vez que a legitimidade ativa na Ação Popular é exclusiva de cidadão no pleno exercício de direitos políticos.",
        "C) O feito deve ser extinto sem resolução do mérito pela impossibilidade de pleitear anulação de licitação antes da assinatura do contrato.",
        "D) O juiz determinará a emenda à inicial para converter compulsoriamente a demanda em Ação Civil Pública com substituição da parte pelo Ministério Público.",
        "E) A pessoa jurídica possui legitimidade se demonstrar que tem sede no território do ente federativo demandado."
      ],
      respostaCorreta: 1,
      comentario: "Nos termos do art. 5º, LXXIII, da CF e da Súmula 365 do STF, a pessoa jurídica não tem legitimidade ativa para propor Ação Popular, cuja titularidade é prerrogativa exclusiva do cidadão (eleitor)."
    },
    {
      numero: 6,
      enunciado: "Durante investigação criminal, o magistrado deferiu a quebra de sigilo telemático e determinou à empresa proprietária de aplicativo de mensagens a disponibilização de comunicações pretéritas armazenadas em nuvem. A defesa impetrou Habeas Corpus alegando afronta à garantia fundamental de sigilo de correspondência e comunicações telegráficas, de dados e telefônicas (art. 5º, XII, da CF). A ordem postulada deve ser:",
      opcoes: [
        "A) Concedida, pois a Constituição veda terminantemente a quebra de sigilo de dados informáticos, permitindo unicamente a interceptação de conversas telefônicas em tempo real.",
        "B) Denegada, pois a reserva de jurisdição abrange a inviolabilidade de comunicações de dados estáticos ou dinâmicos quando houver ordem judicial fundamentada para fins de persecução penal.",
        "C) Concedida em razão de que apenas a Polícia Federal pode solicitar judicialmente o acesso a dados telemáticos.",
        "D) Denegada, desde que haja consentimento tácito prévio assinado nos termos de serviço do usuário.",
        "E) Concedida, por ser necessária autorização concomitante do Ministério das Comunicações."
      ],
      respostaCorreta: 1,
      comentario: "O STF entende que a proteção constitucional do art. 5º, XII, da CF não é absoluta. O acesso a dados armazenados (comunicação telemática e fluxo pretérito de dados) pode ser determinado por ordem judicial fundamentada proferida por juiz competente no bojo de inquérito policial ou instrução penal."
    },
    {
      numero: 7,
      enunciado: "Determinada categoria profissional de servidores públicos distritais verificou a ausência continuada de lei regulamentadora de um direito constitucional de eficácia limitada expressamente previsto na Carta da República referente ao exercício do direito de greve no setor público. A entidade de classe competente ajuizou Mandado de Injunção coletivo no STF. Ao analisar a controvérsia à luz da Lei nº 13.300/2016 e da posição concretista da Suprema Corte, o Tribunal deve:",
      opcoes: [
        "A) Limitar-se a declarar a mora do Poder Legislativo, sem emitir provimento supletivo de regulamentação sob pena de violação à tripartição dos poderes.",
        "B) Adotar a posição concretista geral, estabelecendo provisoriamente as condições de exercício do direito mediante aplicação subsidiária da Lei de Greve do setor privado (Lei nº 7.783/1989).",
        "C) Extinguir a ação de plano, ante a inadmissibilidade de Mandado de Injunção coletivo na ordem jurídica constitucional.",
        "D) Condenar a autoridade impetrada em perdas e danos pelo atraso legislativo.",
        "E) Fixar prazo improrrogável de trinta dias para que o Congresso Nacional aprove o projeto sob pena de crime de desobediência."
      ],
      respostaCorreta: 1,
      comentario: "O STF superou a teoria não concretista e pacificou a orientação concretista geral (MI 670, MI 708 e MI 712), aplicando as normas da Lei Geral de Greve (Lei nº 7.783/1989) subsidiariamente aos servidores públicos até que sobrevenha legislação específica de iniciativa privativa do Chefe do Executivo."
    },
    {
      numero: 8,
      enunciado: "Réu preso preventivamente foi conduzido à sala de audiência criminal ostentando algemas nas mãos e nos pés. A defesa formulou requerimento requerendo a retirada dos artefatos, mas o magistrado indeferiu sob a justificativa genérica de que 'a praxe da comarca impõe o uso de algemas por segurança institucional dos presentes e do fórum'. Consoante a Súmula Vinculante nº 11 do STF, a conduta judicial descrita acarreta:",
      opcoes: [
        "A) Mera irregularidade administrativa sanável, sem interferência na validade dos depoimentos colhidos em juízo.",
        "B) Nulidade absoluta da audiência e dos atos processuais correlatos, sujeitando o magistrado ou a autoridade responsável à responsabilidade disciplinar, civil e penal.",
        "C) Necessidade imediata de remessa dos autos à Corregedoria do Tribunal de Justiça, mantendo-se os efeitos probatórios válidos se houver condenação.",
        "D) Nulidade relativa, condicionada à demonstração de efetivo prejuízo material comprovado pela defesa em memoriais finais.",
        "E) Regularidade da decisão, tendo em vista o poder geral de cautela e a discricionariedade absoluta do magistrado presidente dos trabalhos."
      ],
      respostaCorreta: 1,
      comentario: "A Súmula Vinculante 11 determina que o uso de algemas só é lícito em casos de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, devendo a excepcionalidade ser expressamente justificada por escrito. A falta de motivação idônea gera a nulidade do ato e a responsabilidade da autoridade."
    },
    {
      numero: 9,
      enunciado: "Em face da garantia fundamental do duplo grau de jurisdição e da soberania dos veredictos no Tribunal do Júri (art. 5º, XXXVIII, 'c', CF), o Ministério Público interpôs apelação com fundamento no artigo 593, III, 'd', do Código de Processo Penal, alegando que a decisão dos jurados que absolveu o réu com base no quesito genérico foi manifestamente contrária à prova dos autos. De acordo com a orientação das Cortes Superiores:",
      opcoes: [
        "A) A apelação não pode ser conhecida sob nenhum aspecto, pois o quesito absolutório genérico confere aos jurados soberania plena e irrecorrível, inclusive por clemência.",
        "B) É admitida a anulação do julgamento pelo Tribunal de Apelação por uma única vez, determinando-se a realização de novo júri popular caso a absolvição esteja divorciada integralmente do suporte probatório, sem violação da soberania dos veredictos.",
        "C) O Tribunal de Justiça pode desde logo reformar a decisão e proferir decreto condenatório diretamente em segunda instância.",
        "D) O duplo grau de jurisdição sobrepõe-se à soberania popular, permitindo a rejulgamento sucessivo e reiterado das decisões absolutórias.",
        "E) O recurso do Ministério Público só é cabível em caso de empate na votação do Conselho de Sentença."
      ],
      respostaCorreta: 1,
      comentario: "A jurisprudência tradicional e dominante do STJ e STF reconhece que a determinação de novo julgamento pelo Tribunal de Justiça com fulcro no art. 593, III, 'd', do CPP não fere a soberania dos veredictos, pois o tribunal ad quem não reforma a decisão de mérito, apenas cassa a decisão arbitrária e remete o réu a novo julgamento por seus pares (admissível uma única vez por tal motivo)."
    },
    {
      numero: 10,
      enunciado: "O Supremo Tribunal Federal, ao julgar a compatibilidade constitucional da identificação genética obrigatória de condenados por crimes dolosos praticados com violência grave contra a pessoa (Lei nº 12.037/2009 alterada pelo Pacote Anticrime), assentou que a extração de perfil genético (DNA):",
      opcoes: [
        "A) Afronta frontalmente o princípio da não autoincriminação (nemo tenetur se detegere), sendo inconstitucional a sua compulsoriedade em qualquer circunstância.",
        "B) É constitucional, não violando o direito de não produzir prova contra si mesmo, já que constitui mera identificação criminal de indivíduos já condenados por sentença penal definitiva.",
        "C) Exige obrigatoriamente a concordância e autorização escrita do apenado, ressalvado o pagamento de fiança.",
        "D) Só pode ser realizada durante a fase embrionária do inquérito policial, jamais após a prolação da condenação com trânsito em julgado.",
        "E) Aplica-se exclusivamente para fins de pesquisas acadêmicas sem compartilhamento com bancos de dados de segurança pública."
      ],
      respostaCorreta: 1,
      comentario: "No julgamento do Tema 977 de Repercussão Geral, o STF fixou que a coleta obrigatória de material biológico para fins de identificação de perfil genético de condenados por crimes graves não viola o direito à integridade física nem o princípio que veda a autoincriminação."
    }
  ]
};
