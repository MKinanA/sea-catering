document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[href^="#"]').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (element instanceof HTMLAnchorElement) {event.preventDefault();};
            document.getElementById(element.getAttribute('href').substring(1)).scrollIntoView();
            if (element instanceof HTMLAnchorElement) {return false;};
        });
    });
});