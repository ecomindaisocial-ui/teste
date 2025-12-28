export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: { home: 'Início', features: 'Recursos', useCases: 'Casos de Uso', history: 'História', support: 'Suporte', contact: 'Contato', start: 'Começar' },
    hero: {
      badge: 'V1.5 AGORA DISPONÍVEL',
      title: 'IA que simplifica a agricultura sustentável.',
      titleHighlight1: 'Mais produtividade',
      titleMid: ', menos impacto e ',
      titleHighlight2: 'menos custo.',
      phone: '(+55 31 9791-2550)',
      desc: 'Descubra como reduzir custos e aumentar a produtividade enquanto cuida do planeta.Informações gratuitas, simples e confiáveis, baseadas em dados governamentais e científicos, traduzidas de forma acessível para você.',
      ctaPrimary: 'Teste Agora',
      ctaSecondary: 'Demo',
      statsUsers: 'TESTES FEITOS',
      statsRating: 'AVALIAÇÃO'
    },
    features: {
      badge: 'O Processo',
      title: 'Como EcoMind Funciona',
      desc: 'A EcoMindIA cruza dados agrícolas e climáticos de fontes oficiais e científicas, traduzindo informações complexas em decisões acessíveis.',
      steps: [
        { title: 'Banco de dados', desc: 'A EcoMindIA coleta informações em fontes confiáveis e bases de dados oficiais para entender a realidade do campo.' },
        { title: 'Checagem', desc: 'A EcoMindIA cruza e valida os dados coletados, traduzindo informações complexas em orientações confiáveis e fáceis de entender.' },
        { title: 'Pratica', desc: 'A EcoMindIA entrega respostas claras, com soluções práticas e sugestões de aplicação no seu dia a dia no campo.' }
      ],
      hubTitle: 'Nossos Compromissos',
      hubItems: [
        "Busca Universal em todos os serviços conectados",
        "Resumo por IA para longos documentos",
        "Arquitetura focada em privacidade com criptografia de ponta a ponta",
        "Painéis personalizáveis para foco profundo"
      ],
      hubLink: 'Saiba mais sobre nossa arquitetura'
    },
    useCases: {
      badge: 'Potencial Infinito',
      title: 'Feito para toda ',
      titleGradient: 'Ambição',
      desc: 'EcoMind se adapta ao seu fluxo de trabalho único, não importa sua indústria ou tamanho de equipe.',
      explore: 'Explorar Caso de Uso',
      areas: [
        { title: "Criadores de Conteúdo", desc: "Automatize a distribuição de vídeos e use IA para gerar roteiros." },
        { title: "Equipes de Software", desc: "Sincronize tarefas do Jira e GitHub em um único espaço de trabalho." },
        { title: "Pequenos Negócios", desc: "Gerencie estoque e suporte ao cliente sem contratar pessoal extra." },
        { title: "Estudantes", desc: "Organização de pesquisa e automação de cartões de estudo." },
        { title: "Imobiliárias", desc: "Automatize atualizações de listagens e gerencie leads." },
        { title: "E-commerce", desc: "Rastreie envios e analise o desempenho de vendas multicanal." }
      ]
    },
    history: {
      badge: 'Nosso Legado',
      title: 'A Jornada da Inovação',
      events: [
        { year: "2020", title: "A Gênese", desc: "Começou como um simples script de automação. Nosso fundador percebeu o potencial da automação visual." },
        { year: "2021", title: "Primeiro Beta", desc: "O EcoMind v1.0 entrou em beta privado com 500 testadores ansiosos." },
        { year: "2022", title: "Crescimento", desc: "Garantimos nossa primeira rodada de investimento e expandimos a equipe globalmente." },
        { year: "2023", title: "Revolução IA", desc: "Integramos modelos de linguagem em nosso motor principal." },
        { year: "2024", title: "Alcance Global", desc: "Com mais de 150 mil usuários, somos agora o motor de produtividade líder." }
      ]
    },
    donation: {
      title: 'Apoie a Revolução',
      desc: 'EcoMind é parcialmente financiado pela comunidade. Suas doações nos ajudam a manter os servidores e recursos acessíveis.',
      paypal: 'Doar via PayPal',
      crypto: 'Doação Crypto',
      disclaimer: '* 100% dos lucros vão para infraestrutura e contribuições open-source.',
      tiers: [
        { amount: "R$ 25", label: "Apoiador", perk: "Insígnia no Discord" },
        { amount: "R$ 75", label: "Crente", perk: "Acesso Antecipado Beta" },
        { amount: "R$ 250", label: "Visionário", perk: "Sessão de Estratégia 1-a-1" }
      ]
    },
    contact: {
      badge: 'Entre em Contato',
      title: 'Pronto para começar sua ',
      titleGradient: 'Jornada?',
      desc: 'Tem dúvidas? Precisa de uma integração personalizada? Nossa equipe está disponível 24/7. Ao escrever para mandar mensagem deve enviar o email para ecomindaisocial@gmail.com',
      call: 'Ligue para nós',
      whatsapp: '+55 (31) 9791-2550',
      email: 'Email',
      form: {
        name: 'Nome Completo',
        email: 'Endereço de Email',
        topic: 'Assunto',
        topicPlaceholder: 'Escreva o assunto aqui...',
        message: 'Sua Mensagem',
        submit: 'Enviar Mensagem',
        topics: ['Inquérito Geral', 'Suporte Técnico', 'Parceria', 'Mídia']
      }
    },
    ai: {
      greeting: "Olá! Eu sou a EcoMind, sua assistente de produtividade. Tem dúvidas sobre como nossa ferramenta pode ajudar seu fluxo?",
      placeholder: "Pergunte algo à EcoMind...",
      online: "Online Agora"
    }
  },
  en: {
    nav: { home: 'Home', features: 'Features', useCases: 'Use Cases', history: 'History', support: 'Support', contact: 'Contact', start: 'Get Started' },
    hero: {
      badge: 'V1.5 NOW AVAILABLE',
      title: 'AI that simplifies sustainable agriculture.',
      titleHighlight1: 'More productivity',
      titleMid: ', less impact and ',
      titleHighlight2: 'lower cost.',
      phone: '(+55 31 9791-2550)',
      desc: 'The next-generation productivity framework designed for developers, creators, and teams demanding high-speed automation. Contact us at ecomindaisocial@gmail.com',
      ctaPrimary: 'Test Now',
      ctaSecondary: 'Demo',
      statsUsers: 'TESTS COMPLETED',
      statsRating: 'RATING'
    },
    features: {
      badge: 'The Process',
      title: 'How EcoMind Works',
      desc: 'We simplified complex automation into a three-step journey to help you reclaim your most valuable asset: time.',
      steps: [
        { title: 'Integrate', desc: 'Connect your favorite apps and data sources with one click using our secure API gateways.' },
        { title: 'Automate', desc: 'Define your logic using our drag-and-drop workflow builder. No coding skills required.' },
        { title: 'Scale', desc: 'Watch your productivity soar as our AI optimizes your schedules and handles repetitive tasks.' }
      ],
      hubTitle: 'The Smart Hub of Your Digital Life',
      hubItems: ["Universal Search", "AI Summarization", "Privacy-first architecture", "Customizable dashboards"],
      hubLink: 'Learn more about our architecture'
    },
    useCases: {
      badge: 'Endless Potential',
      title: 'Built for Every ',
      titleGradient: 'Ambition',
      desc: 'EcoMind adapts to your unique workflow, no matter your industry or team size.',
      explore: 'Explore Use Case',
      areas: [
        { title: "Content Creators", desc: "Automate video distribution and use AI for scripts." },
        { title: "Software Teams", desc: "Sync Jira and GitHub in one workspace." },
        { title: "Small Business", desc: "Manage inventory and support tickets effortlessly." },
        { title: "Students", desc: "Research organization and flashcard automation." },
        { title: "Real Estate", desc: "Automate listing updates and lead follow-ups." },
        { title: "E-commerce", desc: "Track shipments and analyze multi-channel sales." }
      ]
    },
    history: {
      badge: 'Our Legacy',
      title: 'The Journey of Innovation',
      events: [
        { year: "2020", title: "The Genesis", desc: "Started as a simple script. Our founder saw the potential of visual automation." },
        { year: "2021", title: "First Beta", desc: "EcoMind v1.0 entered private beta with 500 eager testers." },
        { year: "2022", title: "Growth", desc: "Secured funding and expanded the team globally." },
        { year: "2023", title: "AI Revolution", desc: "Integrated LLMs into our core engine." },
        { year: "2024", title: "Global Reach", desc: "With 150k+ users, we are leading the productivity market." }
      ]
    },
    donation: {
      title: 'Support the Revolution',
      desc: 'EcoMind is partially community-funded. Your donations help us keep servers running.',
      paypal: 'Donate via PayPal',
      crypto: 'Crypto Donation',
      disclaimer: '* 100% of proceeds go to infrastructure and open-source.',
      tiers: [
        { amount: "$5", label: "Supporter", perk: "Discord Badge" },
        { amount: "$15", label: "Believer", perk: "Early Beta Access" },
        { amount: "$50", label: "Visionary", perk: "1-on-1 Session" }
      ]
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Ready to start your ',
      titleGradient: 'Journey?',
      desc: 'Have questions? Need a custom integration? Our team is available 24/7. When writing to send a message you should send the email to ecomindaisocial@gmail.com',
      call: 'Call Us',
      whatsapp: '+55 (31) 9791-2550',
      email: 'Email',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        topic: 'Topic',
        topicPlaceholder: 'Write your topic here...',
        message: 'Your Message',
        submit: 'Send Message',
        topics: ['General Inquiry', 'Technical Support', 'Partnership', 'Media']
      }
    },
    ai: {
      greeting: "Hi! I'm EcoMind, your productivity assistant. Have questions about how our tool can help your workflow?",
      placeholder: "Ask EcoMind anything...",
      online: "Online Now"
    }
  },
  es: {
    nav: { home: 'Inicio', features: 'Características', useCases: 'Casos de Uso', history: 'Historia', support: 'Soporte', contact: 'Contacto', start: 'Empezar' },
    hero: {
      badge: 'V1.5 AHORA DISPONIBLE',
      title: 'IA que simplifica la agricultura sostenible.',
      titleHighlight1: 'Más productividad',
      titleMid: ', menos impacto y ',
      titleHighlight2: 'menor costo.',
      phone: '(+55 31 9791-2550)',
      desc: 'El marco de productividad de próxima generación diseñado para desarrolladores, creadores y equipos. Contáctenos en ecomindaisocial@gmail.com',
      ctaPrimary: 'Probar Ahora',
      ctaSecondary: 'Demo',
      statsUsers: 'PRUEBAS REALIZADAS',
      statsRating: 'CALIFICACIÓN'
    },
    features: {
      badge: 'El Proceso',
      title: 'Cómo Funciona EcoMind',
      desc: 'Simplificamos la automatización compleja para ayudarte a recuperar tu activo más valioso: el tiempo.',
      steps: [
        { title: 'Integrar', desc: 'Conecta tus aplicaciones favoritas con un clic usando nuestros gateways seguros.' },
        { title: 'Automatizar', desc: 'Define tu lógica con nuestro constructor visual. Sin código.' },
        { title: 'Escalar', desc: 'Ve cómo tu productividad aumenta mientras nuestra IA optimiza tus horarios.' }
      ],
      hubTitle: 'El Hub Inteligente de tu Vida Digital',
      hubItems: ["Búsqueda Universal", "Resumen por IA", "Privacidad primero", "Paneles personalizables"],
      hubLink: 'Más sobre nuestra arquitectura'
    },
    useCases: {
      badge: 'Potencial Infinito',
      title: 'Hecho para toda ',
      titleGradient: 'Ambición',
      desc: 'EcoMind se adapta a tu flujo de trabalho, sin importar la industria.',
      explore: 'Explorar Caso',
      areas: [
        { title: "Creadores", desc: "Automatiza distribución de videos y usa IA para guiones." },
        { title: "Equipos", desc: "Sincroniza Jira y GitHub en un espacio." },
        { title: "Pymes", desc: "Gestiona inventario y soporte sin personal extra." },
        { title: "Estudiantes", desc: "Organización de investigación y tarjetas de estudio." },
        { title: "Inmobiliaria", desc: "Automatiza actualizaciones de listagens." },
        { title: "E-commerce", desc: "Rastrea envíos y analiza ventas." }
      ]
    },
    history: {
      badge: 'Nuestro Legado',
      title: 'El Viaje de la Inovación',
      events: [
        { year: "2020", title: "La Génesis", desc: "Comenzó como un simple script. Nuestro fundador vio el potencial." },
        { year: "2021", title: "Primer Beta", desc: "EcoMind v1.0 entrou em beta privado com 500 probadores." },
        { year: "2022", title: "Crecimiento", desc: "Aseguramos inversión y expandimos el equipo globalmente." },
        { year: "2023", title: "Revolução IA", desc: "Integramos LLMs en nuestro motor." },
        { year: "2024", title: "Alcance Global", desc: "Con más de 150k usuarios, lideramos el mercado." }
      ]
    },
    donation: {
      title: 'Apoya la Revolución',
      desc: 'EcoMind es financiado parcialmente por la comunidad. Tus donaciones nos ayudan.',
      paypal: 'Donar vía PayPal',
      crypto: 'Donación Crypto',
      disclaimer: '* 100% de los ingresos van a infraestructura.',
      tiers: [
        { amount: "€5", label: "Seguidor", perk: "Insignia Discord" },
        { amount: "€15", label: "Creyente", perk: "Acceso Beta" },
        { amount: "€50", label: "Visionario", perk: "Sesión 1-a-1" }
      ]
    },
    contact: {
      badge: 'Contacto',
      title: '¿Listo para empezar tu ',
      titleGradient: 'Viaje?',
      desc: '¿Preguntas? ¿Necesitas integración? Nuestro equipo está 24/7. Al escribir para enviar un mensaje debe enviar el correo a ecomindaisocial@gmail.com',
      call: 'Llámanos',
      whatsapp: '+55 (31) 9791-2550',
      email: 'Email',
      form: {
        name: 'Nombre Completo',
        email: 'Email',
        topic: 'Tema',
        topicPlaceholder: 'Escriba su tema aquí...',
        message: 'Tu Mensaje',
        submit: 'Enviar Mensaje',
        topics: ['Inquiry General', 'Soporte Técnico', 'Alianza', 'Prensa']
      }
    },
    ai: {
      greeting: "¡Hola! Soy EcoMind, tu asistente. ¿Dudas sobre cómo podemos ayudar?",
      placeholder: "Pregunta algo a EcoMind...",
      online: "En línea"
    }
  }
};