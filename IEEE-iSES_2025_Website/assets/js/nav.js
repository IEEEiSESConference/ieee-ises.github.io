// nav.js
function loadNav() {
    fetch('../../nav.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('nav-placeholder').innerHTML = data;
          setActiveNav();
      });
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('#nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current');
        }
    });
}
