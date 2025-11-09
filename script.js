// Multi-language support
const translations = {
    es: {
        // Navigation
        'nav-inicio': 'Inicio',
        'nav-servicios': 'Servicios',
        'nav-nosotros': 'Nosotros',
        'nav-talento': 'Talento',
        'nav-contacto': 'Contacto',
        'cta-demo': 'Agenda una Demo',
        
        // Hero Section
        'hero-title-1': 'El futuro del soporte',
        'hero-title-2': 'Es digital y humano',
        'hero-subtitle': 'Somos el punto de encuentro entre el potencial humano y la eficiencia digital. Conectamos empresas de cualquier escala con talento global especializado.',
        'stat-professionals': 'Profesionales',
        'stat-countries': 'Países',
        'stat-support': 'Soporte',
        'btn-services': 'Conoce nuestros servicios',
        'btn-talent': 'Únete como talento',
        'card-global': 'Talento Global',
        'card-connection': 'Conectando personas con tecnología',
        'card-efficiency': 'Eficiencia Digital',
        
        // Services Section
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Ofrecemos servicios especializados con talento global para impulsar tu crecimiento',
        'service-data-title': 'Procesamiento de Datos',
        'service-data-desc': 'Procesamiento y análisis de grandes volúmenes de información con precisión y eficiencia.',
        'service-support-title': 'Atención al Cliente',
        'service-support-desc': 'Atención al cliente multicanal con profesionales capacitados en múltiples idiomas.',
        'service-admin-title': 'Gestión Administrativa',
        'service-admin-desc': 'Gestión administrativa remota para optimizar tus procesos internos.',
        'service-sales-title': 'Impulso de Ventas',
        'service-sales-desc': 'Impulsa tus ventas con estrategias personalizadas y atención excepcional.',
        'feature-analysis': 'Análisis avanzado',
        'feature-automation': 'Automatización',
        'feature-accuracy': 'Alta precisión',
        'feature-multilingual': 'Multiidioma',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Multicanal',
        'feature-remote': 'Remoto',
        'feature-optimization': 'Optimización',
        'feature-processes': 'Procesos',
        'feature-strategies': 'Estrategias',
        'feature-personalized': 'Personalizado',
        'feature-growth': 'Crecimiento',
        
        // About Section
        'about-title': 'Nosotros',
        'about-desc-1': 'Sabemos de la industria y sus necesidades específicas, y también de las personas que las solucionan y las hacen posibles. Somos el puente que conecta ambos mundos.',
        'about-human-title': 'Somos humanos con nombres y caras',
        'about-human-desc': 'Cada profesional es una persona real con experiencia verificada',
        'about-b2b-title': 'Sabemos de B2B y B2T',
        'about-b2b-desc': 'Entendemos tanto las necesidades empresariales como del talento',
        'about-tone-title': 'Tono cotidiano sin perder expertiz',
        'about-tone-desc': 'Comunicación cercana manteniendo la profesionalidad',
        'about-global-title': 'Talento sin fronteras',
        'about-global-desc': 'Conectamos el mundo a través del talento especializado',
        
        // Advantages Section
        'advantages-title': 'Ventajas',
        'advantages-subtitle': 'Por qué elegir HumanosTech para tu próximo proyecto',
        'adv-global-title': 'Acceso a profesionales especializados de todo el mundo',
        'adv-scalable-title': 'Servicios escalables según tus necesidades específicas',
        'adv-payment-title': 'Pago por uso sin compromisos a largo plazo',
        'adv-quality-title': 'Profesionales altamente cualificados y procesos optimizados',
        'adv-tools-title': 'Acceso a herramientas premium sin inversión adicional',
        'adv-metrics-title': 'Mediciones claras de desempeño y mejora continua',
        
        // Process Section
        'process-title': 'Proceso',
        'process-subtitle': 'Cómo trabajamos contigo paso a paso',
        'step-1-title': 'Evaluamos tus requerimientos específicos',
        'step-1-desc': 'Analizamos en detalle tus necesidades y objetivos para diseñar la solución perfecta',
        'step-2-title': 'Conectamos con los profesionales ideales',
        'step-2-desc': 'Seleccionamos el talento más adecuado según tu industria y requerimientos específicos',
        'step-3-title': 'Ejecutamos la solución de manera eficiente',
        'step-3-desc': 'Implementamos la solución con metodologías probadas y comunicación constante',
        'step-4-title': 'Monitoreamos y optimizamos los resultados',
        'step-4-desc': 'Seguimiento continuo para asegurar la calidad y optimizar el rendimiento',
        
        // Founders Section
        'founders-title': 'Los Fundadores',
        'founders-subtitle': 'Conoce al equipo detrás de HumanosTech',
        'founder-mariela-name': 'Mariela Yuri',
        'founder-mariela-role': 'CEO',
        'founder-mariela-location': 'Italia',
        'founder-mariela-desc': 'Experta en estrategia empresarial con más de 15 años conectando empresas con talento global.',
        'founder-carlosl-name': 'Carlos Lohen',
        'founder-carlosl-role': 'CTO',
        'founder-carlosl-location': 'Francia',
        'founder-carlosl-desc': 'Analistas de sistemas especializado en plataformas escalables y soluciones tecnológicas innovadoras.',
        'founder-carlosv-name': 'Carlos Velázquez',
        'founder-carlosv-role': 'COO',
        'founder-carlosv-location': 'Venezuela',
        'founder-carlosv-desc': 'Especialista en optimización de procesos y gestión de equipos distribuidos globalmente.',
        
        // Contact Section
        'contact-title': 'Agenda una demo gratuita',
        'contact-desc': 'Descubre cómo podemos ayudarte a crecer. Agenda una demo personalizada y conoce nuestras soluciones en acción.',
        'contact-fast': 'Respuesta en menos de 24h',
        'contact-personalized': 'Demo personalizada',
        'contact-consultation': 'Consultoría gratuita',
        'form-name': 'Nombre completo',
        'form-email': 'Email corporativo',
        'form-company': 'Empresa',
        'form-service': 'Servicio de interés',
        'form-service-placeholder': 'Selecciona un servicio',
        'form-service-data': 'Procesamiento de Datos',
        'form-service-support': 'Atención al Cliente',
        'form-service-admin': 'Gestión Administrativa',
        'form-service-sales': 'Impulso de Ventas',
        'form-message': 'Mensaje (opcional)',
        'form-submit': 'Agendar Demo',
        
          // Footer
        'footer-desc': 'Conectando el potencial humano con la eficiencia digital',
        'footer-services': 'Servicios',
        'footer-data': 'Procesamiento de Datos',
        'footer-support': 'Atención al Cliente',
        'footer-admin': 'Gestión Administrativa',
        'footer-sales': 'Impulso de Ventas',
        'footer-company': 'Empresa',
        'footer-about': 'Sobre Nosotros',
        'footer-careers': 'Carreras',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Contacto',
        'footer-legal': 'Legal',
        'footer-privacy': 'Política de Privacidad',
        'footer-terms': 'Términos de Servicio',
        'footer-cookies': 'Cookies',
        'footer-rights': 'Todos los derechos reservados.',

        // Data Processing Page
        'data-processing-title': 'Procesamiento de Datos - HumanosTech',
        'data-processing-meta-desc': 'Servicios de procesamiento y análisis de grandes volúmenes de información con precisión y eficiencia.',
        'data-processing-hero-title': 'Procesamiento de Datos',
        'data-processing-hero-subtitle': 'Transformamos tus datos en información valiosa para la toma de decisiones estratégicas.',
        'data-processing-section-title': 'Nuestros Servicios de Procesamiento de Datos',
        'data-processing-section-subtitle': 'Ofrecemos soluciones integrales para la gestión y análisis de datos, garantizando precisión y eficiencia.',
        'data-processing-service-1-title': 'Recolección y Limpieza de Datos',
        'data-processing-service-1-desc': 'Recopilamos, validamos y limpiamos grandes volúmenes de datos para asegurar su calidad y consistencia.',
        'feature-consistency': 'Consistencia',
        'data-processing-service-2-title': 'Análisis y Visualización',
        'data-processing-service-2-desc': 'Convertimos datos complejos en visualizaciones claras y reportes accionables para facilitar la toma de decisiones.',
        'feature-insights': 'Insights',
        'data-processing-service-3-title': 'Automatización de Procesos',
        'data-processing-service-3-desc': 'Implementamos soluciones de automatización para optimizar tus flujos de trabajo y reducir errores manuales.',
        'feature-efficiency': 'Eficiencia',
        'data-processing-service-4-title': 'Integración de Sistemas',
        'data-processing-service-4-desc': 'Conectamos tus sistemas y plataformas para una gestión de datos centralizada y sin interrupciones.',
        'feature-integration': 'Integración',
        'feature-seamless': 'Sin interrupciones',
        'contact-cta-title': '¿Listo para transformar tus datos?',
        'contact-cta-subtitle': 'Agenda una demo gratuita y descubre cómo podemos optimizar tus procesos de datos.'
    },
    en: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-servicios': 'Services',
        'nav-nosotros': 'About Us',
        'nav-talento': 'Talent',
        'nav-contacto': 'Contact',
        'cta-demo': 'Schedule a Demo',
        
        // Hero Section
        'hero-title-1': 'The future of support',
        'hero-title-2': 'Is digital and human',
        'hero-subtitle': 'We are the meeting point between human potential and digital efficiency. We connect companies of any scale with specialized global talent.',
        'stat-professionals': 'Professionals',
        'stat-countries': 'Countries',
        'stat-support': 'Support',
        'btn-services': 'Discover our services',
        'btn-talent': 'Join as talent',
        'card-global': 'Global Talent',
        'card-connection': 'Connecting people with technology',
        'card-efficiency': 'Digital Efficiency',
        
        // Services Section
        'services-title': 'Our Services',
        'services-subtitle': 'We offer specialized services with global talent to drive your growth',
        'service-data-title': 'Data Processing',
        'service-data-desc': 'Processing and analysis of large volumes of information with precision and efficiency.',
        'service-support-title': 'Customer Support',
        'service-support-desc': 'Multichannel customer support with professionals trained in multiple languages.',
        'service-admin-title': 'Administrative Management',
        'service-admin-desc': 'Remote administrative management to optimize your internal processes.',
        'service-sales-title': 'Sales Boost',
        'service-sales-desc': 'Boost your sales with personalized strategies and exceptional service.',
        'feature-analysis': 'Advanced analysis',
        'feature-automation': 'Automation',
        'feature-accuracy': 'High precision',
        'feature-multilingual': 'Multilingual',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Multichannel',
        'feature-remote': 'Remote',
        'feature-optimization': 'Optimization',
        'feature-processes': 'Processes',
        'feature-strategies': 'Strategies',
        'feature-personalized': 'Personalized',
        'feature-growth': 'Growth',
        
        // About Section
        'about-title': 'About Us',
        'about-desc-1': 'We know the industry and its specific needs, and also the people who solve them and make them possible. We are the bridge that connects both worlds.',
        'about-human-title': 'We are humans with names and faces',
        'about-human-desc': 'Each professional is a real person with verified experience',
        'about-b2b-title': 'We know B2B and B2T',
        'about-b2b-desc': 'We understand both business and talent needs',
        'about-tone-title': 'Everyday tone without losing expertise',
        'about-tone-desc': 'Close communication while maintaining professionalism',
        'about-global-title': 'Talent without borders',
        'about-global-desc': 'We connect the world through specialized talent',
        
        // Advantages Section
        'advantages-title': 'Advantages',
        'advantages-subtitle': 'Why choose HumanosTech for your next project',
        'adv-global-title': 'Access to specialized professionals from around the world',
        'adv-scalable-title': 'Scalable services according to your specific needs',
        'adv-payment-title': 'Pay-per-use without long-term commitments',
        'adv-quality-title': 'Highly qualified professionals and optimized processes',
        'adv-tools-title': 'Access to premium tools without additional investment',
        'adv-metrics-title': 'Clear performance measurements and continuous improvement',
        
        // Process Section
        'process-title': 'Process',
        'process-subtitle': 'How we work with you step by step',
        'step-1-title': 'We evaluate your specific requirements',
        'step-1-desc': 'We analyze your needs and objectives in detail to design the perfect solution',
        'step-2-title': 'We connect with the ideal professionals',
        'step-2-desc': 'We select the most suitable talent according to your industry and specific requirements',
        'step-3-title': 'We execute the solution efficiently',
        'step-3-desc': 'We implement the solution with proven methodologies and constant communication',
        'step-4-title': 'We monitor and optimize results',
        'step-4-desc': 'Continuous monitoring to ensure quality and optimize performance',
        
        // Talent Section
        'talent-title': 'Join our global team',
        'talent-desc': 'Be part of a network of specialized professionals working with leading companies worldwide. Develop your career without geographical limits.',
        'benefit-projects': 'International projects',
        'benefit-flexibility': 'Schedule flexibility',
        'benefit-growth': 'Professional growth',
        'benefit-remote': 'Remote work',
        'btn-join-talent': 'Join as talent',
        
        // Contact Section
        'contact-title': 'Schedule a free demo',
        'contact-desc': 'Discover how we can help you grow. Schedule a personalized demo and see our solutions in action.',
        'contact-fast': 'Response in less than 24h',
        'contact-personalized': 'Personalized demo',
        'contact-consultation': 'Free consultation',
        'form-name': 'Full name',
        'form-email': 'Corporate email',
        'form-company': 'Company',
        'form-service': 'Service of interest',
        'form-service-placeholder': 'Select a service',
        'form-service-data': 'Data Processing',
        'form-service-support': 'Customer Support',
        'form-service-admin': 'Administrative Management',
        'form-service-sales': 'Sales Boost',
        'form-message': 'Message (optional)',
        'form-submit': 'Schedule Demo',
        
        // Footer
        'footer-desc': 'Connecting human potential with digital efficiency',
        'footer-services': 'Services',
        'footer-data': 'Data Processing',
        'footer-support': 'Customer Support',
        'footer-admin': 'Administrative Management',
        'footer-sales': 'Sales Boost',
        'footer-company': 'Company',
        'footer-about': 'About Us',
        'footer-careers': 'Careers',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Contact',
        'footer-legal': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-cookies': 'Cookies',
        'footer-rights': 'All rights reserved.',

        // Data Processing Page
        'data-processing-title': 'Data Processing - HumanosTech',
        'data-processing-meta-desc': 'Services for processing and analyzing large volumes of information with precision and efficiency.',
        'data-processing-hero-title': 'Data Processing',
        'data-processing-hero-subtitle': 'We transform your data into valuable information for strategic decision-making.',
        'data-processing-section-title': 'Our Data Processing Services',
        'data-processing-section-subtitle': 'We offer comprehensive solutions for data management and analysis, ensuring accuracy and efficiency.',
        'data-processing-service-1-title': 'Data Collection and Cleaning',
        'data-processing-service-1-desc': 'We collect, validate, and clean large volumes of data to ensure its quality and consistency.',
        'feature-consistency': 'Consistency',
        'data-processing-service-2-title': 'Analysis and Visualization',
        'data-processing-service-2-desc': 'We convert complex data into clear visualizations and actionable reports to facilitate decision-making.',
        'feature-insights': 'Insights',
        'data-processing-service-3-title': 'Process Automation',
        'data-processing-service-3-desc': 'We implement automation solutions to optimize your workflows and reduce manual errors.',
        'feature-efficiency': 'Efficiency',
        'data-processing-service-4-title': 'System Integration',
        'data-processing-service-4-desc': 'We connect your systems and platforms for centralized and seamless data management.',
        'feature-integration': 'Integration',
        'feature-seamless': 'Seamless',
        'contact-cta-title': 'Ready to transform your data?',
        'contact-cta-subtitle': 'Schedule a free demo and discover how we can optimize your data processes.'
    },
    fr: {
        // Navigation
        'nav-inicio': 'Accueil',
        'nav-servicios': 'Services',
        'nav-nosotros': 'À propos',
        'nav-talento': 'Talent',
        'nav-contacto': 'Contact',
        'cta-demo': 'Planifier une démo',
        
        // Hero Section
        'hero-title-1': 'L\'avenir du support',
        'hero-title-2': 'Est numérique et humain',
        'hero-subtitle': 'Nous sommes le point de rencontre entre le potentiel humain et l\'efficacité numérique. Nous connectons les entreprises de toute taille avec des talents mondiaux spécialisés.',
        'stat-professionals': 'Professionnels',
        'stat-countries': 'Pays',
        'stat-support': 'Support',
        'btn-services': 'Découvrez nos services',
        'btn-talent': 'Rejoignez comme talent',
        'card-global': 'Talent Mondial',
        'card-connection': 'Connecter les personnes avec la technologie',
        'card-efficiency': 'Efficacité Numérique',
        
        // Services Section
        'services-title': 'Nos Services',
        'services-subtitle': 'Nous offrons des services spécialisés avec des talents mondiaux pour stimuler votre croissance',
        'service-data-title': 'Traitement de Données',
        'service-data-desc': 'Traitement et analyse de gros volumes d\'informations avec précision et efficacité.',
        'service-support-title': 'Support Client',
        'service-support-desc': 'Support client multicanal avec des professionnels formés en plusieurs langues.',
        'service-admin-title': 'Gestion Administrative',
        'service-admin-desc': 'Gestion administrative à distance pour optimiser vos processus internes.',
        'service-sales-title': 'Boost des Ventes',
        'service-sales-desc': 'Boostez vos ventes avec des stratégies personnalisées et un service exceptionnel.',
        'feature-analysis': 'Analyse avancée',
        'feature-automation': 'Automatisation',
        'feature-accuracy': 'Haute précision',
        'feature-multilingual': 'Multilingue',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Multicanal',
        'feature-remote': 'À distance',
        'feature-optimization': 'Optimisation',
        'feature-processes': 'Processus',
        'feature-strategies': 'Stratégies',
        'feature-personalized': 'Personnalisé',
        'feature-growth': 'Croissance',
        
        // About Section
        'about-title': 'À propos de nous',
        'about-desc-1': 'Nous connaissons l\'industrie et ses besoins spécifiques, ainsi que les personnes qui les résolvent et les rendent possibles. Nous sommes le pont qui relie ces deux mondes.',
        'about-human-title': 'Nous sommes des humains avec des noms et des visages',
        'about-human-desc': 'Chaque professionnel est une vraie personne avec une expérience vérifiée',
        'about-b2b-title': 'Nous connaissons le B2B et le B2T',
        'about-b2b-desc': 'Nous comprenons les besoins des entreprises et des talents',
        'about-tone-title': 'Ton quotidien sans perdre l\'expertise',
        'about-tone-desc': 'Communication proche tout en maintenant le professionnalisme',
        'about-global-title': 'Talent sans frontières',
        'about-global-desc': 'Nous connectons le monde grâce au talent spécialisé',
        
        // Advantages Section
        'advantages-title': 'Avantages',
        'advantages-subtitle': 'Pourquoi choisir HumanosTech pour votre prochain projet',
        'adv-global-title': 'Accès à des professionnels spécialisés du monde entier',
        'adv-scalable-title': 'Services évolutifs selon vos besoins spécifiques',
        'adv-payment-title': 'Paiement à l\'usage sans engagements à long terme',
        'adv-quality-title': 'Professionnels hautement qualifiés et processus optimisés',
        'adv-tools-title': 'Accès aux outils premium sans investissement supplémentaire',
        'adv-metrics-title': 'Mesures de performance claires et amélioration continue',
        
        // Process Section
        'process-title': 'Process',
        'process-subtitle': 'Comment nous travaillons avec vous étape par étape',
        'step-1-title': 'Nous évaluons vos exigences spécifiques',
        'step-1-desc': 'Nous analysons en détail vos besoins et objectifs pour concevoir la solution parfaite',
        'step-2-title': 'Nous nous connectons avec les professionnels idéaux',
        'step-2-desc': 'Nous sélectionnons le talent le plus approprié selon votre industrie et vos exigences spécifiques',
        'step-3-title': 'Nous exécutons la solution efficacement',
        'step-3-desc': 'Nous implémentons la solution avec des méthodologies éprouvées et une communication constante',
        'step-4-title': 'Nous surveillons et optimisons les résultats',
        'step-4-desc': 'Surveillance continue pour assurer la qualité et optimiser les performances',
        
        // Talent Section
        'talent-title': 'Rejoignez notre équipe mondiale',
        'talent-desc': 'Faites partie d\'un réseau de professionnels spécialisés travaillant avec des entreprises leaders dans le monde entier. Développez votre carrière sans limites géographiques.',
        'benefit-projects': 'Projets internationaux',
        'benefit-flexibility': 'Flexibilité horaire',
        'benefit-growth': 'Croissance professionnelle',
        'benefit-remote': 'Travail à distance',
        'btn-join-talent': 'Rejoignez comme talent',
        
        // Contact Section
        'contact-title': 'Planifiez une démo gratuite',
        'contact-desc': 'Découvrez comment nous pouvons vous aider à grandir. Planifiez une démo personnalisée et voyez nos solutions en action.',
        'contact-fast': 'Réponse en moins de 24h',
        'contact-personalized': 'Démo personnalisée',
        'contact-consultation': 'Consultation gratuite',
        'form-name': 'Nom complet',
        'form-email': 'Email professionnel',
        'form-company': 'Entreprise',
        'form-service': 'Service d\'intérêt',
        'form-service-placeholder': 'Sélectionnez un service',
        'form-service-data': 'Traitement de Données',
        'form-service-support': 'Support Client',
        'form-service-admin': 'Gestion Administrative',
        'form-service-sales': 'Boost des Ventes',
        'form-message': 'Message (optionnel)',
        'form-submit': 'Planifier une Démo',
        
        // Footer
        'footer-desc': 'Connecter le potentiel humain avec l\'efficacité numérique',
        'footer-services': 'Services',
        'footer-data': 'Traitement de Données',
        'footer-support': 'Support Client',
        'footer-admin': 'Gestion Administrative',
        'footer-sales': 'Boost des Ventes',
        'footer-company': 'Entreprise',
        'footer-about': 'À propos',
        'footer-careers': 'Carrières',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Contact',
        'footer-legal': 'Légal',
        'footer-privacy': 'Politique de Confidentialité',
        'footer-terms': 'Conditions de Service',
        'footer-cookies': 'Cookies',
        'footer-rights': 'Tous droits réservés.',

        // Data Processing Page
        'data-processing-title': 'Traitement de Données - HumanosTech',
        'data-processing-meta-desc': 'Services de traitement et d\'analyse de grands volumes d\'informations avec précision et efficacité.',
        'data-processing-hero-title': 'Traitement de Données',
        'data-processing-hero-subtitle': 'Nous transformons vos données en informations précieuses pour la prise de décisions stratégiques.',
        'data-processing-section-title': 'Nos Services de Traitement de Données',
        'data-processing-section-subtitle': 'Nous offrons des solutions complètes pour la gestion et l\'analyse des données, garantissant précision et efficacité.',
        'data-processing-service-1-title': 'Collecte et Nettoyage de Données',
        'data-processing-service-1-desc': 'Nous collectons, validons et nettoyons de grands volumes de données pour assurer leur qualité et leur cohérence.',
        'feature-consistency': 'Cohérence',
        'data-processing-service-2-title': 'Analyse et Visualisation',
        'data-processing-service-2-desc': 'Nous convertissons les données complexes en visualisations claires et rapports exploitables pour faciliter la prise de décision.',
        'feature-insights': 'Insights',
        'data-processing-service-3-title': 'Automatisation des Processus',
        'data-processing-service-3-desc': 'Nous mettons en œuvre des solutions d\'automatisation pour optimiser vos flux de travail et réduire les erreurs manuelles.',
        'feature-efficiency': 'Efficacité',
        'data-processing-service-4-title': 'Intégration de Systèmes',
        'data-processing-service-4-desc': 'Nous connectons vos systèmes et plateformes pour une gestion centralisée et transparente des données.',
        'feature-integration': 'Intégration',
        'feature-seamless': 'Transparente',
        'contact-cta-title': 'Prêt à transformer vos données?',
        'contact-cta-subtitle': 'Planifiez une démo gratuite et découvrez comment nous pouvons optimiser vos processus de données.'
    },
    pt: {
        // Navigation
        'nav-inicio': 'Início',
        'nav-servicios': 'Serviços',
        'nav-nosotros': 'Sobre Nós',
        'nav-talento': 'Talento',
        'nav-contacto': 'Contato',
        'cta-demo': 'Agendar Demo',
        
        // Hero Section
        'hero-title-1': 'O futuro do suporte',
        'hero-title-2': 'É digital e humano',
        'hero-subtitle': 'Somos o ponto de encontro entre o potencial humano e a eficiência digital. Conectamos empresas de qualquer escala com talento global especializado.',
        'stat-professionals': 'Profissionais',
        'stat-countries': 'Países',
        'stat-support': 'Suporte',
        'btn-services': 'Conheça nossos serviços',
        'btn-talent': 'Junte-se como talento',
        'card-global': 'Talento Global',
        'card-connection': 'Conectando pessoas com tecnologia',
        'card-efficiency': 'Eficiência Digital',
        
        // Services Section
        'services-title': 'Nossos Serviços',
        'services-subtitle': 'Oferecemos serviços especializados com talento global para impulsionar seu crescimento',
        'service-data-title': 'Processamento de Dados',
        'service-data-desc': 'Processamento e análise de grandes volumes de informação com precisão e eficiência.',
        'service-support-title': 'Atendimento ao Cliente',
        'service-support-desc': 'Atendimento ao cliente multicanal com profissionais capacitados em múltiplos idiomas.',
        'service-admin-title': 'Gestão Administrativa',
        'service-admin-desc': 'Gestão administrativa remota para otimizar seus processos internos.',
        'service-sales-title': 'Impulso de Vendas',
        'service-sales-desc': 'Impulsione suas vendas com estratégias personalizadas e atendimento excepcional.',
        'feature-analysis': 'Análise avançada',
        'feature-automation': 'Automação',
        'feature-accuracy': 'Alta precisão',
        'feature-multilingual': 'Multilíngue',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Multicanal',
        'feature-remote': 'Remoto',
        'feature-optimization': 'Otimização',
        'feature-processes': 'Processos',
        'feature-strategies': 'Estratégias',
        'feature-personalized': 'Personalizado',
        'feature-growth': 'Crescimento',
        
        // About Section
        'about-title': 'Sobre Nós',
        'about-desc-1': 'Conhecemos a indústria e suas necessidades específicas, e também as pessoas que as resolvem e as tornam possíveis. Somos a ponte que conecta ambos os mundos.',
        'about-human-title': 'Somos humanos com nomes e rostos',
        'about-human-desc': 'Cada profissional é uma pessoa real com experiência verificada',
        'about-b2b-title': 'Conhecemos B2B e B2T',
        'about-b2b-desc': 'Entendemos tanto as necessidades empresariais quanto do talento',
        'about-tone-title': 'Tom cotidiano sem perder expertise',
        'about-tone-desc': 'Comunicação próxima mantendo o profissionalismo',
        'about-global-title': 'Talento sem fronteiras',
        'about-global-desc': 'Conectamos o mundo através do talento especializado',
        
        // Advantages Section
        'advantages-title': 'Vantagens',
        'advantages-subtitle': 'Por que escolher HumanosTech para seu próximo projeto',
        'adv-global-title': 'Acesso a profissionais especializados de todo o mundo',
        'adv-scalable-title': 'Serviços escaláveis de acordo com suas necessidades específicas',
        'adv-payment-title': 'Pagamento por uso sem compromissos de longo prazo',
        'adv-quality-title': 'Profissionais altamente qualificados e processos otimizados',
        'adv-tools-title': 'Acesso a ferramentas premium sem investimento adicional',
        'adv-metrics-title': 'Medições claras de desempenho e melhoria contínua',
        
        // Process Section
        'process-title': 'Processo',
        'process-subtitle': 'Como trabalhamos com você passo a passo',
        'step-1-title': 'Avaliamos seus requisitos específicos',
        'step-1-desc': 'Analisamos em detalhes suas necessidades e objetivos para projetar a solução perfeita',
        'step-2-title': 'Conectamos com os profissionais ideais',
        'step-2-desc': 'Selecionamos o talento mais adequado de acordo com sua indústria e requisitos específicos',
        'step-3-title': 'Executamos a solução de forma eficiente',
        'step-3-desc': 'Implementamos a solução com metodologias comprovadas e comunicação constante',
        'step-4-title': 'Monitoramos e otimizamos os resultados',
        'step-4-desc': 'Acompanhamento contínuo para garantir qualidade e otimizar o desempenho',
        
        // Talent Section
        'talent-title': 'Junte-se à nossa equipe global',
        'talent-desc': 'Faça parte de uma rede de profissionais especializados que trabalham com empresas líderes em todo o mundo. Desenvolva sua carreira sem limites geográficos.',
        'benefit-projects': 'Projetos internacionais',
        'benefit-flexibility': 'Flexibilidade de horário',
        'benefit-growth': 'Crescimento profissional',
        'benefit-remote': 'Trabalho remoto',
        'btn-join-talent': 'Junte-se como talento',
        
        // Contact Section
        'contact-title': 'Agende uma demo gratuita',
        'contact-desc': 'Descubra como podemos ajudá-lo a crescer. Agende uma demo personalizada e veja nossas soluções em ação.',
        'contact-fast': 'Resposta em menos de 24h',
        'contact-personalized': 'Demo personalizada',
        'contact-consultation': 'Consultoria gratuita',
        'form-name': 'Nome completo',
        'form-email': 'Email corporativo',
        'form-company': 'Empresa',
        'form-service': 'Serviço de interesse',
        'form-service-placeholder': 'Selecione um serviço',
        'form-service-data': 'Processamento de Dados',
        'form-service-support': 'Atendimento ao Cliente',
        'form-service-admin': 'Gestão Administrativa',
        'form-service-sales': 'Impulso de Vendas',
        'form-message': 'Mensagem (opcional)',
        'form-submit': 'Agendar Demo',
        
        // Footer
        'footer-desc': 'Conectando o potencial humano com a eficiência digital',
        'footer-services': 'Serviços',
        'footer-data': 'Processamento de Dados',
        'footer-support': 'Atendimento ao Cliente',
        'footer-admin': 'Gestão Administrativa',
        'footer-sales': 'Impulso de Vendas',
        'footer-company': 'Empresa',
        'footer-about': 'Sobre Nós',
        'footer-careers': 'Carreiras',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Contato',
        'footer-legal': 'Legal',
        'footer-privacy': 'Política de Privacidade',
        'footer-terms': 'Termos de Serviço',
        'footer-cookies': 'Cookies',
        'footer-rights': 'Todos os direitos reservados.',

        // Data Processing Page
        'data-processing-title': 'Processamento de Dados - HumanosTech',
        'data-processing-meta-desc': 'Serviços de processamento e análise de grandes volumes de informação com precisão e eficiência.',
        'data-processing-hero-title': 'Processamento de Dados',
        'data-processing-hero-subtitle': 'Transformamos seus dados em informações valiosas para a tomada de decisões estratégicas.',
        'data-processing-section-title': 'Nossos Serviços de Processamento de Dados',
        'data-processing-section-subtitle': 'Oferecemos soluções abrangentes para a gestão e análise de dados, garantindo precisão e eficiência.',
        'data-processing-service-1-title': 'Coleta e Limpeza de Dados',
        'data-processing-service-1-desc': 'Coletamos, validamos e limpamos grandes volumes de dados para garantir sua qualidade e consistência.',
        'feature-consistency': 'Consistência',
        'data-processing-service-2-title': 'Análise e Visualização',
        'data-processing-service-2-desc': 'Convertemos dados complexos em visualizações claras e relatórios acionáveis para facilitar a tomada de decisões.',
        'feature-insights': 'Insights',
        'data-processing-service-3-title': 'Automação de Processos',
        'data-processing-service-3-desc': 'Implementamos soluções de automação para otimizar seus fluxos de trabalho e reduzir erros manuais.',
        'feature-efficiency': 'Eficiência',
        'data-processing-service-4-title': 'Integração de Sistemas',
        'data-processing-service-4-desc': 'Conectamos seus sistemas e plataformas para uma gestão de dados centralizada e sem interrupções.',
        'feature-integration': 'Integração',
        'feature-seamless': 'Sem interrupções',
        'contact-cta-title': 'Pronto para transformar seus dados?',
        'contact-cta-subtitle': 'Agende uma demo gratuita e descubra como podemos otimizar seus processos de dados.'
    },
    it: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-servicios': 'Servizi',
        'nav-nosotros': 'Chi Siamo',
        'nav-talento': 'Talento',
        'nav-contacto': 'Contatto',
        'cta-demo': 'Prenota una Demo',
        
        // Hero Section
        'hero-title-1': 'Il futuro del supporto',
        'hero-title-2': 'È digitale e umano',
        'hero-subtitle': 'Siamo il punto d\'incontro tra il potenziale umano e l\'efficienza digitale. Colleghiamo aziende di qualsiasi dimensione con talenti globali specializzati.',
        'stat-professionals': 'Professionisti',
        'stat-countries': 'Paesi',
        'stat-support': 'Supporto',
        'btn-services': 'Scopri i nostri servizi',
        'btn-talent': 'Unisciti come talento',
        'card-global': 'Talento Globale',
        'card-connection': 'Collegare persone con tecnologia',
        'card-efficiency': 'Efficienza Digitale',
        
        // Services Section
        'services-title': 'I Nostri Servizi',
        'services-subtitle': 'Offriamo servizi specializzati con talenti globali per guidare la tua crescita',
        'service-data-title': 'Elaborazione Dati',
        'service-data-desc': 'Elaborazione e analisi di grandi volumi di informazioni con precisione ed efficienza.',
        'service-support-title': 'Supporto Clienti',
        'service-support-desc': 'Supporto clienti multicanale con professionisti formati in più lingue.',
        'service-admin-title': 'Gestione Amministrativa',
        'service-admin-desc': 'Gestione amministrativa remota per ottimizzare i tuoi processi interni.',
        'service-sales-title': 'Spinta alle Vendite',
        'service-sales-desc': 'Potenzia le tue vendite con strategie personalizzate e servizio eccezionale.',
        'feature-analysis': 'Analisi avanzata',
        'feature-automation': 'Automazione',
        'feature-accuracy': 'Alta precisione',
        'feature-multilingual': 'Multilingue',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Multicanale',
        'feature-remote': 'Remoto',
        'feature-optimization': 'Ottimizzazione',
        'feature-processes': 'Processi',
        'feature-strategies': 'Strategie',
        'feature-personalized': 'Personalizzato',
        'feature-growth': 'Crescita',
        
        // About Section
        'about-title': 'Chi Siamo',
        'about-desc-1': 'Conosciamo l\'industria e le sue esigenze specifiche, e anche le persone che le risolvono e le rendono possibili. Siamo il ponte che collega entrambi i mondi.',
        'about-human-title': 'Siamo umani con nomi e volti',
        'about-human-desc': 'Ogni professionista è una persona reale con esperienza verificata',
        'about-b2b-title': 'Conosciamo B2B e B2T',
        'about-b2b-desc': 'Comprendiamo sia le esigenze aziendali che quelle del talento',
        'about-tone-title': 'Tono quotidiano senza perdere competenza',
        'about-tone-desc': 'Comunicazione vicina mantenendo la professionalità',
        'about-global-title': 'Talento senza confini',
        'about-global-desc': 'Colleghiamo il mondo attraverso talenti specializzati',
        
        // Advantages Section
        'advantages-title': 'Vantaggi',
        'advantages-subtitle': 'Perché scegliere HumanosTech per il tuo prossimo progetto',
        'adv-global-title': 'Accesso a professionisti specializzati da tutto il mondo',
        'adv-scalable-title': 'Servizi scalabili secondo le tue esigenze specifiche',
        'adv-payment-title': 'Pagamento per uso senza impegni a lungo termine',
        'adv-quality-title': 'Professionisti altamente qualificati e processi ottimizzati',
        'adv-tools-title': 'Accesso a strumenti premium senza investimenti aggiuntivi',
        'adv-metrics-title': 'Misurazioni chiare delle prestazioni e miglioramento continuo',
        
        // Process Section
        'process-title': 'Processo',
        'process-subtitle': 'Come lavoriamo con te passo dopo passo',
        'step-1-title': 'Valutiamo i tuoi requisiti specifici',
        'step-1-desc': 'Analizziamo in dettaglio le tue esigenze e obiettivi per progettare la soluzione perfetta',
        'step-2-title': 'Ci colleghiamo con i professionisti ideali',
        'step-2-desc': 'Selezioniamo il talento più adatto secondo la tua industria e requisiti specifici',
        'step-3-title': 'Eseguiamo la soluzione in modo efficiente',
        'step-3-desc': 'Implementiamo la soluzione con metodologie comprovate e comunicazione costante',
        'step-4-title': 'Monitoriamo e ottimizziamo i risultati',
        'step-4-desc': 'Monitoraggio continuo per assicurare qualità e ottimizzare le prestazioni',
        
        // Talent Section
        'talent-title': 'Unisciti al nostro team globale',
        'talent-desc': 'Fai parte di una rete di professionisti specializzati che lavorano con aziende leader in tutto il mondo. Sviluppa la tua carriera senza limiti geografici.',
        'benefit-projects': 'Progetti internazionali',
        'benefit-flexibility': 'Flessibilità oraria',
        'benefit-growth': 'Crescita professionale',
        'benefit-remote': 'Lavoro remoto',
        'btn-join-talent': 'Unisciti come talento',
        
        // Contact Section
        'contact-title': 'Prenota una demo gratuita',
        'contact-desc': 'Scopri come possiamo aiutarti a crescere. Prenota una demo personalizzata e vedi le nostre soluzioni in azione.',
        'contact-fast': 'Risposta in meno di 24h',
        'contact-personalized': 'Demo personalizzata',
        'contact-consultation': 'Consulenza gratuita',
        'form-name': 'Nome completo',
        'form-email': 'Email aziendale',
        'form-company': 'Azienda',
        'form-service': 'Servizio di interesse',
        'form-service-placeholder': 'Seleziona un servizio',
        'form-service-data': 'Elaborazione Dati',
        'form-service-support': 'Supporto Clienti',
        'form-service-admin': 'Gestione Amministrativa',
        'form-service-sales': 'Spinta alle Vendite',
        'form-message': 'Messaggio (opzionale)',
        'form-submit': 'Prenota Demo',
        
        // Footer
        'footer-desc': 'Collegare il potenziale umano con l\'efficienza digitale',
        'footer-services': 'Servizi',
        'footer-data': 'Elaborazione Dati',
        'footer-support': 'Supporto Clienti',
        'footer-admin': 'Gestione Amministrativa',
        'footer-sales': 'Spinta alle Vendite',
        'footer-company': 'Azienda',
        'footer-about': 'Chi Siamo',
        'footer-careers': 'Carriere',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Contatto',
        'footer-legal': 'Legale',
        'footer-privacy': 'Politica sulla Privacy',
        'footer-terms': 'Termini di Servizio',
        'footer-cookies': 'Cookies',
        'footer-rights': 'Tutti i diritti riservati.',

        // Data Processing Page
        'data-processing-title': 'Elaborazione Dati - HumanosTech',
        'data-processing-meta-desc': 'Servizi per l\'elaborazione e l\'analisi di grandi volumi di informazioni con precisione ed efficienza.',
        'data-processing-hero-title': 'Elaborazione Dati',
        'data-processing-hero-subtitle': 'Trasformiamo i tuoi dati in informazioni preziose per decisioni strategiche.',
        'data-processing-section-title': 'I Nostri Servizi di Elaborazione Dati',
        'data-processing-section-subtitle': 'Offriamo soluzioni complete per la gestione e l\'analisi dei dati, garantendo precisione ed efficienza.',
        'data-processing-service-1-title': 'Raccolta e Pulizia Dati',
        'data-processing-service-1-desc': 'Raccogliamo, convalidiamo e puliamo grandi volumi di dati per garantirne la qualità e la coerenza.',
        'feature-consistency': 'Coerenza',
        'data-processing-service-2-title': 'Analisi e Visualizzazione',
        'data-processing-service-2-desc': 'Convertiamo dati complessi in visualizzazioni chiare e report utilizzabili per facilitare il processo decisionale.',
        'feature-insights': 'Insights',
        'data-processing-service-3-title': 'Automazione dei Processi',
        'data-processing-service-3-desc': 'Implementiamo soluzioni di automazione per ottimizzare i tuoi flussi di lavoro e ridurre gli errori manuali.',
        'feature-efficiency': 'Efficienza',
        'data-processing-service-4-title': 'Integrazione di Sistemi',
        'data-processing-service-4-desc': 'Colleghiamo i tuoi sistemi e piattaforme per una gestione dei dati centralizzata e senza interruzioni.',
        'feature-integration': 'Integrazione',
        'feature-seamless': 'Senza interruzioni',
        'contact-cta-title': 'Pronto a trasformare i tuoi dati?',
        'contact-cta-subtitle': 'Prenota una demo gratuita e scopri come possiamo ottimizzare i tuoi processi di dati.'
    },
    de: {
        // Navigation
        'nav-inicio': 'Startseite',
        'nav-servicios': 'Dienstleistungen',
        'nav-nosotros': 'Über uns',
        'nav-talento': 'Talent',
        'nav-contacto': 'Kontakt',
        'cta-demo': 'Demo buchen',
        
        // Hero Section
        'hero-title-1': 'Die Zukunft des Supports',
        'hero-title-2': 'Ist digital und menschlich',
        'hero-subtitle': 'Wir sind der Treffpunkt zwischen menschlichem Potenzial und digitaler Effizienz. Wir verbinden Unternehmen jeder Größe mit spezialisierten globalen Talenten.',
        'stat-professionals': 'Fachkräfte',
        'stat-countries': 'Länder',
        'stat-support': 'Support',
        'btn-services': 'Entdecken Sie unsere Dienstleistungen',
        'btn-talent': 'Als Talent beitreten',
        'card-global': 'Globales Talent',
        'card-connection': 'Menschen mit Technologie verbinden',
        'card-efficiency': 'Digitale Effizienz',
        
        // Services Section
        'services-title': 'Unsere Dienstleistungen',
        'services-subtitle': 'Wir bieten spezialisierte Dienstleistungen mit globalen Talenten, um Ihr Wachstum voranzutreiben',
        'service-data-title': 'Datenverarbeitung',
        'service-data-desc': 'Verarbeitung und Analyse großer Informationsmengen mit Präzision und Effizienz.',
        'service-support-title': 'Kundensupport',
        'service-support-desc': 'Mehrkanaliger Kundensupport mit in mehreren Sprachen ausgebildeten Fachkräften.',
        'service-admin-title': 'Verwaltungsmanagement',
        'service-admin-desc': 'Remote-Verwaltungsmanagement zur Optimierung Ihrer internen Prozesse.',
        'service-sales-title': 'Verkaufsförderung',
        'service-sales-desc': 'Steigern Sie Ihre Verkäufe mit personalisierten Strategien und außergewöhnlichem Service.',
        'feature-analysis': 'Erweiterte Analyse',
        'feature-automation': 'Automatisierung',
        'feature-accuracy': 'Hohe Präzision',
        'feature-multilingual': 'Mehrsprachig',
        'feature-24-7': '24/7',
        'feature-multichannel': 'Mehrkanal',
        'feature-remote': 'Remote',
        'feature-optimization': 'Optimierung',
        'feature-processes': 'Prozesse',
        'feature-strategies': 'Strategien',
        'feature-personalized': 'Personalisiert',
        'feature-growth': 'Wachstum',
        
        // About Section
        'about-title': 'Über uns',
        'about-desc-1': 'Wir kennen die Branche und ihre spezifischen Bedürfnisse sowie die Menschen, die sie lösen und möglich machen. Wir sind die Brücke, die beide Welten verbindet.',
        'about-human-title': 'Wir sind Menschen mit Namen und Gesichtern',
        'about-human-desc': 'Jeder Fachmann ist eine echte Person mit verifizierter Erfahrung',
        'about-b2b-title': 'Wir kennen B2B und B2T',
        'about-b2b-desc': 'Wir verstehen sowohl Geschäfts- als auch Talentbedürfnisse',
        'about-tone-title': 'Alltäglicher Ton ohne Verlust der Expertise',
        'about-tone-desc': 'Nahe Kommunikation unter Beibehaltung der Professionalität',
        'about-global-title': 'Talent ohne Grenzen',
        'about-global-desc': 'Wir verbinden die Welt durch spezialisierte Talente',
        
        // Advantages Section
        'advantages-title': 'Vorteile',
        'advantages-subtitle': 'Warum HumanosTech für Ihr nächstes Projekt wählen',
        'adv-global-title': 'Zugang zu spezialisierten Fachkräften aus der ganzen Welt',
        'adv-scalable-title': 'Skalierbare Dienstleistungen nach Ihren spezifischen Bedürfnissen',
        'adv-payment-title': 'Nutzungsbasierte Zahlung ohne langfristige Verpflichtungen',
        'adv-quality-title': 'Hochqualifizierte Fachkräfte und optimierte Prozesse',
        'adv-tools-title': 'Zugang zu Premium-Tools ohne zusätzliche Investition',
        'adv-metrics-title': 'Klare Leistungsmessungen und kontinuierliche Verbesserung',
        
        // Process Section
        'process-title': 'Prozess',
        'process-subtitle': 'Wie wir Schritt für Schritt mit Ihnen arbeiten',
        'step-1-title': 'Wir bewerten Ihre spezifischen Anforderungen',
        'step-1-desc': 'Wir analysieren Ihre Bedürfnisse und Ziele im Detail, um die perfekte Lösung zu entwerfen',
        'step-2-title': 'Wir verbinden uns mit den idealen Fachkräften',
        'step-2-desc': 'Wir wählen das am besten geeignete Talent entsprechend Ihrer Branche und spezifischen Anforderungen aus',
        'step-3-title': 'Wir führen die Lösung effizient aus',
        'step-3-desc': 'Wir implementieren die Lösung mit bewährten Methoden und konstanter Kommunikation',
        'step-4-title': 'Wir überwachen und optimieren die Ergebnisse',
        'step-4-desc': 'Kontinuierliche Überwachung zur Qualitätssicherung und Leistungsoptimierung',
        
        // Talent Section
        'talent-title': 'Treten Sie unserem globalen Team bei',
        'talent-desc': 'Werden Sie Teil eines Netzwerks spezialisierter Fachkräfte, die mit führenden Unternehmen weltweit arbeiten. Entwickeln Sie Ihre Karriere ohne geografische Grenzen.',
        'benefit-projects': 'Internationale Projekte',
        'benefit-flexibility': 'Zeitliche Flexibilität',
        'benefit-growth': 'Berufliches Wachstum',
        'benefit-remote': 'Remote-Arbeit',
        'btn-join-talent': 'Als Talent beitreten',
        
        // Contact Section
        'contact-title': 'Buchen Sie eine kostenlose Demo',
        'contact-desc': 'Entdecken Sie, wie wir Ihnen beim Wachstum helfen können. Buchen Sie eine personalisierte Demo und sehen Sie unsere Lösungen in Aktion.',
        'contact-fast': 'Antwort in weniger als 24h',
        'contact-personalized': 'Personalisierte Demo',
        'contact-consultation': 'Kostenlose Beratung',
        'form-name': 'Vollständiger Name',
        'form-email': 'Unternehmens-E-Mail',
        'form-company': 'Unternehmen',
        'form-service': 'Interessanter Service',
        'form-service-placeholder': 'Wählen Sie einen Service',
        'form-service-data': 'Datenverarbeitung',
        'form-service-support': 'Kundensupport',
        'form-service-admin': 'Verwaltungsmanagement',
        'form-service-sales': 'Verkaufsförderung',
        'form-message': 'Nachricht (optional)',
        'form-submit': 'Demo buchen',
        
        // Footer
        'footer-desc': 'Menschliches Potenzial mit digitaler Effizienz verbinden',
        'footer-services': 'Dienstleistungen',
        'footer-data': 'Datenverarbeitung',
        'footer-support': 'Kundensupport',
        'footer-admin': 'Verwaltungsmanagement',
        'footer-sales': 'Verkaufsförderung',
        'footer-company': 'Unternehmen',
        'footer-about': 'Über uns',
        'footer-careers': 'Karrieren',
        'footer-blog': 'Blog',
        'footer-contact-link': 'Kontakt',
        'footer-legal': 'Rechtliches',
        'footer-privacy': 'Datenschutzrichtlinie',
        'footer-terms': 'Nutzungsbedingungen',
        'footer-cookies': 'Cookies',
        'footer-rights': 'Alle Rechte vorbehalten.',

        // Data Processing Page
        'data-processing-title': 'Datenverarbeitung - HumanosTech',
        'data-processing-meta-desc': 'Dienstleistungen zur Verarbeitung und Analyse großer Informationsmengen mit Präzision und Effizienz.',
        'data-processing-hero-title': 'Datenverarbeitung',
        'data-processing-hero-subtitle': 'Wir verwandeln Ihre Daten in wertvolle Informationen für strategische Entscheidungen.',
        'data-processing-section-title': 'Unsere Datenverarbeitungsdienste',
        'data-processing-section-subtitle': 'Wir bieten umfassende Lösungen für Datenmanagement und -analyse, die Genauigkeit und Effizienz gewährleisten.',
        'data-processing-service-1-title': 'Datenerfassung und -bereinigung',
        'data-processing-service-1-desc': 'Wir sammeln, validieren und bereinigen große Datenmengen, um deren Qualität und Konsistenz sicherzustellen.',
        'feature-consistency': 'Konsistenz',
        'data-processing-service-2-title': 'Analyse und Visualisierung',
        'data-processing-service-2-desc': 'Wir wandeln komplexe Daten in klare Visualisierungen und umsetzbare Berichte um, um die Entscheidungsfindung zu erleichtern.',
        'feature-insights': 'Einblicke',
        'data-processing-service-3-title': 'Prozessautomatisierung',
        'data-processing-service-3-desc': 'Wir implementieren Automatisierungslösungen, um Ihre Arbeitsabläufe zu optimieren und manuelle Fehler zu reduzieren.',
        'feature-efficiency': 'Effizienz',
        'data-processing-service-4-title': 'Systemintegration',
        'data-processing-service-4-desc': 'Wir verbinden Ihre Systeme und Plattformen für ein zentralisiertes und nahtloses Datenmanagement.',
        'feature-integration': 'Integration',
        'feature-seamless': 'Nahtlos',
        'contact-cta-title': 'Bereit, Ihre Daten zu transformieren?',
        'contact-cta-subtitle': 'Buchen Sie eine kostenlose Demo und entdecken Sie, wie wir Ihre Datenprozesse optimieren können.'
    }
};

// Current language
let currentLanguage = 'es';

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langButtons = document.querySelectorAll('.language-selector .lang-btn');
const demoForm = document.getElementById('demo-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeScrollAnimations();
    initializeForm();
    initializeScrollEffects();
    initializeMobileMenu();
});

// Language Management
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferred-language');
    const browserLanguage = navigator.language.split('-')[0];

    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else if (translations[browserLanguage]) {
        currentLanguage = browserLanguage;
    } else {
        currentLanguage = 'es';
    }

    updateLanguage(currentLanguage);
    updateLanguageButtons();
    updateActiveLanguageButton(currentLanguage); 

    // Adiciona eventos aos botões
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (lang && translations[lang]) {
                updateLanguage(lang);
                updateLanguageButtons();
                updateActiveLanguageButton(lang);
                localStorage.setItem('preferred-language', lang);
            }
        });
    });
}

function updateActiveLanguageButton(selectedLang) {
    const mainButton = document.querySelector('.language-selector > .lang-btn.active');
    const dropdownButtons = document.querySelectorAll('.lang-dropdown .lang-btn');

    if (mainButton) {
        mainButton.textContent = selectedLang.toUpperCase();
        mainButton.setAttribute('data-lang', selectedLang);
    }

    dropdownButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.style.display = (lang === selectedLang) ? 'none' : 'inline-block';
    });
}



function updateLanguage(language) {
    currentLanguage = language;
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
    
    document.documentElement.lang = language;
}

function updateLanguageButtons() {
    const dropdownButtons = document.querySelectorAll('.lang-dropdown .lang-btn');
    const mainButton = document.querySelector('.language-selector > .lang-btn');

    dropdownButtons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        button.classList.toggle('active', lang === currentLanguage);
    });

    if (mainButton) {
        mainButton.textContent = currentLanguage.toUpperCase();
        mainButton.setAttribute('data-lang', currentLanguage);
    }
}


// Navigation Management
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Mobile Menu Management
function initializeMobileMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Parallax effect for hero background
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-card, .advantage-card, .process-step, .talent-card, .feature-item');
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add slide animations to specific sections
    const leftSlideElements = document.querySelectorAll('.about-text, .talent-text, .contact-info');
    leftSlideElements.forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });
    
    const rightSlideElements = document.querySelectorAll('.about-visual, .talent-visual, .contact-form');
    rightSlideElements.forEach(el => {
        el.classList.add('slide-in-right');
        observer.observe(el);
    });
}

// Form Management
function initializeForm() {
    if (!demoForm) return;
    
    // Form validation and submission
    demoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(demoForm);
        const submitButton = demoForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        try {
            const response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showNotification('✅ Demo agendada com sucesso! Entraremos em contato em breve.', 'success');
                demoForm.reset();
            } else {
                showNotification('❌ Ocorreu um erro: ' + (result.message || 'Tente novamente mais tarde.'), 'error');
            }

        } catch (error) {
            showNotification('❌ Erro inesperado. Verifique sua conexão e tente novamente.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });

    
    // Enhanced form interactions
    const formInputs = demoForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
            if (input.value.trim() !== '') {
                input.parentElement.classList.add('filled');
            } else {
                input.parentElement.classList.remove('filled');
            }
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            validateField(input);
        });
    });
}

function validateForm(data) {
    let isValid = true;
    const errors = [];
    
    // Required fields validation
    const requiredFields = ['name', 'email', 'company', 'service'];
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} is required`);
            isValid = false;
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        errors.push('Invalid email format');
        isValid = false;
    }
    
    if (!isValid) {
        showNotification(getTranslation('form-validation-error') || 'Por favor, completa todos los campos requeridos.', 'error');
    }
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.name;
    
    // Remove previous error states
    input.classList.remove('error');
    
    // Validate based on field type
    switch (fieldName) {
        case 'email':
            if (value && !isValidEmail(value)) {
                input.classList.add('error');
            }
            break;
        case 'name':
        case 'company':
            if (value.length > 0 && value.length < 2) {
                input.classList.add('error');
            }
            break;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function simulateFormSubmission(data) {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve();
        }, 2000);
    });
}

// Utility Functions
function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key];
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #2196f3, #1976d2)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
}, 100));

// Add loading states and error handling for better UX
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle offline/online states
window.addEventListener('online', () => {
    showNotification(getTranslation('connection-restored') || 'Conexión restaurada', 'success');
});

window.addEventListener('offline', () => {
    showNotification(getTranslation('connection-lost') || 'Conexión perdida. Algunas funciones pueden no estar disponibles.', 'error');
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Accessibility improvements
function initializeAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#inicio';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateLanguage,
        validateForm,
        isValidEmail,
        debounce,
        throttle
    };
}




// Customer Support Page Translations
Object.assign(translations.es, {
    'customer-support-title': 'Atención al Cliente - HumanosTech',
    'customer-support-meta-desc': 'Servicios de atención al cliente multicanal con profesionales capacitados en múltiples idiomas.',
    'customer-support-hero-title': 'Atención al Cliente',
    'customer-support-hero-subtitle': 'Ofrecemos soporte excepcional para tus clientes, mejorando su satisfacción y lealtad.',
    'customer-support-section-title': 'Nuestros Servicios de Atención al Cliente',
    'customer-support-section-subtitle': 'Profesionales capacitados y soluciones multicanal para una experiencia de cliente superior.',
    'customer-support-service-1-title': 'Soporte Multicanal',
    'customer-support-service-1-desc': 'Atendemos a tus clientes a través de diversos canales: teléfono, email, chat y redes sociales.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Multicanal',
    'customer-support-service-2-title': 'Atención Personalizada',
    'customer-support-service-2-desc': 'Cada interacción es tratada con empatía y soluciones adaptadas a las necesidades individuales.',
    'feature-personalized': 'Personalizado',
    'feature-empathy': 'Empatía',
    'customer-support-service-3-title': 'Soporte Multilingüe',
    'customer-support-service-3-desc': 'Profesionales que dominan múltiples idiomas para atender a una base de clientes global.',
    'feature-multilingual': 'Multiidioma',
    'feature-global': 'Global',
    'customer-support-service-4-title': 'Gestión de Quejas y Feedback',
    'customer-support-service-4-desc': 'Manejamos quejas y recopilamos feedback para mejorar continuamente tus productos y servicios.',
    'feature-feedback': 'Feedback',
    'feature-improvement': 'Mejora continua',
    'contact-cta-title': '¿Listo para elevar tu atención al cliente?', 
    'contact-cta-subtitle': 'Agenda una demo gratuita y descubre cómo podemos mejorar la experiencia de tus clientes.'
});

Object.assign(translations.en, {
    'customer-support-title': 'Customer Support - HumanosTech',
    'customer-support-meta-desc': 'Multichannel customer support services with trained professionals in multiple languages.',
    'customer-support-hero-title': 'Customer Support',
    'customer-support-hero-subtitle': 'We offer exceptional support for your customers, improving their satisfaction and loyalty.',
    'customer-support-section-title': 'Our Customer Support Services',
    'customer-support-section-subtitle': 'Trained professionals and multichannel solutions for a superior customer experience.',
    'customer-support-service-1-title': 'Multichannel Support',
    'customer-support-service-1-desc': 'We serve your customers through various channels: phone, email, chat, and social media.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Multichannel',
    'customer-support-service-2-title': 'Personalized Attention',
    'customer-support-service-2-desc': 'Each interaction is treated with empathy and solutions adapted to individual needs.',
    'feature-personalized': 'Personalized',
    'feature-empathy': 'Empathy',
    'customer-support-service-3-title': 'Multilingual Support',
    'customer-support-service-3-desc': 'Professionals fluent in multiple languages to serve a global customer base.',
    'feature-multilingual': 'Multilingual',
    'feature-global': 'Global',
    'customer-support-service-4-title': 'Complaint and Feedback Management',
    'customer-support-service-4-desc': 'We handle complaints and collect feedback to continuously improve your products and services.',
    'feature-feedback': 'Feedback',
    'feature-improvement': 'Continuous improvement',
    'contact-cta-title': 'Ready to elevate your customer support?', 
    'contact-cta-subtitle': 'Schedule a free demo and discover how we can improve your customers\' experience.'
});

Object.assign(translations.fr, {
    'customer-support-title': 'Support Client - HumanosTech',
    'customer-support-meta-desc': 'Services de support client multicanal avec des professionnels formés en plusieurs langues.',
    'customer-support-hero-title': 'Support Client',
    'customer-support-hero-subtitle': 'Nous offrons un support exceptionnel pour vos clients, améliorant leur satisfaction et leur fidélité.',
    'customer-support-section-title': 'Nos Services de Support Client',
    'customer-support-section-subtitle': 'Professionnels formés et solutions multicanal pour une expérience client supérieure.',
    'customer-support-service-1-title': 'Support Multicanal',
    'customer-support-service-1-desc': 'Nous servons vos clients à travers divers canaux: téléphone, email, chat et réseaux sociaux.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Multicanal',
    'customer-support-service-2-title': 'Attention Personnalisée',
    'customer-support-service-2-desc': 'Chaque interaction est traitée avec empathie et des solutions adaptées aux besoins individuels.',
    'feature-personalized': 'Personnalisé',
    'feature-empathy': 'Empatía',
    'customer-support-service-3-title': 'Support Multilingue',
    'customer-support-service-3-desc': 'Professionnels maîtrisant plusieurs langues pour servir une clientèle mondiale.',
    'feature-multilingual': 'Multilingue',
    'feature-global': 'Global',
    'customer-support-service-4-title': 'Gestion des Plaintes et Retours',
    'customer-support-service-4-desc': 'Nous gérons les plaintes et recueillons les retours pour améliorer continuellement vos produits et services.',
    'feature-feedback': 'Retours',
    'feature-improvement': 'Amélioration continue',
    'contact-cta-title': 'Prêt à améliorer votre support client?', 
    'contact-cta-subtitle': 'Planifiez une démo gratuite et découvrez comment nous pouvons améliorer l\'expérience de vos clients.'
});

Object.assign(translations.pt, {
    'customer-support-title': 'Atendimento ao Cliente - HumanosTech',
    'customer-support-meta-desc': 'Serviços de atendimento ao cliente multicanal com profissionais capacitados em múltiplos idiomas.',
    'customer-support-hero-title': 'Atendimento ao Cliente',
    'customer-support-hero-subtitle': 'Oferecemos suporte excepcional para seus clientes, melhorando sua satisfação e lealdade.',
    'customer-support-section-title': 'Nossos Serviços de Atendimento ao Cliente',
    'customer-support-section-subtitle': 'Profissionais capacitados e soluções multicanal para uma experiência de cliente superior.',
    'customer-support-service-1-title': 'Suporte Multicanal',
    'customer-support-service-1-desc': 'Atendemos seus clientes através de diversos canais: telefone, e-mail, chat e redes sociais.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Multicanal',
    'customer-support-service-2-title': 'Atendimento Personalizado',
    'customer-support-service-2-desc': 'Cada interação é tratada com empatia e soluções adaptadas às necessidades individuais.',
    'feature-personalized': 'Personalizado',
    'feature-empathy': 'Empatia',
    'customer-support-service-3-title': 'Suporte Multilíngue',
    'customer-support-service-3-desc': 'Profissionais que dominam múltiplos idiomas para atender a uma base de clientes global.',
    'feature-multilingual': 'Multilíngue',
    'feature-global': 'Global',
    'customer-support-service-4-title': 'Gestão de Reclamações e Feedback',
    'customer-support-service-4-desc': 'Gerenciamos reclamações e coletamos feedback para melhorar continuamente seus produtos e serviços.',
    'feature-feedback': 'Feedback',
    'feature-improvement': 'Melhoria contínua',
    'contact-cta-title': 'Pronto para elevar seu atendimento ao cliente?', 
    'contact-cta-subtitle': 'Agende uma demo gratuita e descubra como podemos melhorar a experiência de seus clientes.'
});

Object.assign(translations.it, {
    'customer-support-title': 'Supporto Clienti - HumanosTech',
    'customer-support-meta-desc': 'Servizi di supporto clienti multicanale con professionisti formati in più lingue.',
    'customer-support-hero-title': 'Supporto Clienti',
    'customer-support-hero-subtitle': 'Offriamo un supporto eccezionale per i tuoi clienti, migliorando la loro soddisfazione e fedeltà.',
    'customer-support-section-title': 'I Nostri Servizi di Supporto Clienti',
    'customer-support-section-subtitle': 'Professionisti formati e soluzioni multicanale per un\'esperienza cliente superiore.',
    'customer-support-service-1-title': 'Supporto Multicanale',
    'customer-support-service-1-desc': 'Serviamo i tuoi clienti attraverso vari canali: telefono, email, chat e social media.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Multicanale',
    'customer-support-service-2-title': 'Attenzione Personalizzata',
    'customer-support-service-2-desc': 'Ogni interazione è trattata con empatia e soluzioni adattate alle esigenze individuali.',
    'feature-personalized': 'Personalizzato',
    'feature-empathy': 'Empatia',
    'customer-support-service-3-title': 'Supporto Multilingue',
    'customer-support-service-3-desc': 'Professionisti che padroneggiano più lingue per servire una base di clienti globale.',
    'feature-multilingual': 'Multilingue',
    'feature-global': 'Globale',
    'customer-support-service-4-title': 'Gestione Reclami e Feedback',
    'customer-support-service-4-desc': 'Gestiamo reclami e raccogliamo feedback per migliorare continuamente i tuoi prodotti e servizi.',
    'feature-feedback': 'Feedback',
    'feature-improvement': 'Miglioramento continuo',
    'contact-cta-title': 'Pronto a migliorare il tuo supporto clienti?', 
    'contact-cta-subtitle': 'Prenota una demo gratuita e scopri come possiamo migliorare l\'esperienza dei tuoi clienti.'
});

Object.assign(translations.de, {
    'customer-support-title': 'Kundensupport - HumanosTech',
    'customer-support-meta-desc': 'Mehrkanalige Kundensupport-Dienste mit geschulten Fachkräften in mehreren Sprachen.',
    'customer-support-hero-title': 'Kundensupport',
    'customer-support-hero-subtitle': 'Wir bieten außergewöhnlichen Support für Ihre Kunden, um deren Zufriedenheit und Loyalität zu verbessern.',
    'customer-support-section-title': 'Unsere Kundensupport-Dienste',
    'customer-support-section-subtitle': 'Geschulte Fachkräfte und Mehrkanallösungen für ein überragendes Kundenerlebnis.',
    'customer-support-service-1-title': 'Mehrkanal-Support',
    'customer-support-service-1-desc': 'Wir betreuen Ihre Kunden über verschiedene Kanäle: Telefon, E-Mail, Chat und soziale Medien.',
    'feature-24-7': '24/7',
    'feature-multichannel': 'Mehrkanal',
    'customer-support-service-2-title': 'Personalisierte Betreuung',
    'customer-support-service-2-desc': 'Jede Interaktion wird mit Empathie und an die individuellen Bedürfnisse angepassten Lösungen behandelt.',
    'feature-personalized': 'Personalisiert',
    'feature-empathy': 'Empathie',
    'customer-support-service-3-title': 'Mehrsprachiger Support',
    'customer-support-service-3-desc': 'Fachkräfte, die mehrere Sprachen beherrschen, um einen globalen Kundenstamm zu bedienen.',
    'feature-multilingual': 'Mehrsprachig',
    'feature-global': 'Global',
    'customer-support-service-4-title': 'Beschwerde- und Feedback-Management',
    'customer-support-service-4-desc': 'Wir bearbeiten Beschwerden und sammeln Feedback, um Ihre Produkte und Dienstleistungen kontinuierlich zu verbessern.',
    'feature-feedback': 'Feedback',
    'feature-improvement': 'Kontinuierliche Verbesserung',
    'contact-cta-title': 'Bereit, Ihren Kundensupport zu verbessern?', 
    'contact-cta-subtitle': 'Buchen Sie eine kostenlose Demo und entdecken Sie, wie wir das Kundenerlebnis verbessern können.'
});




// Administrative Management Page Translations
Object.assign(translations.es, {
    'admin-management-title': 'Gestión Administrativa - HumanosTech',
    'admin-management-meta-desc': 'Servicios de gestión administrativa remota para optimizar tus procesos internos y reducir costos.',
    'admin-management-hero-title': 'Gestión Administrativa',
    'admin-management-hero-subtitle': 'Optimiza tus operaciones con nuestros servicios de gestión administrativa remota, eficientes y confiables.',
    'admin-management-section-title': 'Nuestros Servicios de Gestión Administrativa',
    'admin-management-section-subtitle': 'Ofrecemos soluciones personalizadas para la gestión de tareas administrativas, liberando tu tiempo para lo que realmente importa.',
    'admin-management-service-1-title': 'Organización de Documentos',
    'admin-management-service-1-desc': 'Digitalizamos y organizamos tus documentos para un acceso rápido y seguro, eliminando el desorden físico.',
    'feature-digitalization': 'Digitalización',
    'feature-security': 'Seguridad',
    'admin-management-service-2-title': 'Gestión de Agendas y Viajes',
    'admin-management-service-2-desc': 'Coordinamos tus citas, reuniones y viajes de negocios, asegurando una logística impecable.',
    'feature-coordination': 'Coordinación',
    'feature-logistics': 'Logística',
    'admin-management-service-3-title': 'Soporte Contable Básico',
    'admin-management-service-3-desc': 'Asistencia en la preparación de facturas, seguimiento de pagos y conciliaciones bancarias.',
    'feature-invoicing': 'Facturación',
    'feature-reconciliation': 'Conciliación',
    'admin-management-service-4-title': 'Coordinación de Proyectos',
    'admin-management-service-4-desc': 'Apoyo en la planificación, ejecución y seguimiento de proyectos, asegurando el cumplimiento de plazos.',
    'feature-planning': 'Planificación',
    'feature-tracking': 'Seguimiento',
    'contact-cta-title': '¿Listo para optimizar tu gestión administrativa?',
    'contact-cta-subtitle': 'Agenda una demo gratuita y descubre cómo podemos simplificar tus tareas diarias.'
});

Object.assign(translations.en, {
    'admin-management-title': 'Administrative Management - HumanosTech',
    'admin-management-meta-desc': 'Remote administrative management services to optimize your internal processes and reduce costs.',
    'admin-management-hero-title': 'Administrative Management',
    'admin-management-hero-subtitle': 'Optimize your operations with our efficient and reliable remote administrative management services.',
    'admin-management-section-title': 'Our Administrative Management Services',
    'admin-management-section-subtitle': 'We offer personalized solutions for managing administrative tasks, freeing up your time for what truly matters.',
    'admin-management-service-1-title': 'Document Organization',
    'admin-management-service-1-desc': 'We digitize and organize your documents for quick and secure access, eliminating physical clutter.',
    'feature-digitalization': 'Digitalization',
    'feature-security': 'Security',
    'admin-management-service-2-title': 'Agenda and Travel Management',
    'admin-management-service-2-desc': 'We coordinate your appointments, meetings, and business trips, ensuring impeccable logistics.',
    'feature-coordination': 'Coordination',
    'feature-logistics': 'Logistics',
    'admin-management-service-3-title': 'Basic Accounting Support',
    'admin-management-service-3-desc': 'Assistance in preparing invoices, tracking payments, and bank reconciliations.',
    'feature-invoicing': 'Invoicing',
    'feature-reconciliation': 'Reconciliation',
    'admin-management-service-4-title': 'Project Coordination',
    'admin-management-service-4-desc': 'Support in planning, executing, and monitoring projects, ensuring timely completion.',
    'feature-planning': 'Planning',
    'feature-tracking': 'Tracking',
    'contact-cta-title': 'Ready to optimize your administrative management?',
    'contact-cta-subtitle': 'Schedule a free demo and discover how we can simplify your daily tasks.'
});

Object.assign(translations.fr, {
    'admin-management-title': 'Gestion Administrative - HumanosTech',
    'admin-management-meta-desc': 'Services de gestion administrative à distance pour optimiser vos processus internes et réduire les coûts.',
    'admin-management-hero-title': 'Gestion Administrative',
    'admin-management-hero-subtitle': 'Optimisez vos opérations avec nos services de gestion administrative à distance, efficaces et fiables.',
    'admin-management-section-title': 'Nos Services de Gestion Administrative',
    'admin-management-section-subtitle': 'Nous offrons des solutions personnalisées pour la gestion des tâches administratives, vous libérant du temps pour ce qui compte vraiment.',
    'admin-management-service-1-title': 'Organisation de Documents',
    'admin-management-service-1-desc': 'Nous numérisons et organisons vos documents pour un accès rapide et sécurisé, éliminant l\u0027encombrement physique.',
    'feature-digitalization': 'Numérisation',
    'feature-security': 'Sécurité',
    'admin-management-service-2-title': 'Gestion d\u0027Agendas et de Voyages',
    'admin-management-service-2-desc': 'Nous coordonnons vos rendez-vous, réunions et voyages d\u0027affaires, assurant une logistique impeccable.',
    'feature-coordination': 'Coordination',
    'feature-logistics': 'Logistique',
    'admin-management-service-3-title': 'Support Comptable de Base',
    'admin-management-service-3-desc': 'Assistance dans la préparation des factures, le suivi des paiements et les rapprochements bancaires.',
    'feature-invoicing': 'Facturation',
    'feature-reconciliation': 'Rapprochement',
    'admin-management-service-4-title': 'Coordination de Projets',
    'admin-management-service-4-desc': 'Soutien à la planification, à l\u0027exécution et au suivi des projets, assurant le respect des délais.',
    'feature-planning': 'Planification',
    'feature-tracking': 'Suivi',
    'contact-cta-title': 'Prêt à optimiser votre gestion administrative?',
    'contact-cta-subtitle': 'Planifiez une démo gratuite et découvrez comment nous pouvons simplifier vos tâches quotidiennes.'
});

Object.assign(translations.pt, {
    'admin-management-title': 'Gestão Administrativa - HumanosTech',
    'admin-management-meta-desc': 'Serviços de gestão administrativa remota para otimizar seus processos internos e reduzir custos.',
    'admin-management-hero-title': 'Gestão Administrativa',
    'admin-management-hero-subtitle': 'Otimize suas operações com nossos serviços de gestão administrativa remota, eficientes e confiáveis.',
    'admin-management-section-title': 'Nossos Serviços de Gestão Administrativa',
    'admin-management-section-subtitle': 'Oferecemos soluções personalizadas para a gestão de tarefas administrativas, liberando seu tempo para o que realmente importa.',
    'admin-management-service-1-title': 'Organização de Documentos',
    'admin-management-service-1-desc': 'Digitalizamos e organizamos seus documentos para um acesso rápido e seguro, eliminando a desordem física.',
    'feature-digitalization': 'Digitalização',
    'feature-security': 'Segurança',
    'admin-management-service-2-title': 'Gestão de Agendas e Viagens',
    'admin-management-service-2-desc': 'Coordenamos seus compromissos, reuniões e viagens de negócios, garantindo uma logística impecável.',
    'feature-coordination': 'Coordenação',
    'feature-logistics': 'Logística',
    'admin-management-service-3-title': 'Suporte Contábil Básico',
    'admin-management-service-3-desc': 'Assistência na preparação de faturas, acompanhamento de pagamentos e conciliações bancárias.',
    'feature-invoicing': 'Faturamento',
    'feature-reconciliation': 'Conciliação',
    'admin-management-service-4-title': 'Coordenação de Projetos',
    'admin-management-service-4-desc': 'Apoio no planejamento, execução e acompanhamento de projetos, garantindo o cumprimento de prazos.',
    'feature-planning': 'Planejamento',
    'feature-tracking': 'Acompanhamento',
    'contact-cta-title': 'Pronto para otimizar sua gestão administrativa?',
    'contact-cta-subtitle': 'Agende uma demo gratuita e descubra como podemos simplificar suas tarefas diárias.'
});

Object.assign(translations.it, {
    'admin-management-title': 'Gestione Amministrativa - HumanosTech',
    'admin-management-meta-desc': 'Servizi di gestione amministrativa remota per ottimizzare i tuoi processi interni e ridurre i costi.',
    'admin-management-hero-title': 'Gestione Amministrativa',
    'admin-management-hero-subtitle': 'Ottimizza le tue operazioni con i nostri servizi di gestione amministrativa remota, efficienti e affidabili.',
    'admin-management-section-title': 'I Nostri Servizi di Gestione Amministrativa',
    'admin-management-section-subtitle': 'Offriamo soluzioni personalizzate per la gestione delle attività amministrative, liberando il tuo tempo per ciò che conta davvero.',
    'admin-management-service-1-title': 'Organizzazione Documenti',
    'admin-management-service-1-desc': 'Digitalizziamo e organizziamo i tuoi documenti per un accesso rapido e sicuro, eliminando il disordine fisico.',
    'feature-digitalization': 'Digitalizzazione',
    'feature-security': 'Sicurezza',
    'admin-management-service-2-title': 'Gestione Agende e Viaggi',
    'admin-management-service-2-desc': 'Coordiniamo i tuoi appuntamenti, riunioni e viaggi di lavoro, garantendo una logistica impeccabile.',
    'feature-coordination': 'Coordinamento',
    'feature-logistics': 'Logistica',
    'admin-management-service-3-title': 'Supporto Contabile di Base',
    'admin-management-service-3-desc': 'Assistenza nella preparazione di fatture, monitoraggio dei pagamenti e riconciliazioni bancarie.',
    'feature-invoicing': 'Fatturazione',
    'feature-reconciliation': 'Riconciliazione',
    'admin-management-service-4-title': 'Coordinamento Progetti',
    'admin-management-service-4-desc': 'Supporto nella pianificazione, esecuzione e monitoraggio dei progetti, garantendo il rispetto delle scadenze.',
    'feature-planning': 'Pianificazione',
    'feature-tracking': 'Monitoraggio',
    'contact-cta-title': 'Pronto a ottimizzare la tua gestione amministrativa?',
    'contact-cta-subtitle': 'Prenota una demo gratuita e scopri come possiamo semplificare le tue attività quotidiane.'
});

Object.assign(translations.de, {
    'admin-management-title': 'Verwaltungsmanagement - HumanosTech',
    'admin-management-meta-desc': 'Remote-Verwaltungsmanagement-Dienste zur Optimierung Ihrer internen Prozesse und Kostensenkung.',
    'admin-management-hero-title': 'Verwaltungsmanagement',
    'admin-management-hero-subtitle': 'Optimieren Sie Ihre Abläufe mit unseren effizienten und zuverlässigen Remote-Verwaltungsmanagement-Diensten.',
    'admin-management-section-title': 'Unsere Verwaltungsmanagement-Dienste',
    'admin-management-section-subtitle': 'Wir bieten personalisierte Lösungen für die Verwaltung administrativer Aufgaben, damit Sie Zeit für das Wesentliche gewinnen.',
    'admin-management-service-1-title': 'Dokumentenorganisation',
    'admin-management-service-1-desc': 'Wir digitalisieren und organisieren Ihre Dokumente für schnellen und sicheren Zugriff, wodurch physische Unordnung beseitigt wird.',
    'feature-digitalization': 'Digitalisierung',
    'feature-security': 'Sicherheit',
    'admin-management-service-2-title': 'Termin- und Reisemanagement',
    'admin-management-service-2-desc': 'Wir koordinieren Ihre Termine, Besprechungen und Geschäftsreisen und sorgen für eine einwandfreie Logistik.',
    'feature-coordination': 'Koordination',
    'feature-logistics': 'Logistik',
    'admin-management-service-3-title': 'Grundlegende Buchhaltungsunterstützung',
    'admin-management-service-3-desc': 'Unterstützung bei der Rechnungserstellung, Zahlungsverfolgung und Bankabstimmungen.',
    'feature-invoicing': 'Rechnungsstellung',
    'feature-reconciliation': 'Abstimmung',
    'admin-management-service-4-title': 'Projektkoordination',
    'admin-management-service-4-desc': 'Unterstützung bei der Planung, Ausführung und Überwachung von Projekten, um die Einhaltung von Fristen zu gewährleisten.',
    'feature-planning': 'Planung',
    'feature-tracking': 'Verfolgung',
    'contact-cta-title': 'Bereit, Ihr Verwaltungsmanagement zu optimieren?',
    'contact-cta-subtitle': 'Buchen Sie eine kostenlose Demo und entdecken Sie, wie wir Ihre täglichen Aufgaben vereinfachen können.'
});




// Sales Boost Page Translations
    Object.assign(translations.es, {
        'sales-boost-title': 'Impulso de Ventas - HumanosTech',
        'sales-boost-meta-desc': 'Servicios especializados para impulsar tus ventas con estrategias personalizadas y atención excepcional.',
        'sales-boost-hero-title': 'Impulso de Ventas',
        'sales-boost-hero-subtitle': 'Potencia tus resultados con estrategias de ventas innovadoras y un equipo dedicado a tu éxito.',
        'sales-boost-section-title': 'Nuestros Servicios de Impulso de Ventas',
        'sales-boost-section-subtitle': 'Diseñamos e implementamos estrategias que maximizan tus oportunidades de venta y fidelizan a tus clientes.',
        'sales-boost-service-1-title': 'Generación de Leads Calificados',
        'sales-boost-service-1-desc': 'Identificamos y atraemos prospectos con alto potencial de conversión para tu negocio.',
        'feature-leads': 'Leads',
        'feature-conversion': 'Conversión',
        'sales-boost-service-2-title': 'Calificación y Nutrición de Leads',
        'sales-boost-service-2-desc': 'Clasificamos y cultivamos tus leads, preparándolos para el cierre de ventas con información relevante.',
        'feature-nurturing': 'Nutrición',
        'feature-qualification': 'Calificación',
        'sales-boost-service-3-title': 'Cierre de Ventas y Post-Venta',
        'sales-boost-service-3-desc': 'Asesoramiento experto en el proceso de cierre y seguimiento post-venta para asegurar la satisfacción del cliente.',
        'feature-closing': 'Cierre',
        'feature-post-sales': 'Post-Venta',
        'sales-boost-service-4-title': 'Optimización de Procesos de Ventas',
        'sales-boost-service-4-desc': 'Analizamos y mejoramos tus embudos de venta para identificar oportunidades y aumentar la eficiencia.',
        'contact-cta-title': '¿Listo para disparar tus ventas?',
        'contact-cta-subtitle': 'Agenda una demo gratuita y descubre cómo podemos transformar tus resultados comerciales.'
    });

    Object.assign(translations.en, {
        'sales-boost-title': 'Sales Boost - HumanosTech',
        'sales-boost-meta-desc': 'Specialized services to boost your sales with personalized strategies and exceptional attention.',
        'sales-boost-hero-title': 'Sales Boost',
        'sales-boost-hero-subtitle': 'Boost your results with innovative sales strategies and a team dedicated to your success.',
        'sales-boost-section-title': 'Our Sales Boost Services',
        'sales-boost-section-subtitle': 'We design and implement strategies that maximize your sales opportunities and retain your customers.',
        'sales-boost-service-1-title': 'Qualified Lead Generation',
        'sales-boost-service-1-desc': 'We identify and attract prospects with high conversion potential for your business.',
        'feature-leads': 'Leads',
        'feature-conversion': 'Conversion',
        'sales-boost-service-2-title': 'Lead Qualification and Nurturing',
        'sales-boost-service-2-desc': 'We classify and nurture your leads, preparing them for sales closure with relevant information.',
        'feature-nurturing': 'Nurturing',
        'feature-qualification': 'Qualification',
        'sales-boost-service-3-title': 'Sales Closing and After-Sales',
        'sales-boost-service-3-desc': 'Expert advice on the closing process and after-sales follow-up to ensure customer satisfaction.',
        'feature-closing': 'Closing',
        'feature-post-sales': 'After-Sales',
        'sales-boost-service-4-title': 'Sales Process Optimization',
        'sales-boost-service-4-desc': 'We analyze and improve your sales funnels to identify opportunities and increase efficiency.',
        'contact-cta-title': 'Ready to skyrocket your sales?',
        'contact-cta-subtitle': 'Schedule a free demo and discover how we can transform your business results.'
    });

    Object.assign(translations.fr, {
        'sales-boost-title': 'Boost des Ventes - HumanosTech',
        'sales-boost-meta-desc': 'Services spécialisés pour stimuler vos ventes avec des stratégies personnalisées et une attention exceptionnelle.',
        'sales-boost-hero-title': 'Boost des Ventes',
        'sales-boost-hero-subtitle': 'Boostez vos résultats avec des stratégies de vente innovantes et une équipe dédiée à votre succès.',
        'sales-boost-section-title': 'Nos Services de Boost des Ventes',
        'sales-boost-section-subtitle': 'Nous concevons et mettons en œuvre des stratégies qui maximisent vos opportunités de vente et fidélisent vos clients.',
        'sales-boost-service-1-title': 'Génération de Leads Qualifiés',
        'sales-boost-service-1-desc': 'Nous identifions et attirons des prospects à fort potentiel de conversion pour votre entreprise.',
        'feature-leads': 'Leads',
        'feature-conversion': 'Conversion',
        'sales-boost-service-2-title': 'Qualification et Nutrition des Leads',
        'sales-boost-service-2-desc': 'Nous classons et cultivons vos leads, les préparant à la clôture des ventes avec des informations pertinentes.',
        'feature-nurturing': 'Nutrition',
        'feature-qualification': 'Qualification',
        'sales-boost-service-3-title': 'Clôture des Ventes et Post-Vente',
        'sales-boost-service-3-desc': 'Conseils d\'experts sur le processus de clôture et le suivi post-vente pour assurer la satisfaction du client.',
        'feature-closing': 'Clôture',
        'feature-post-sales': 'Post-Vente',
        'sales-boost-service-4-title': 'Optimisation des Processus de Vente',
        'sales-boost-service-4-desc': 'Nous analysons et améliorons vos entonnoirs de vente pour identifier les opportunités et augmenter l\'efficacité.',
        'contact-cta-title': 'Prêt à faire décoller vos ventes?',
        'contact-cta-subtitle': 'Planifiez une démo gratuite et découvrez comment nous pouvons transformer vos résultats commerciaux.'
    });

    Object.assign(translations.pt, {
        'sales-boost-title': 'Impulso de Vendas - HumanosTech',
        'sales-boost-meta-desc': 'Serviços especializados para impulsionar suas vendas com estratégias personalizadas e atendimento excepcional.',
        'sales-boost-hero-title': 'Impulso de Vendas',
        'sales-boost-hero-subtitle': 'Potencialize seus resultados com estratégias de vendas inovadoras e uma equipe dedicada ao seu sucesso.',
        'sales-boost-section-title': 'Nossos Serviços de Impulso de Vendas',
        'sales-boost-section-subtitle': 'Projetamos e implementamos estratégias que maximizam suas oportunidades de venda e fidelizam seus clientes.',
        'sales-boost-service-1-title': 'Geração de Leads Qualificados',
        'sales-boost-service-1-desc': 'Identificamos e atraímos prospects com alto potencial de conversão para o seu negócio.',
        'feature-leads': 'Leads',
        'feature-conversion': 'Conversão',
        'sales-boost-service-2-title': 'Qualificação e Nutrição de Leads',
        'sales-boost-service-2-desc': 'Classificamos e cultivamos seus leads, preparando-os para o fechamento de vendas com informações relevantes.',
        'feature-nurturing': 'Nutrição',
        'feature-qualification': 'Qualificação',
        'sales-boost-service-3-title': 'Fechamento de Vendas e Pós-Venda',
        'sales-boost-service-3-desc': 'Assessoria especializada no processo de fechamento e acompanhamento pós-venda para garantir a satisfação do cliente.',
        'feature-closing': 'Fechamento',
        'feature-post-sales': 'Pós-Venda',
        'sales-boost-service-4-title': 'Otimização de Processos de Vendas',
        'sales-boost-service-4-desc': 'Analisamos e melhoramos seus funis de venda para identificar oportunidades e aumentar a eficiência.',
        'contact-cta-title': 'Pronto para disparar suas vendas?',
        'contact-cta-subtitle': 'Agende uma demo gratuita e descubra como podemos transformar seus resultados comerciais.'
    });

    Object.assign(translations.it, {
        'sales-boost-title': 'Spinta alle Vendite - HumanosTech',
        'sales-boost-meta-desc': 'Servizi specializzati per aumentare le tue vendite con strategie personalizzate e un\'attenzione eccezionale.',
        'sales-boost-hero-title': 'Spinta alle Vendite',
        'sales-boost-hero-subtitle': 'Potenzia i tuoi risultati con strategie di vendita innovative e un team dedicato al tuo successo.',
        'sales-boost-section-title': 'I Nostri Servizi di Spinta alle Vendite',
        'sales-boost-section-subtitle': 'Progettiamo e implementiamo strategie che massimizzano le tue opportunità di vendita e fidelizzano i tuoi clienti.',
        'sales-boost-service-1-title': 'Generazione di Lead Qualificati',
        'sales-boost-service-1-desc': 'Identifichiamo e attiriamo prospect con alto potenziale di conversione per la tua attività.',
        'feature-leads': 'Lead',
        'feature-conversion': 'Conversione',
        'sales-boost-service-2-title': 'Qualificazione e Nutrizione dei Lead',
        'sales-boost-service-2-desc': 'Classifichiamo e coltiviamo i tuoi lead, preparandoli per la chiusura delle vendite con informazioni pertinenti.',
        'feature-nurturing': 'Nutrizione',
        'feature-qualification': 'Qualificazione',
        'sales-boost-service-3-title': 'Chiusura delle Vendite e Post-Vendita',
        'sales-boost-service-3-desc': 'Consulenza esperta nel processo di chiusura e follow-up post-vendita per garantire la soddisfazione del cliente.',
        'feature-closing': 'Chiusura',
        'feature-post-sales': 'Post-Vendita',
        'sales-boost-service-4-title': 'Ottimizzazione dei Processi di Vendita',
        'sales-boost-service-4-desc': 'Analizziamo e miglioriamo i tuoi funnel di vendita per identificare opportunità e aumentare l\'efficienza.',
        'contact-cta-title': 'Pronto a far decollare le tue vendite?',
        'contact-cta-subtitle': 'Prenota una demo gratuita e scopri come possiamo trasformare i tuoi risultati commerciali.'
    });

    Object.assign(translations.de, {
        'sales-boost-title': 'Verkaufsförderung - HumanosTech',
        'sales-boost-meta-desc': 'Spezialisierte Dienstleistungen zur Steigerung Ihrer Verkäufe mit personalisierten Strategien und außergewöhnlicher Betreuung.',
        'sales-boost-hero-title': 'Verkaufsförderung',
        'sales-boost-hero-subtitle': 'Steigern Sie Ihre Ergebnisse mit innovativen Verkaufsstrategien und einem Team, das Ihrem Erfolg gewidmet ist.',
        'sales-boost-section-title': 'Unsere Verkaufsförderungsdienste',
        'sales-boost-section-subtitle': 'Wir entwickeln und implementieren Strategien, die Ihre Verkaufschancen maximieren und Ihre Kunden binden.',
        'sales-boost-service-1-title': 'Generierung qualifizierter Leads',
        'sales-boost-service-1-desc': 'Wir identifizieren und gewinnen Interessenten mit hohem Konversionspotenzial für Ihr Unternehmen.',
        'feature-leads': 'Leads',
        'feature-conversion': 'Konversion',
        'sales-boost-service-2-title': 'Lead-Qualifizierung und -Pflege',
        'sales-boost-service-2-desc': 'Wir klassifizieren und pflegen Ihre Leads und bereiten sie mit relevanten Informationen auf den Verkaufsabschluss vor.',
        'feature-nurturing': 'Pflege',
        'feature-qualification': 'Qualifizierung',
        'sales-boost-service-3-title': 'Verkaufsabschluss und After-Sales',
        'sales-boost-service-3-desc': 'Kompetente Beratung im Abschlussprozess und After-Sales-Betreuung zur Sicherstellung der Kundenzufriedenheit.',
        'feature-closing': 'Abschluss',
        'feature-post-sales': 'After-Sales',
        'sales-boost-service-4-title': 'Optimierung der Verkaufsprozesse',
        'sales-boost-service-4-desc': 'Wir analysieren und verbessern Ihre Verkaufstrichter, um Chancen zu identifizieren und die Effizienz zu steigern.',
        'contact-cta-title': 'Bereit, Ihre Verkäufe anzukurbeln?',
        'contact-cta-subtitle': 'Buchen Sie eine kostenlose Demo und entdecken Sie, wie wir Ihre Geschäftsergebnisse transformieren können.'
    });



// About Us Page Translations
    Object.assign(translations.es, {
        'about-us-title': 'Sobre Nosotros - HumanosTech',
        'about-us-meta-desc': 'Conoce más sobre HumanosTech, nuestra misión, visión y el equipo que conecta el potencial humano con la eficiencia digital.',
        'about-us-hero-title': 'Sobre Nosotros',
        'about-us-hero-subtitle': 'Somos el puente que conecta el potencial humano con la eficiencia digital, transformando la manera en que las empresas crecen.',
        'about-us-mission-title': 'Nuestra Misión',
        'about-us-mission-desc': 'Conectamos empresas de cualquier escala con talento global especializado, creando soluciones que impulsan el crecimiento y la innovación. Creemos en el poder de las personas para transformar los negocios a través de la tecnología.',
        'about-us-vision-title': 'Nuestra Visión',
        'about-us-vision-desc': 'Ser la plataforma líder que democratiza el acceso al talento global, eliminando las barreras geográficas y creando oportunidades para empresas y profesionales en todo el mundo.',
        'about-us-values-title': 'Nuestros Valores',
        'about-us-value-1-title': 'Conexión Humana',
        'about-us-value-1-desc': 'Valoramos las relaciones auténticas y la comunicación transparente en cada interacción.',
        'about-us-value-2-title': 'Excelencia',
        'about-us-value-2-desc': 'Nos comprometemos con la calidad superior en cada proyecto y servicio que ofrecemos.',
        'about-us-value-3-title': 'Innovación',
        'about-us-value-3-desc': 'Buscamos constantemente nuevas formas de mejorar y evolucionar nuestros servicios.',
        'about-us-value-4-title': 'Transparencia',
        'about-us-value-4-desc': 'Mantenemos comunicación clara y honesta en todas nuestras relaciones comerciales.',
        'about-us-team-title': 'Nuestro Equipo',
        'about-us-team-subtitle': 'Profesionales apasionados que trabajan para conectar el talento global con las oportunidades empresariales.',
        'about-us-member-1-name': 'Mariela Yuri',
        'about-us-member-1-role': 'CEO & Fundadora',
        'about-us-member-1-desc': 'Experta en estrategia empresarial con más de 15 años conectando empresas con talento global.',
        'about-us-member-2-name': 'Carlos Velázquez',
        'about-us-member-2-role': 'Director de personal',
        'about-us-member-2-desc': 'Geestión de equipos distribuidos globalmente.',
        'about-us-member-3-name': 'Carlos Lohen',
        'about-us-member-3-role': 'Director de Operaciones',
        'about-us-member-3-desc': 'Especialista en optimización de procesos y gestión de sistemas integrados.',
        'contact-cta-title': '¿Quieres conocer más sobre nosotros?',
        'contact-cta-subtitle': 'Agenda una reunión y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales.'
    });

// Careers Page Translations
    Object.assign(translations.es, {
        'careers-title': 'Carreras - HumanosTech',
        'careers-meta-desc': 'Únete a nuestro equipo global y forma parte de la revolución que conecta el talento humano con la tecnología.',
        'careers-hero-title': 'Carreras',
        'careers-hero-subtitle': 'Únete a nuestro equipo global y forma parte de la revolución que conecta el talento humano con la tecnología.',
        'careers-section-title': 'Oportunidades Disponibles',
        'careers-section-subtitle': 'Descubre posiciones que te permitirán crecer profesionalmente mientras impactas positivamente en empresas de todo el mundo.',
        'careers-job-1-title': 'Especialista en Atención al Cliente',
        'careers-job-1-department': 'Departamento de Servicios',
        'careers-job-1-type': 'Tiempo Completo',
        'careers-job-1-desc': 'Buscamos un profesional apasionado por brindar experiencias excepcionales a nuestros clientes, con habilidades de comunicación sobresalientes y capacidad para resolver problemas complejos.',
        'careers-requirements-title': 'Requisitos:',
        'careers-job-1-req-1': 'Experiencia mínima de 2 años en atención al cliente',
        'careers-job-1-req-2': 'Dominio de inglés y español (otros idiomas son un plus)',
        'careers-job-1-req-3': 'Excelentes habilidades de comunicación escrita y verbal',
        'careers-job-1-req-4': 'Capacidad para trabajar en equipos remotos',
        'careers-apply-btn': 'Aplicar Ahora',
        'careers-job-2-title': 'Analista de Datos',
        'careers-job-2-department': 'Departamento de Tecnología',
        'careers-job-2-type': 'Tiempo Completo',
        'careers-job-2-desc': 'Únete a nuestro equipo de datos para transformar información compleja en insights accionables que impulsen el crecimiento de nuestros clientes.',
        'careers-job-2-req-1': 'Licenciatura en Estadística, Matemáticas o campo relacionado',
        'careers-job-2-req-2': 'Experiencia con Python, R o SQL',
        'careers-job-2-req-3': 'Conocimiento en visualización de datos (Tableau, Power BI)',
        'careers-job-2-req-4': 'Pensamiento analítico y atención al detalle',
        'careers-job-3-title': 'Coordinador de Proyectos',
        'careers-job-3-department': 'Departamento de Operaciones',
        'careers-job-3-type': 'Medio Tiempo',
        'careers-job-3-desc': 'Buscamos un coordinador organizado y proactivo para gestionar proyectos multidisciplinarios y asegurar la entrega exitosa de soluciones a nuestros clientes.',
        'careers-job-3-req-1': 'Experiencia en gestión de proyectos (PMP es un plus)',
        'careers-job-3-req-2': 'Conocimiento de metodologías ágiles',
        'careers-job-3-req-3': 'Excelentes habilidades organizacionales',
        'careers-job-3-req-4': 'Capacidad para trabajar con equipos distribuidos',
        'contact-cta-title': '¿No encuentras la posición ideal?',
        'contact-cta-subtitle': 'Envíanos tu CV y te contactaremos cuando tengamos oportunidades que se ajusten a tu perfil.',
        'careers-send-cv': 'Enviar CV'
    });

// Blog Page Translations
    Object.assign(translations.es, {
        'blog-title': 'Blog - HumanosTech',
        'blog-meta-desc': 'Descubre insights, tendencias y mejores prácticas sobre el futuro del trabajo remoto y la gestión de talento global.',
        'blog-hero-title': 'Blog',
        'blog-hero-subtitle': 'Descubre insights, tendencias y mejores prácticas sobre el futuro del trabajo remoto y la gestión de talento global.',
        'blog-section-title': 'Últimas Publicaciones',
        'blog-section-subtitle': 'Mantente al día con las últimas tendencias y estrategias en gestión de talento y trabajo remoto.',
        'blog-post-1-category': 'Trabajo Remoto',
        'blog-post-1-date': '15 Enero 2025',
        'blog-post-1-title': 'El Futuro del Trabajo Remoto: Tendencias para 2025',
        'blog-post-1-excerpt': 'Exploramos las principales tendencias que definirán el trabajo remoto en 2025, desde nuevas tecnologías hasta cambios en la cultura empresarial.',
        'blog-read-more': 'Leer más',
        'blog-post-2-category': 'Gestión de Talento',
        'blog-post-2-date': '10 Enero 2025',
        'blog-post-2-title': 'Cómo Construir Equipos Globales Efectivos',
        'blog-post-2-excerpt': 'Estrategias probadas para formar y gestionar equipos distribuidos que maximicen la productividad y la colaboración.',
        'blog-post-3-category': 'Tecnología',
        'blog-post-3-date': '5 Enero 2025',
        'blog-post-3-title': 'IA y Automatización en la Gestión de Datos',
        'blog-post-3-excerpt': 'Descubre cómo la inteligencia artificial está revolucionando el procesamiento y análisis de datos empresariales.',
        'blog-post-4-category': 'Atención al Cliente',
        'blog-post-4-date': '28 Diciembre 2024',
        'blog-post-4-title': 'Estrategias de Atención al Cliente Multicanal',
        'blog-post-4-excerpt': 'Mejores prácticas para ofrecer una experiencia de cliente excepcional a través de múltiples canales de comunicación.',
        'blog-post-5-category': 'Productividad',
        'blog-post-5-date': '20 Diciembre 2024',
        'blog-post-5-title': 'Optimización de Procesos Administrativos',
        'blog-post-5-excerpt': 'Técnicas y herramientas para automatizar y optimizar las tareas administrativas más comunes en las empresas.',
        'blog-post-6-category': 'Ventas',
        'blog-post-6-date': '15 Diciembre 2024',
        'blog-post-6-title': 'Técnicas de Generación de Leads en 2025',
        'blog-post-6-excerpt': 'Estrategias innovadoras para identificar y convertir prospectos de alta calidad en el entorno digital actual.',
        'contact-cta-title': '¿Quieres estar al día?',
        'contact-cta-subtitle': 'Suscríbete a nuestro newsletter y recibe los últimos insights directamente en tu bandeja de entrada.',
        'blog-subscribe': 'Suscribirse'
    });

// Legal Pages Translations
    Object.assign(translations.es, {
        'privacy-policy-title': 'Política de Privacidad - HumanosTech',
        'privacy-policy-meta-desc': 'Conoce cómo HumanosTech protege y maneja tu información personal de acuerdo con las mejores prácticas de privacidad.',
        'privacy-policy-hero-title': 'Política de Privacidad',
        'privacy-policy-hero-subtitle': 'Tu privacidad es nuestra prioridad. Conoce cómo protegemos y manejamos tu información personal.',
        'privacy-policy-last-updated': 'Última actualización: 1 de enero de 2025',
        'privacy-policy-section-1-title': '1. Información que Recopilamos',
        'privacy-policy-section-1-content': 'Recopilamos información que nos proporcionas directamente, como cuando te registras en nuestros servicios, nos contactas o utilizas nuestras plataformas. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, información de la empresa y cualquier otra información que elijas compartir con nosotros.',
        'terms-of-service-title': 'Términos de Servicio - HumanosTech',
        'terms-of-service-meta-desc': 'Conoce los términos y condiciones que rigen el uso de los servicios de HumanosTech.',
        'terms-of-service-hero-title': 'Términos de Servicio',
        'terms-of-service-hero-subtitle': 'Conoce los términos y condiciones que rigen el uso de nuestros servicios y plataformas.',
        'terms-of-service-last-updated': 'Última actualización: 1 de enero de 2025',
        'cookies-title': 'Política de Cookies - HumanosTech',
        'cookies-meta-desc': 'Información sobre el uso de cookies en el sitio web de HumanosTech y cómo gestionarlas.',
        'cookies-hero-title': 'Política de Cookies',
        'cookies-hero-subtitle': 'Información sobre cómo utilizamos las cookies para mejorar tu experiencia en nuestro sitio web.',
        'cookies-last-updated': 'Última actualización: 1 de enero de 2025'
    });

// Contact Page Translations
    Object.assign(translations.es, {
        'contact-title': 'Contacto - HumanosTech',
        'contact-meta-desc': 'Ponte en contacto con HumanosTech. Agenda una demo gratuita y descubre cómo podemos transformar tu negocio.',
        'contact-hero-title': 'Contacto',
        'contact-hero-subtitle': '¿Listo para transformar tu negocio? Ponte en contacto con nosotros y descubre cómo podemos ayudarte.',
        'contact-info-title': 'Información de Contacto',
        'contact-info-desc': 'Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios o utiliza el formulario para enviarnos un mensaje.',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Teléfono',
        'contact-phone-hours': 'Lunes a Viernes: 9:00 - 18:00',
        'contact-address-title': 'Dirección',
        'contact-form-title': 'Envíanos un Mensaje',
        'contact-form-name': 'Nombre *',
        'contact-form-email': 'Email *',
        'contact-form-company': 'Empresa',
        'contact-form-phone': 'Teléfono',
        'contact-form-service': 'Servicio de Interés',
        'contact-form-service-select': 'Selecciona un servicio',
        'contact-form-service-data': 'Procesamiento de Datos',
        'contact-form-service-support': 'Atención al Cliente',
        'contact-form-service-admin': 'Gestión Administrativa',
        'contact-form-service-sales': 'Impulso de Ventas',
        'contact-form-service-other': 'Otro',
        'contact-form-message': 'Mensaje *',
        'contact-form-privacy': 'Acepto la <a href="privacy-policy.html">Política de Privacidad</a> *',
        'contact-form-newsletter': 'Quiero recibir noticias y actualizaciones por email',
        'contact-form-submit': 'Enviar Mensaje',
        'contact-cta-title': '¿Prefieres una Demo en Vivo?',
        'contact-cta-subtitle': 'Agenda una demostración personalizada de 30 minutos y descubre cómo nuestros servicios pueden transformar tu negocio.',
        'contact-schedule-demo': 'Agendar Demo'
    });

// Add English translations for all new pages
Object.assign(translations.en, {
    // About Us
        'about-us-title': 'About Us - HumanosTech',
        'about-us-meta-desc': 'Learn more about HumanosTech, our mission, vision and the team that connects human potential with digital efficiency.',
        'about-us-hero-title': 'About Us',
        'about-us-hero-subtitle': 'We are the bridge that connects human potential with digital efficiency, transforming the way companies grow.',
        'about-us-mission-title': 'Our Mission',
        'about-us-mission-desc': 'We connect companies of any scale with specialized global talent, creating solutions that drive growth and innovation. We believe in the power of people to transform businesses through technology.',
        'about-us-vision-title': 'Our Vision',
        'about-us-vision-desc': 'To be the leading platform that democratizes access to global talent, eliminating geographical barriers and creating opportunities for companies and professionals worldwide.',
        'about-us-values-title': 'Our Values',
        'about-us-value-1-title': 'Human Connection',
        'about-us-value-1-desc': 'We value authentic relationships and transparent communication in every interaction.',
        'about-us-value-2-title': 'Excellence',
        'about-us-value-2-desc': 'We commit to superior quality in every project and service we offer.',
        'about-us-value-3-title': 'Innovation',
        'about-us-value-3-desc': 'We constantly seek new ways to improve and evolve our services.',
        'about-us-value-4-title': 'Transparency',
        'about-us-value-4-desc': 'We maintain clear and honest communication in all our business relationships.',
        'about-us-team-title': 'Our Team',
        'about-us-team-subtitle': 'Passionate professionals working to connect global talent with business opportunities.',
        'about-us-member-1-name': 'Mariela Yuri',
        'about-us-member-1-role': 'CEO & Founder',
        'about-us-member-1-desc': 'Business strategy expert with over 15 years connecting companies with global talent.',
        'about-us-member-2-name': 'Carlos Velázquez',
        'about-us-member-2-role': 'Team Director',
        'about-us-member-2-desc': 'Specialist in Management of globally distributed teams.',
        'about-us-member-3-name': 'Carlos Lohen',
        'about-us-member-3-role': 'Operations Director',
        'about-us-member-3-desc': 'Specialist in process optimization in scalable platforms and innovative technological solutions.',
        'contact-cta-title': 'Want to know more about us?',
        'contact-cta-subtitle': 'Schedule a meeting and discover how we can help you achieve your business goals.',
    
    // Careers
        'careers-title': 'Careers - HumanosTech',
        'careers-meta-desc': 'Join our global team and be part of the revolution that connects human talent with technology.',
        'careers-hero-title': 'Careers',
        'careers-hero-subtitle': 'Join our global team and be part of the revolution that connects human talent with technology.',
        'careers-section-title': 'Available Opportunities',
        'careers-section-subtitle': 'Discover positions that will allow you to grow professionally while positively impacting companies worldwide.',
        'careers-job-1-title': 'Customer Support Specialist',
        'careers-job-1-department': 'Services Department',
        'careers-job-1-type': 'Full Time',
        'careers-job-1-desc': 'We seek a professional passionate about providing exceptional experiences to our customers, with outstanding communication skills and ability to solve complex problems.',
        'careers-requirements-title': 'Requirements:',
        'careers-job-1-req-1': 'Minimum 2 years experience in customer service',
        'careers-job-1-req-2': 'Fluency in English and Spanish (other languages are a plus)',
        'careers-job-1-req-3': 'Excellent written and verbal communication skills',
        'careers-job-1-req-4': 'Ability to work in remote teams',
        'careers-apply-btn': 'Apply Now',
        'careers-job-2-title': 'Data Analyst',
        'careers-job-2-department': 'Technology Department',
        'careers-job-2-type': 'Full Time',
        'careers-job-2-desc': 'Join our data team to transform complex information into actionable insights that drive our clients\' growth.',
        'careers-job-2-req-1': 'Bachelor\'s degree in Statistics, Mathematics or related field',
        'careers-job-2-req-2': 'Experience with Python, R or SQL',
        'careers-job-2-req-3': 'Knowledge in data visualization (Tableau, Power BI)',
        'careers-job-2-req-4': 'Analytical thinking and attention to detail',
        'careers-job-3-title': 'Project Coordinator',
        'careers-job-3-department': 'Operations Department',
        'careers-job-3-type': 'Part Time',
        'careers-job-3-desc': 'We seek an organized and proactive coordinator to manage multidisciplinary projects and ensure successful delivery of solutions to our clients.',
        'careers-job-3-req-1': 'Experience in project management (PMP is a plus)',
        'careers-job-3-req-2': 'Knowledge of agile methodologies',
        'careers-job-3-req-3': 'Excellent organizational skills',
        'careers-job-3-req-4': 'Ability to work with distributed teams',
        'contact-cta-title': 'Can\'t find the ideal position?',
        'contact-cta-subtitle': 'Send us your CV and we\'ll contact you when we have opportunities that match your profile.',
        'careers-send-cv': 'Send CV',
    
    // Blog
        'blog-title': 'Blog - HumanosTech',
        'blog-meta-desc': 'Discover insights, trends and best practices about the future of remote work and global talent management.',
        'blog-hero-title': 'Blog',
        'blog-hero-subtitle': 'Discover insights, trends and best practices about the future of remote work and global talent management.',
        'blog-section-title': 'Latest Posts',
        'blog-section-subtitle': 'Stay up to date with the latest trends and strategies in talent management and remote work.',
        'blog-post-1-category': 'Remote Work',
        'blog-post-1-date': 'January 15, 2025',
        'blog-post-1-title': 'The Future of Remote Work: Trends for 2025',
        'blog-post-1-excerpt': 'We explore the main trends that will define remote work in 2025, from new technologies to changes in business culture.',
        'blog-read-more': 'Read more',
        'blog-post-2-category': 'Talent Management',
        'blog-post-2-date': 'January 10, 2025',
        'blog-post-2-title': 'How to Build Effective Global Teams',
        'blog-post-2-excerpt': 'Proven strategies to form and manage distributed teams that maximize productivity and collaboration.',
        'blog-post-3-category': 'Technology',
        'blog-post-3-date': 'January 5, 2025',
        'blog-post-3-title': 'AI and Automation in Data Management',
        'blog-post-3-excerpt': 'Discover how artificial intelligence is revolutionizing business data processing and analysis.',
        'blog-post-4-category': 'Customer Service',
        'blog-post-4-date': 'December 28, 2024',
        'blog-post-4-title': 'Multichannel Customer Service Strategies',
        'blog-post-4-excerpt': 'Best practices to offer exceptional customer experience through multiple communication channels.',
        'blog-post-5-category': 'Productivity',
        'blog-post-5-date': 'December 20, 2024',
        'blog-post-5-title': 'Administrative Process Optimization',
        'blog-post-5-excerpt': 'Techniques and tools to automate and optimize the most common administrative tasks in companies.',
        'blog-post-6-category': 'Sales',
        'blog-post-6-date': 'December 15, 2024',
        'blog-post-6-title': 'Lead Generation Techniques in 2025',
        'blog-post-6-excerpt': 'Innovative strategies to identify and convert high-quality prospects in today\'s digital environment.',
        'contact-cta-title': 'Want to stay updated?',
        'contact-cta-subtitle': 'Subscribe to our newsletter and receive the latest insights directly in your inbox.',
        'blog-subscribe': 'Subscribe',
    
    // Contact
        'contact-title': 'Contact - HumanosTech',
        'contact-meta-desc': 'Get in touch with HumanosTech. Schedule a free demo and discover how we can transform your business.',
        'contact-hero-title': 'Contact',
        'contact-hero-subtitle': 'Ready to transform your business? Get in touch with us and discover how we can help you.',
        'contact-info-title': 'Contact Information',
        'contact-info-desc': 'We are here to help you. Contact us through any of these means or use the form to send us a message.',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-phone-hours': 'Monday to Friday: 9:00 - 18:00',
        'contact-address-title': 'Address',
        'contact-form-title': 'Send us a Message',
        'contact-form-name': 'Name *',
        'contact-form-email': 'Email *',
        'contact-form-company': 'Company',
        'contact-form-phone': 'Phone',
        'contact-form-service': 'Service of Interest',
        'contact-form-service-select': 'Select a service',
        'contact-form-service-data': 'Data Processing',
        'contact-form-service-support': 'Customer Support',
        'contact-form-service-admin': 'Administrative Management',
        'contact-form-service-sales': 'Sales Boost',
        'contact-form-service-other': 'Other',
        'contact-form-message': 'Message *',
        'contact-form-privacy': 'I accept the <a href="privacy-policy.html">Privacy Policy</a> *',
        'contact-form-newsletter': 'I want to receive news and updates by email',
        'contact-form-submit': 'Send Message',
        'contact-cta-title': 'Prefer a Live Demo?',
        'contact-cta-subtitle': 'Schedule a personalized 30-minute demonstration and discover how our services can transform your business.',
        'contact-schedule-demo': 'Schedule Demo'
});

// Adicionar similar translations for French, Portuguese, Italian and German...

Object.assign(translations.fr, {
    'about-us-hero-title': 'À Propos de Nous',
    'careers-hero-title': 'Carrières',
    'blog-hero-title': 'Blog',
    'contact-hero-title': 'Contact',
    'privacy-policy-hero-title': 'Politique de Confidentialité',
    'terms-of-service-hero-title': 'Conditions de Service',
    'cookies-hero-title': 'Politique de Cookies'
});

Object.assign(translations.pt, {
    'about-us-hero-title': 'Sobre Nós',
    'careers-hero-title': 'Carreiras',
    'blog-hero-title': 'Blog',
    'contact-hero-title': 'Contato',
    'privacy-policy-hero-title': 'Política de Privacidade',
    'terms-of-service-hero-title': 'Termos de Serviço',
    'cookies-hero-title': 'Política de Cookies'
});

Object.assign(translations.it, {
    'about-us-hero-title': 'Chi Siamo',
    'careers-hero-title': 'Carriere',
    'blog-hero-title': 'Blog',
    'contact-hero-title': 'Contatto',
    'privacy-policy-hero-title': 'Politica sulla Privacy',
    'terms-of-service-hero-title': 'Termini di Servizio',
    'cookies-hero-title': 'Politica sui Cookie'
});

Object.assign(translations.de, {
    'about-us-hero-title': 'Über Uns',
    'careers-hero-title': 'Karrieren',
    'blog-hero-title': 'Blog',
    'contact-hero-title': 'Kontakt',
    'privacy-policy-hero-title': 'Datenschutzrichtlinie',
    'terms-of-service-hero-title': 'Nutzungsbedingungen',
    'cookies-hero-title': 'Cookie-Richtlinie'
});




// Hide loading spinner when page is loaded
window.addEventListener("load", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    if (loaderWrapper) {
        loaderWrapper.style.display = "none";
    }
});


