// src/data/translations.js

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello! My name is",
      role: "Full-Stack Web Developer",
      bio: "Passionate about technology, software architecture, and problem solving.",
      cta: "Get in Touch",
    },
    projects: {
      title: "Featured Projects",
      liveDemo: "Live Demo",
      viewCode: "View Code",
      items: [
        {
          title: "DeliCharly - Order & Dispatch System",
          description: "Full-stack restaurant order management system with WhatsApp integration, delivery dispatching, and automated Excel reports.",
          imgSrc: "/img/delicharly.png",
          tags: ["React", "Astro", "Supabase", "Tailwind CSS", "GitHub Pages"],
          demoUrl: "https://tomasgallas.github.io/mvpDELICHARLY/",
          repoUrl: "https://github.com/tomasgallas/DeliCharly-FullStack"
        },
        {
          title: "LabsLIA - Computer Lab Management",
          description: "IT lab management system featuring resource scheduling, inventory tracking, and role-based access control.",
          imgSrc: "/img/labslia.png",
          tags: ["Java", "MySQL", "GlassFish", "Jakarta EE"],
          repoUrl: "https://github.com/tomasgallas/LabsLIA-java"
        },
        {
          title: "Digital Restaurant Menu",
          description: "Interactive digital menu for a local pizzeria with updated prices, product descriptions, photos, and a responsive mobile-first design.",
          imgSrc: "/img/cartaCharly.png",
          tags: ["Astro", "GitHub Pages", "CSS3", "React", "JavaScript"],
          demoUrl: "https://tomasgallas.github.io/CartaDigital-CharlyPizza/",
          repoUrl: "https://github.com/tomasgallas/CartaDigital-CharlyPizza"
        },
        {
          title: "Library Management System",
          description: "Web platform for book inventory and author cataloging with multi-role authentication (admin, librarian, student).",
          imgSrc: "/img/biblioteca.png",
          tags: ["Node.js", "React", ".NET Core", "SQLite"],
          repoUrl: "https://github.com/tomasgallas/bibliotecaBackEnd"
        },
        {
          title: "Business Landing Page",
          description: "Landing page and digital catalog developed for NTN Tintas y Toners, an IT supply and printer maintenance store.",
          imgSrc: "/img/ntn.png",
          tags: ["Astro", "GitHub Pages", "HTML5", "CSS3", "JavaScript"],
          demoUrl: "https://tintasytonersntn-coder.github.io/",
          repoUrl: "https://github.com/tintasytonersntn-coder/tintasytonersntn-coder.github.io"
        },
        {
          title: "Random Team Generator",
          description: "Generates balanced random sports teams from a player list, with options to manually swap players or instantly reshuffle teams.",
          imgSrc: "/img/proyecto11.png",
          tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap 5"],
          demoUrl: "https://tomasgallas.github.io/armador-equipos/",
          repoUrl: "https://github.com/tomasgallas/armador-equipos"
        },
        {
          title: "University Management System",
          description: "Academic management system with full CRUD operations for courses, students, and professors, plus custom JPQL reports.",
          imgSrc: "/img/alumnos.png",
          tags: ["Java", "MySQL", "GlassFish", "Jakarta EE"],
          repoUrl: "https://github.com/tomasgallas/AppAlumnosBackEndIII"
        }
      ]
    },
    about: {
      title: "About Me",
      p1: "I am an advanced student in the University Technician in Web Programming degree at the National University of San Juan.",
      p2: "I consider myself a detail-oriented person when finding solutions, constantly eager to learn and improve.",
      p3: "My experience as a teaching assistant in 'Computer Structure and Operation' and my participation in the Software Computer Lab allow me to apply my skills in practical and collaborative environments.",
      p4: "Currently, I am looking for opportunities as a Junior Developer or related IT roles where I can contribute my comprehensive perspective, enthusiasm for learning, and drive to tackle new technical challenges.",
      skillsTitle: "Technical Skills",
      skills: [
        'Java', 'React', 'Node.js', '.NET Core', 'SQL', 'Firebase', 'Supabase',
        'Git & GitHub', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'Networking',
        'Linux', 'English (Fluent)'
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Do you have an idea, project, or opportunity where I can add value? I am ready to take on new challenges and build impactful solutions.",
      copied: "Copied to clipboard!",
      cv: "Resume (CV)"
    },
    footer: {
      rights: "All rights reserved."
    },
    chat: {
      title: "Tomás's AI Assistant",
      initialGreeting: "Hi! I'm Tomás's AI Assistant. Ask me anything about his projects, technical skills, or background.",
      placeholder: "Ask about experience, projects...",
      thinking: "Thinking..."
    }
  },

  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre Mí",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Mi nombre es",
      role: "Desarrollador Web Full-Stack",
      bio: "Apasionado por la tecnología, la arquitectura de software y la resolución de problemas.",
      cta: "Contáctame",
    },
    projects: {
      title: "Proyectos Destacados",
      liveDemo: "Ver Demo",
      viewCode: "Ver Código",
      items: [
        {
          title: "DeliCharly - Sistema de Despacho",
          description: "Sistema fullstack de pedidos para restaurante con integración de WhatsApp, asignación de repartidores y reportes en Excel.",
          imgSrc: "/img/delicharly.png",
          tags: ["React", "Astro", "Supabase", "Tailwind CSS", "GitHub Pages"],
          demoUrl: "https://tomasgallas.github.io/mvpDELICHARLY/",
          repoUrl: "https://github.com/tomasgallas/DeliCharly-FullStack"
        },
        {
          title: "LabsLIA - Gestión de Laboratorios",
          description: "Sistema de gestión para laboratorios educativos con reservas de recursos, inventario y control de acceso por roles.",
          imgSrc: "/img/labslia.png",
          tags: ["Java", "MySQL", "GlassFish", "Jakarta EE"],
          repoUrl: "https://github.com/tomasgallas/LabsLIA-java"
        },
        {
          title: "Carta Digital para Restaurante",
          description: "Carta digital interactiva para pizzería con precios actualizados, fotos de productos y diseño responsive.",
          imgSrc: "/img/cartaCharly.png",
          tags: ["Astro", "GitHub Pages", "CSS3", "React", "JavaScript"],
          demoUrl: "https://tomasgallas.github.io/CartaDigital-CharlyPizza/",
          repoUrl: "https://github.com/tomasgallas/CartaDigital-CharlyPizza"
        },
        {
          title: "Sistema de Biblioteca",
          description: "Plataforma web para inventario de libros y catálogo de autores con autenticación multi-rol (admin, bibliotecario, alumno).",
          imgSrc: "/img/biblioteca.png",
          tags: ["Node.js", "React", ".NET Core", "SQLite"],
          repoUrl: "https://github.com/tomasgallas/bibliotecaBackEnd"
        },
        {
          title: "Landing Page para Negocio",
          description: "Landing page y catálogo digital desarrollado para NTN Tintas y Toners, tienda de insumos y mantenimiento informático.",
          imgSrc: "/img/ntn.png",
          tags: ["Astro", "GitHub Pages", "HTML5", "CSS3", "JavaScript"],
          demoUrl: "https://tintasytonersntn-coder.github.io/",
          repoUrl: "https://github.com/tintasytonersntn-coder/tintasytonersntn-coder.github.io"
        },
        {
          title: "Armador de Equipos Aleatorios",
          description: "Generador de equipos equilibrados para deportes con lógica para intercambiar jugadores o remezclar al instante.",
          imgSrc: "/img/proyecto11.png",
          tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap 5"],
          demoUrl: "https://tomasgallas.github.io/armador-equipos/",
          repoUrl: "https://github.com/tomasgallas/armador-equipos"
        },
        {
          title: "Sistema de Gestión Universitaria",
          description: "Sistema académico con operaciones CRUD completas para carreras, materias, alumnos y docentes, más reportes JPQL.",
          imgSrc: "/img/alumnos.png",
          tags: ["Java", "MySQL", "GlassFish", "Jakarta EE"],
          repoUrl: "https://github.com/tomasgallas/AppAlumnosBackEndIII"
        }
      ]
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy estudiante avanzado de la carrera Técnico Universitario en Programación Web en la Universidad Nacional de San Juan.",
      p2: "Me considero una persona detallista a la hora de buscar soluciones y con ganas de seguir aprendiendo.",
      p3: "Mi experiencia como ayudante de cátedra en 'Estructura y Funcionamiento de la Computadora' y mi participación en el Laboratorio de Informática me permiten aplicar mis habilidades en entornos prácticos y colaborativos.",
      p4: "Actualmente, busco empleo como desarrollador junior o puestos afines donde pueda aportar mi perspectiva integral, entusiasmo por aprender y compromiso.",
      skillsTitle: "Habilidades Técnicas",
      skills: [
        'Java', 'React', 'Node.js', '.NET Core', 'SQL', 'Firebase', 'Supabase',
        'Git & GitHub', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'Redes',
        'Linux', 'Inglés (Fluido)'
      ]
    },
    contact: {
      title: "Hablemos",
      subtitle: "¿Tienes una idea, proyecto u oportunidad donde pueda aportar valor? Estoy listo para enfrentar nuevos desafíos y construir soluciones.",
      copied: "¡Copiado al portapapeles!",
      cv: "Ver CV (PDF)"
    },
    footer: {
      rights: "Todos los derechos reservados."
    },
    chat: {
      title: "Asistente IA de Tomás",
      initialGreeting: "¡Hola! Soy el Asistente de IA de Tomás. Pregúntame lo que quieras sobre sus proyectos, habilidades o trayectoria.",
      placeholder: "Pregunta sobre experiencia, proyectos...",
      thinking: "Pensando..."
    }
  }
};