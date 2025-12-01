export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  image: string;
  gallery?: string[];
  year: string;
  githubUrl?: string;  // 👈 Agregado como opcional
  liveUrl?: string;    // 👈 Agregado como opcional
}

export const projectsData: Project[] = [
  {
    slug: "spm",
    title: "SPM – Banda Deportiva Inteligente",
    shortDescription: "Banda deportiva que mide variables fisiológicas en tiempo real.",
    longDescription:
      "SPM es un sistema integral que combina hardware (banda deportiva) con software móvil para monitorear pulsaciones, calorías, rendimiento y progreso del usuario con gráficas en tiempo real. Incluye backend con FastAPI, almacenamiento en MySQL y cálculos personalizados.",
    tech: ["React Native", "FastAPI", "MySQL", "Expo", "Python"],
    image: "/spm.png",
    gallery: ["/spm1.png", "/spm2.png"],
    year: "2024–2025",
    githubUrl: "https://github.com/carlos030804/PI_SPM.git", // 👈 Agregado
    liveUrl: "https://spm-demo.vercel.app", // 👈 Agregado
  },
  {
    slug: "mgfit",
    title: "MGFit – App Fitness Personalizada",
    shortDescription:
      "Aplicación móvil que genera rutinas basadas en peso, estatura y objetivos físicos.",
    longDescription:
      "MGFit es una aplicación móvil desarrollada desde cero con Expo y React Native. Permite que los usuarios registren su peso, estatura y objetivos, y genera rutinas dinámicas usando reglas y cálculos nutricionales. Backend desarrollado con FastAPI.",
    tech: ["React Native", "FastAPI", "MySQL", "Expo Go"],
    image: "/mgfit.png",
    gallery: ["/mgfit1.png"],
    year: "2024",
    githubUrl: "https://github.com/tuusuario/mgfit-app", // 👈 Agregado
    liveUrl: "https://mgfit-expo.vercel.app", // 👈 Agregado
  },
  {
    slug: "periodos-upq",
    title: "Sistema de Programación de Períodos – UPQ",
    shortDescription: "Módulo institucional para administrar períodos académicos.",
    longDescription:
      "Desarrollé la interfaz completa para la programación, edición y validación de períodos en el sistema institucional de la UPQ. Incluye tablas dinámicas, validaciones avanzadas y reactividad completa con PrimeReact.",
    tech: ["React", "PrimeReact", "Laravel", "MySQL"],
    image: "/periodos.png",
    year: "2023–2024",
    // ⚠️ Para proyectos privados o sin repositorio público:
    // NO agregues githubUrl ni liveUrl, quedan como undefined
    // Esto está bien porque los campos son opcionales (?)
  },
  {
    slug: "sistema-becas",
    title: "Sistema de Solicitud de Becas – UPQ",
    shortDescription:
      "Backoffice completo para gestionar solicitudes, historial y reglas de negocio.",
    longDescription:
      "Sistema desarrollado para administrar solicitudes de becas, validar requisitos y generar el historial de estatus. Implementé controladores, servicios, repositorios, validaciones y flujo completo de negocio.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: "/becas.png",
    year: "2024",
    githubUrl: "https://github.com/tuusuario/becas-sistema", // 👈 Agregado
    liveUrl: "https://becas-upq-demo.vercel.app", // 👈 Agregado
  },
];