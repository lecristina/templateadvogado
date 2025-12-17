export const siteConfig = {
  header: {
    logo: {
      letter: "L",
      text: "Lawfor",
      letterBgColor: "amber-600",
      letterTextColor: "white",
    },
    navigation: {
      items: [
        {
          label: "Início",
          href: "#inicio",
        },
        {
          label: "Serviços",
          href: "#servicos",
        },
        {
          label: "Sobre",
          href: "#sobre",
        },
        {
          label: "Contato",
          href: "#contato",
        },
      ],
    },
  },
  hero: {
    badge: "Fundado em 1980",
    title: {
      line1: "Excelência em",
      line2: "Prática Jurídica",
      line2Color: "amber-500",
    },
    description:
      "Serviços jurídicos de excelência adaptados às necessidades únicas de cada cliente. Representação estratégica com décadas de experiência e resultados comprovados.",
    buttons: [
      {
        label: "Agendar Consulta",
        href: "#contato",
        variant: "primary",
        icon: "ArrowRight",
      },
      {
        label: "Saiba Mais",
        href: "#sobre",
        variant: "outline",
      },
    ],
    stats: [
      {
        number: "40+",
        label: "Anos de Experiência",
      },
      {
        number: "500+",
        label: "Casos Resolvidos",
      },
      {
        number: "98%",
        label: "Taxa de Sucesso",
      },
    ],
    image: {
      src: "",
      alt: "Escritório de advocacia profissional",
    },
  },
  services: {
    badge: "Áreas de Atuação",
    title: "Serviços Jurídicos Completos",
    description:
      "Expertise em múltiplas áreas de atuação para todas as suas necessidades jurídicas. Soluções personalizadas com abordagem estratégica e resultados eficazes.",
    items: [
      {
        title: "Direito Empresarial",
        description:
          "Assessoria jurídica completa para empresas. Da constituição até fusões e aquisições, protegendo seus interesses empresariais.",
      },
      {
        title: "Litígios e Resolução de Disputas",
        description:
          "Representação experiente em disputas comerciais, litígios contratuais e resolução alternativa de conflitos.",
      },
      {
        title: "Direito Imobiliário",
        description:
          "Suporte jurídico completo para transações imobiliárias, zoneamento e disputas de propriedade.",
      },
      {
        title: "Direito de Família",
        description:
          "Representação estratégica em divórcios, custódia, acordos pré-nupciais e planejamento patrimonial.",
      },
    ],
  },
  whyChooseUs: {
    badge: "Por Que Nos Escolher",
    title: "Representação Jurídica Confiável",
    description:
      "Compromisso com excelência, integridade e sucesso do cliente. Nossa dedicação à excelência jurídica é o fundamento de cada caso que representamos.",
    values: [
      {
        title: "Histórico Comprovado",
        description:
          "Mais de quatro décadas de representação bem-sucedida com resultados favoráveis em diversos assuntos jurídicos.",
      },
      {
        title: "Abordagem Centrada no Cliente",
        description:
          "Estratégia jurídica adaptada às suas necessidades e objetivos específicos.",
      },
      {
        title: "Equipe Experiente",
        description:
          "Advogados com ampla experiência e conhecimento especializado para a mais alta qualidade de representação.",
      },
      {
        title: "Comunicação Transparente",
        description:
          "Comunicação clara e honesta com atualizações regulares durante todo o processo.",
      },
    ],
  },
  process: {
    badge: "Nosso Processo",
    title: "Como Trabalhamos",
    description:
      "Uma abordagem estruturada e meticulosa para alcançar seus objetivos jurídicos com clareza, eficiência e resultados excepcionais.",
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Consulta abrangente para entender suas necessidades jurídicas e objetivos.",
      },
      {
        number: "02",
        title: "Análise do Caso",
        description:
          "Pesquisa e análise minuciosas para desenvolver uma estratégia adaptada à sua situação.",
      },
      {
        number: "03",
        title: "Estratégia Jurídica",
        description:
          "Desenvolvimento e apresentação de estratégia clara com caminho e resultados esperados.",
      },
      {
        number: "04",
        title: "Representação",
        description:
          "Representação dedicada durante todo o processo, mantendo você informado em cada etapa.",
      },
    ],
  },
  consultation: {
    image: {
      src: "",
      alt: "Consulta jurídica profissional",
      overlay: {
        badge: "Consulta Profissional",
        title: "Sua jornada jurídica começa aqui",
      },
    },
    badge: "Consulta Inicial",
    title: "Agende Sua Consulta",
    description:
      "Consulta abrangente e confidencial para discutir sua situação jurídica e definir o melhor caminho estratégico para o seu caso.",
    features: [
      {
        title: "Consulta Inicial Gratuita",
        description: "Primeiros 30 minutos sem custo",
      },
      {
        title: "Orientação Especializada",
        description: "Orientação profissional de advogados experientes",
      },
      {
        title: "Honorários Transparentes",
        description: "Discussão clara de honorários e opções de pagamento",
      },
    ],
    button: {
      label: "Agendar Consulta",
      href: "#contato",
      icon: "Calendar",
    },
  },
  blog: {
    badge: "Insights Jurídicos",
    title: "Últimas Atualizações",
    button: {
      label: "Ver Tudo",
      href: "#blog",
    },
    posts: [
      {
        date: "29 de Janeiro, 2024",
        title: "Mudanças Recentes nas Regulamentações do Direito Empresarial",
        category: "Direito Empresarial",
      },
      {
        date: "26 de Janeiro, 2024",
        title: "Entendendo os Requisitos de Transações Imobiliárias",
        category: "Direito Imobiliário",
      },
      {
        date: "22 de Janeiro, 2024",
        title: "Tendências e Desenvolvimentos da Indústria Jurídica",
        category: "Notícias do Setor",
      },
    ],
  },
  faq: {
    badge: "Perguntas Frequentes",
    title: "Perguntas Comuns",
    description:
      "Encontre respostas para perguntas frequentes sobre nossos serviços jurídicos, processos e como podemos ajudá-lo a alcançar seus objetivos legais.",
    items: [
      {
        question: "Como o escritório trata honorários e taxas?",
        answer:
          "Nossa estrutura de honorários varia conforme a natureza do caso. Na consulta inicial, discutimos se trabalhamos por hora, taxa fixa ou honorários de sucesso. Transparência total, sem custos ocultos.",
      },
      {
        question: "Como posso enviar uma aplicação ao tribunal de proteção?",
        answer:
          "Nossa equipe guia você através de todo o processo, desde o preenchimento dos formulários até a documentação necessária, garantindo que todos os requisitos sejam atendidos.",
      },
      {
        question: "Que tipos de questões jurídicas o escritório trata?",
        answer:
          "Tratamos direito empresarial, litígios, transações imobiliárias, direito de família e planejamento patrimonial, atendendo diversas necessidades jurídicas.",
      },
      {
        question: "Qual é o prazo típico para resolver uma questão jurídica?",
        answer:
          "O prazo varia conforme a complexidade do caso e cronogramas do tribunal. Na consulta, fornecemos um prazo estimado baseado em suas circunstâncias.",
      },
    ],
  },
  footer: {
    logo: {
      letter: "L",
      text: "Lawfor",
    },
    description:
      "Serviços jurídicos excepcionais com integridade e dedicação ao sucesso do cliente.",
    contact: {
      phone: "(11) 1234-5678",
      email: "contato@lawfor.com.br",
    },
    quickLinks: {
      title: "Links Rápidos",
      items: [
        {
          label: "Início",
          href: "#inicio",
        },
        {
          label: "Serviços",
          href: "#servicos",
        },
        {
          label: "Sobre",
          href: "#sobre",
        },
        {
          label: "Contato",
          href: "#contato",
        },
      ],
    },
    copyright: "© 2024 Lawfor. Todos os direitos reservados.",
    legalLinks: [
      {
        label: "Política de Privacidade",
        href: "#politica-de-privacidade",
      },
      {
        label: "Termos de Serviço",
        href: "#termos-de-servico",
      },
      {
        label: "Aviso Legal",
        href: "#aviso-legal",
      },
    ],
  },
}
