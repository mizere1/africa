document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });

        document.addEventListener('click', (e) => {
            if (navLinks.style.display === 'flex' && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.style.display = 'none';
            }
        });
    }

    // Modal logic
    const userManagementBtn = document.getElementById('user-management-btn');
    const modal = document.getElementById('user-management-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (userManagementBtn && modal && closeBtn) {
        userManagementBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});
