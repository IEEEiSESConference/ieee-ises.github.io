function loadLogo() {
    fetch('../../logo.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('logo-placeholder').innerHTML = data;
      });
}