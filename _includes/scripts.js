const initializeSiteInteractions = () => {

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

    const contactModal = document.getElementById('contact-modal');
    const contactTriggers = Array.prototype.slice.call(document.querySelectorAll('[data-contact-modal-open]'), 0);
    const contactClosers = contactModal ? Array.prototype.slice.call(contactModal.querySelectorAll('[data-contact-modal-close]'), 0) : [];

    if (contactModal && contactTriggers.length) {
        const openContactModal = (trigger) => {
            contactModal.classList.add('is-active');
            document.documentElement.classList.add('is-clipped');
            contactModal.setAttribute('aria-hidden', 'false');
            if (trigger) {
                trigger.setAttribute('aria-expanded', 'true');
                contactModal.dataset.returnFocus = 'true';
                contactModal._trigger = trigger;
            }

            const firstInput = contactModal.querySelector('#contact-demo-name');
            if (firstInput) {
                firstInput.focus();
            }
        };

        const closeContactModal = () => {
            contactModal.classList.remove('is-active');
            document.documentElement.classList.remove('is-clipped');
            contactModal.setAttribute('aria-hidden', 'true');
            if (contactModal._trigger) {
                contactModal._trigger.setAttribute('aria-expanded', 'false');
                contactModal._trigger.focus();
            }
            contactModal._trigger = null;
        };

        contactTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                openContactModal(trigger);
            });
        });

        contactClosers.forEach((closer) => {
            closer.addEventListener('click', () => {
                closeContactModal();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && contactModal.classList.contains('is-active')) {
                closeContactModal();
            }
        });
    }

};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSiteInteractions);
} else {
    initializeSiteInteractions();
}