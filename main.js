/**Toggle Theme Button **/
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
              const storedTheme = getStoredTheme();
              if (storedTheme) {
                            return storedTheme;
                        }
              return 'light'; // Default to light theme
          };

    const setTheme = theme => {
              document.documentElement.setAttribute('data-bs-theme', theme);
          };

    const toggleTheme = () => {
              const currentTheme = getStoredTheme() || getPreferredTheme();
              const newTheme = currentTheme === 'light' ? 'dark' : 'light';
              setStoredTheme(newTheme);
              setTheme(newTheme);
          };

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    window.addEventListener('DOMContentLoaded', () => {
              const preferredTheme = getPreferredTheme();
              setTheme(preferredTheme);
          })

document.querySelectorAll('[data-bs-target="#imageModal"]').forEach((trigger, index) => {
    trigger.addEventListener('click', (e) => {
        const carousel = document.querySelector('#carouselExample');
        const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
        bsCarousel.to(index); // Move carousel to clicked image
    });
});

document.querySelectorAll('[data-bs-target="#imageModal2"]').forEach((trigger, index) => {
    trigger.addEventListener('click', (e) => {
        const carousel = document.querySelector('#carouselExample2');
        const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
        bsCarousel.to(index); // Move carousel to clicked image
    });
});

document.querySelectorAll('[data-bs-target="#imageModal3"]').forEach((trigger, index) => {
    trigger.addEventListener('click', (e) => {
        const carousel = document.querySelector('#carouselExample3');
        const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
        bsCarousel.to(index); // Move carousel to clicked image
    });
});
