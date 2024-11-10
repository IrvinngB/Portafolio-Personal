// Archivo language.js

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
        myProjects: "My Projects",
        whatsappBot: "WhatsApp Chat Bot",
        whatsappBotDescription: "I developed a custom WhatsApp bot with the ability to provide intelligent responses using the Gemini AI API.",
        viewHere: "View here",
        registrationForm: "Registration Form",
        registrationFormDescription: "I developed a payroll management form using a local database for data entry, updating, deletion, and querying.",
        landingWebpage: "Landing Webpage",
        landingWebpageDescription: "I worked on the creation of a simple landing webpage.",
        eCommerce: "E-Commerce",
        eCommerceDescription: "I worked on the creation of an E-Commerce.",
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
        myProjects: "Mis Proyectos",
        whatsappBot: "Bot de WhatsApp",
        whatsappBotDescription: "Desarrollé un bot personalizado de WhatsApp con la capacidad de proporcionar respuestas inteligentes utilizando la API de Gemini AI.",
        viewHere: "Ver aquí",
        registrationForm: "Formulario de Registro",
        registrationFormDescription: "Desarrollé un formulario de gestión de nómina utilizando una base de datos local para la entrada, actualización, eliminación y consulta de datos.",
        landingWebpage: "Página de Aterrizaje",
        landingWebpageDescription: "Trabajé en la creación de una página de aterrizaje simple.",
        eCommerce: "Comercio Electrónico",
        eCommerceDescription: "Trabajé en la creación de un Comercio Electrónico.",
        contactTitle: "Contacto",
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Correo Electrónico",
        allRightsReserved: "&copy; 2024 Irvin Benitez. Todos los derechos reservados."
    }
};

// Función de traducción
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
    document.querySelector('#proyectos h2').textContent = translations[language].myProjects;

    const projectTitles = document.querySelectorAll('#proyectos .proyecto h3');
    const projectDescriptions = document.querySelectorAll('#proyectos .proyecto p');
    const projectLinks = document.querySelectorAll('#proyectos .proyecto a');

    projectTitles[0].textContent = translations[language].whatsappBot;
    projectDescriptions[0].textContent = translations[language].whatsappBotDescription;
    projectLinks[0].textContent = translations[language].viewHere;

    projectTitles[1].textContent = translations[language].registrationForm;
    projectDescriptions[1].textContent = translations[language].registrationFormDescription;
    projectLinks[1].textContent = translations[language].viewHere;

    projectTitles[2].textContent = translations[language].landingWebpage;
    projectDescriptions[2].textContent = translations[language].landingWebpageDescription;
    projectLinks[2].textContent = translations[language].viewHere;

    projectTitles[3].textContent = translations[language].eCommerce;
    projectDescriptions[3].textContent = translations[language].eCommerceDescription;
    projectLinks[3].textContent = translations[language].viewHere;

    // Sección Contacto
    document.querySelector('#contacto h2').textContent = translations[language].contactTitle;
    document.querySelectorAll('#contacto .contact-item .contact-info p a')[0].textContent = translations[language].linkedin;
    document.querySelectorAll('#contacto .contact-item .contact-info p a')[1].textContent = translations[language].github;
    document.querySelectorAll('#contacto .contact-item .contact-info p a')[2].textContent = translations[language].email;

    // Footer
    document.querySelector('footer p').innerHTML = translations[language].allRightsReserved;
}


let currentLanguage = 'en';

document.getElementById('languageSwitcher').addEventListener('click', function (e) {
    e.preventDefault();
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    translate(currentLanguage);
    console.log('Language switched to:', currentLanguage);
});

