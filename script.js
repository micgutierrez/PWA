document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('a[href="#"][aria-label="Profile"], nav ul li:last-child a');
    const modal = document.getElementById('profileModal');
    const closeBtn = document.getElementById('closeProfileModal');

    if (profileLink && modal && closeBtn) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    const hamburger = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');
    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
});