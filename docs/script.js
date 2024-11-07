document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        reset: true
    });

    // Aplicar animaciones a elementos específicos
    sr.reveal('h1, h2', { delay: 200 });
    sr.reveal('p', { delay: 400 });
    sr.reveal('.proyecto', { interval: 200 });
    sr.reveal('.tech-item', { interval: 100 });
    sr.reveal('form', { delay: 600 });

    // Animación suave para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto de escritura para el título principal
    const titulo = document.querySelector('h1');
    const texto = titulo.textContent;
    titulo.textContent = '';
    let i = 0;

    function escribirTitulo() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirTitulo, 100);
        }
    }

    escribirTitulo();

    // Animación de fondo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particulas = [];
    const numeroParticulas = 100;

    class Particula {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = 'rgba(77, 208, 225, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < numeroParticulas; i++) {
            particulas.push(new Particula());
        }
    }

    function animateParticulas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particulas.length; i++) {
            particulas[i].update();
            particulas[i].draw();

            if (particulas[i].size <= 0.2) {
                particulas.splice(i, 1);
                i--;
                particulas.push(new Particula());
            }
        }
        requestAnimationFrame(animateParticulas);
    }

    init();
    animateParticulas();

    // Crear guía de navegación
    const sections = document.querySelectorAll('section');
    const navigationGuide = document.querySelector('.navigation-guide');

    sections.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('guide-dot');
        navigationGuide.appendChild(dot);
    });

    const guideDots = document.querySelectorAll('.guide-dot');

    // Función para actualizar la guía de navegación
    function updateNavigationGuide() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 3) {
                guideDots.forEach(dot => dot.classList.remove('active'));
                guideDots[index].classList.add('active');
            }
        });
    }

    // Evento de scroll para actualizar la guía de navegación
    window.addEventListener('scroll', updateNavigationGuide);

    // Inicializar la guía de navegación
    updateNavigationGuide();

    // Añadir funcionalidad de clic a los puntos de la guía
    guideDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });
});