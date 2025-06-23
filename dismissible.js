document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-to-dismiss]').forEach((element) => {
        element.addEventListener('click', (event) => {
            var toDismiss = document.querySelector(element.dataset.toDismiss);
            if (toDismiss.hasAttribute('data-on-dismiss-assign-class')) {
                toDismiss.classList.add(toDismiss.dataset.onDismissAssignClass);
            };
            setTimeout(() => {
                toDismiss.remove();
                toDismiss = null;
                delete toDismiss;
            }, toDismiss.hasAttribute('data-dismiss-delay') ? parseInt(toDismiss.dataset.dismissDelay) : 0);
        });
    });
});