// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hamburger Menu Logic ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu saat tombol burger diklik
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Sembunyikan menu saat salah satu link diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });


    // --- 2. Scroll Animation (Intersection Observer) ---
    // Efek fade-in saat elemen masuk ke dalam layar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Animasi mulai saat 15% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' yang ada di style.css
                entry.target.classList.add('visible');
                // Hentikan observasi setelah animasi selesai agar tidak berulang
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Terapkan observer ke semua elemen dengan class 'fade-in-up'
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

});
