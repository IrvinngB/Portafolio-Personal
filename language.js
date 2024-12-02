// Objeto de traducciones
const translations = {
    en: {
        home: "Home",
        aboutMe: "About Me",
        technologies: "Technologies",
        projects: "Projects",
        contact: "Contact",
        languageSwitcher: "Language Switcher",
        irvinBenitez: "Irvin Benitez",
        backendDeveloper: "Backend Software Developer",
        aboutMeDescription: "I am a passionate developer with experience in creating innovative and efficient web solutions. I love facing new challenges and constantly learning.",
        technologiesTitle: "Technologies",
        projectsTitle: "Projects",
        whatsappBot: "WhatsApp Chat Bot",
        whatsappBotDescription: "I developed a custom WhatsApp bot with the ability to provide intelligent responses using the Gemini AI API.",
        registrationForm: "Registration Form",
        registrationFormDescription: "I developed a payroll management form using a local database for data entry, updating, deletion, and querying.",
        landingWebpage: "Landing Webpage",
        landingWebpageDescription: "Developed a clean and modern landing page, focusing on user engagement and responsive design.",
        ecommerce: "E-Commerce Platform",
        ecommerceDescription: "Focused on the creation of APIs, as well as the improvement and correction of existing ones, ensuring the security of the platform.",
        logoDesign: "Logo Design",
        logoDesignDescription: "I designed a professional logo for a small enterprise using Adobe Illustrator, ensuring high-quality visuals and brand consistency.",
        bannerDesign: "Banner Design",
        bannerDesignDescription: "I designed a professional banner for a small enterprise using Adobe Photoshop, ensuring high-quality visuals and brand consistency.",
        advertisingSpot: "Advertising Spot",
        advertisingSpotDescription: "I created a short but concise advertising spot, ensuring clear and effective communication of the brand's message.",
        statisticsProject: "Statistics Project",
        statisticsProjectDescription: "Developed a comprehensive web page for statistical analysis using Jupyter Notebook, Python, HTML, and CSS. This project enhances data visualization and provides insightful analysis.",
        viewProject: "View project",
        contactTitle: "Contact",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
        allRightsReserved: "&copy; 2024 Irvin Benitez. All rights reserved."
    },
    es: {
        home: "Inicio",
        aboutMe: "Sobre Mí",
        technologies: "Tecnologías",
        projects: "Proyectos",
        contact: "Contacto",
        languageSwitcher: "Cambiar Idioma",
        irvinBenitez: "Irvin Benitez",
        backendDeveloper: "Desarrollador de Software Backend",
        aboutMeDescription: "Soy un desarrollador apasionado con experiencia en la creación de soluciones web innovadoras y eficientes. Me encanta enfrentar nuevos desafíos y aprender constantemente.",
        technologiesTitle: "Tecnologías",
        projectsTitle: "Proyectos",
        whatsappBot: "Bot de WhatsApp",
        whatsappBotDescription: "Desarrollé un bot personalizado de WhatsApp con la capacidad de proporcionar respuestas inteligentes utilizando la API de Gemini AI.",
        registrationForm: "Formulario de Registro",
        registrationFormDescription: "Desarrollé un formulario de gestión de nómina utilizando una base de datos local para la entrada, actualización, eliminación y consulta de datos.",
        landingWebpage: "Página de Aterrizaje",
        landingWebpageDescription: "Desarrollé una página de aterrizaje moderna, enfocada en el compromiso del usuario y el diseño responsivo.",
        ecommerce: "Plataforma de Comercio Electrónico",
        ecommerceDescription: "Me centré en la creación de APIs, así como en la mejora y corrección de las existentes, asegurando la seguridad de la plataforma.",
        logoDesign: "Diseño de Logotipo",
        logoDesignDescription: "Diseñé un logotipo profesional para una pequeña empresa utilizando Adobe Illustrator, asegurando alta calidad visual y coherencia de marca.",
        bannerDesign: "Diseño de Banner",
        bannerDesignDescription: "Diseñé un banner profesional para una pequeña empresa utilizando Adobe Photoshop, asegurando alta calidad visual y coherencia de marca.",
        advertisingSpot: "Spot Publicitario",
        advertisingSpotDescription: "Creé un spot publicitario corto pero conciso, asegurando una comunicación clara y efectiva del mensaje de la marca.",
        statisticsProject: "Proyecto de Estadísticas",
        statisticsProjectDescription: "Desarrollé una página web integral para el análisis estadístico utilizando Jupyter Notebook, Python, HTML y CSS. Este proyecto mejora la visualización de datos y proporciona un análisis perspicaz.",
        viewProject: "Ver proyecto",
        contactTitle: "Contacto",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Correo Electrónico",
        allRightsReserved: "&copy; 2024 Irvin Benitez. Todos los derechos reservados."
    }
};

// Función para traducir el contenido
function translate(language) {
    // Navegación
    document.querySelector('nav ul li a[href="#inicio"]').textContent = translations[language].home;
    document.querySelector('nav ul li a[href="#sobre-mi"]').textContent = translations[language].aboutMe;
    document.querySelector('nav ul li a[href="#tecnologias"]').textContent = translations[language].technologies;
    document.querySelector('nav ul li a[href="#proyectos"]').textContent = translations[language].projects;
    document.querySelector('nav ul li a[href="#contacto"]').textContent = translations[language].contact;
    document.querySelector('#languageSwitcher').textContent = translations[language].languageSwitcher;

    // Sección Inicio
    document.querySelector('#inicio h1').textContent = translations[language].irvinBenitez;
    document.querySelector('#inicio p').textContent = translations[language].backendDeveloper;

    // Sección Sobre Mí
    document.querySelector('#sobre-mi h2').textContent = translations[language].aboutMe;
    document.querySelector('#sobre-mi p').textContent = translations[language].aboutMeDescription;

    // Sección Tecnologías
    document.querySelector('#tecnologias h2').textContent = translations[language].technologiesTitle;

    // Sección Proyectos
    document.querySelector('#proyectos h2').textContent = translations[language].projectsTitle;

    const projectTitles = document.querySelectorAll('#proyectos .item .info h3');
    const projectDescriptions = document.querySelectorAll('#proyectos .item .info p');
    const projectLinks = document.querySelectorAll('#proyectos .item .info a');

    projectTitles[0].textContent = translations[language].whatsappBot;
    projectDescriptions[0].textContent = translations[language].whatsappBotDescription;
    projectLinks[0].textContent = translations[language].viewProject;

    projectTitles[1].textContent = translations[language].registrationForm;
    projectDescriptions[1].textContent = translations[language].registrationFormDescription;
    projectLinks[1].textContent = translations[language].viewProject;

    projectTitles[2].textContent = translations[language].landingWebpage;
    projectDescriptions[2].textContent = translations[language].landingWebpageDescription;
    projectLinks[2].textContent = translations[language].viewProject;

    projectTitles[3].textContent = translations[language].ecommerce;
    projectDescriptions[3].textContent = translations[language].ecommerceDescription;
    projectLinks[3].textContent = translations[language].viewProject;

    projectTitles[4].textContent = translations[language].logoDesign;
    projectDescriptions[4].textContent = translations[language].logoDesignDescription;
    projectLinks[4].textContent = translations[language].viewProject;

    projectTitles[5].textContent = translations[language].bannerDesign;
    projectDescriptions[5].textContent = translations[language].bannerDesignDescription;
    projectLinks[5].textContent = translations[language].viewProject;

    projectTitles[6].textContent = translations[language].advertisingSpot;
    projectDescriptions[6].textContent = translations[language].advertisingSpotDescription;
    projectLinks[6].textContent = translations[language].viewProject;

    projectTitles[7].textContent = translations[language].statisticsProject;
    projectDescriptions[7].textContent = translations[language].statisticsProjectDescription;
    projectLinks[7].textContent = translations[language].viewProject;

    // Sección Contacto
    document.querySelector('#contacto h2').textContent = translations[language].contactTitle;
    const contactLinks = document.querySelectorAll('#contacto .contact-info a');
    contactLinks[0].textContent = translations[language].linkedin;
    contactLinks[1].textContent = translations[language].github;
    contactLinks[2].textContent = translations[language].email;

    // Footer
    document.querySelector('footer p').innerHTML = translations[language].allRightsReserved;
}

// Cambiar idioma al hacer clic
let currentLanguage = 'en';

document.getElementById('languageSwitcher').addEventListener('click', function (e) {
    e.preventDefault();
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    translate(currentLanguage);
    console.log('Language switched to:', currentLanguage);
});
