const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty('--px', x);
    hero.style.setProperty('--py', y);
    hero.style.setProperty('--tx', `${x * 10}px`);
    hero.style.setProperty('--ty', `${y * 10}px`);
    hero.style.setProperty('--rot', `${x * 2}deg`);
    hero.style.setProperty('--roty', `${-y * 2}deg`);
    hero.style.setProperty('--bgx', `${x * 20}px`);
    hero.style.setProperty('--bgy', `${y * 20}px`);
    const before = hero.querySelector('::before');
});

const style = document.createElement('style');
style.innerHTML = `.hero::before{ transform: translate(var(--bgx,0), var(--bgy,0)); }`;
document.head.appendChild(style);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
    });
});


VANTA.CELLS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color1: 0xff7a00,
    color2: 0x000000,
    size: 1.2,
    speed: 0.6
});

