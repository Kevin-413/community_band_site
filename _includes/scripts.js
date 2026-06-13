// Allows the navbar burger menu to be populated
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

    // Explicitly initialize and start the homepage carousel so autoplay is reliable.
    const carouselEl = document.querySelector('.carousel');
    if (carouselEl && typeof Flickity !== 'undefined') {
        const existing = Flickity.data(carouselEl);
        const flkty = existing || new Flickity(carouselEl, {
            setGallerySize: true,
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            autoPlay: 4500,
            wrapAround: true,
            pauseAutoPlayOnHover: false
        });
        flkty.playPlayer();
    }

});