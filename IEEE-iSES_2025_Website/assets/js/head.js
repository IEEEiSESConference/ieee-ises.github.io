// head.js
function loadHead() {
    fetch('../../head.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('head-placeholder').innerHTML = data;
      });
}
