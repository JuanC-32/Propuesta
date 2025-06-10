
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('index-screen').style.display = 'flex';
}

function loadLevel(level) {
    alert('Nivel ' + level + ' completado con amor 💖');
    if (level === 3) {
        document.getElementById('index-screen').style.display = 'none';
        document.getElementById('final-screen').style.display = 'flex';
    }
}

function triggerFinal() {
    alert("¡Sí! 💍🎉");
    lanzarCorazones();
}

function lanzarCorazones() {
    const cantidad = 50;
    for (let i = 0; i < cantidad; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

// Mostrar eventos de la línea de tiempo al hacer scroll
function showTimelineEventsOnScroll() {
    const events = document.querySelectorAll(".event");

    const showOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        events.forEach(event => {
            const boxTop = event.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                event.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    window.addEventListener("load", showOnScroll);
}

showTimelineEventsOnScroll();


