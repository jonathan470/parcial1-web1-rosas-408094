const routes = {
  home: 'views/home.html',
  about: 'views/about.html',
  photos: 'views/photos.html',
  boxes: 'views/boxes.html'
};

function loadContent(route) {
  const path = routes[route] || routes.home;
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app-content').innerHTML = html;
    });
}

window.addEventListener('hashchange', () => {
  const route = location.hash.slice(1);
  loadContent(route);
});

window.addEventListener('DOMContentLoaded', () => {
  const route = location.hash.slice(1) || 'home';
  loadContent(route);
});
