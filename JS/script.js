document.addEventListener('DOMContentLoaded', function () {
  /* Modal Profile */
  const profileLink = document.querySelector('a[href="#"][aria-label="Profile"], nav ul li:last-child a');
  const modal = document.getElementById('profileModal');
  const closeBtn = document.getElementById('closeProfileModal');

  if (profileLink && modal && closeBtn) {
    profileLink.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  /* Hamburger Menu */
  const hamburger = document.getElementById('hamburger-menu');
  const navUl = document.querySelector('nav ul');

  if (hamburger && navUl) {
    hamburger.addEventListener('click', function () {
      navUl.classList.toggle('active');
      hamburger.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  }

  /* Spinner */
  window.addEventListener('load', function () {
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('button-box').style.display = 'block';
    }, 1000);
  });

  /* Progress Bars */
  const progressBoxes = document.querySelectorAll('.ac-progress-box');

  progressBoxes.forEach(box => {
    const creditText = box.querySelector('.total-credits')?.textContent.trim();
    const progressBar = box.querySelector('.ac-progress-bar');
    const progressText = box.querySelector('.progress-bar-text');

    if (creditText && progressBar && progressText) {
      const [completed, total] = creditText.split('/').map(n => parseInt(n.trim(), 10));
      const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}% Completed`;
    }
  });
});
