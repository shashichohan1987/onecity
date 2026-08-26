(function () {
  var burgerTrigger = document.getElementById('burgerTrigger');
  var sideMenu = document.getElementById('sideMenu');
  var sideMenuClose = document.getElementById('sideMenuClose');

  function openSideMenu() { sideMenu.classList.add('is-open'); }
  function closeSideMenu() { sideMenu.classList.remove('is-open'); }

  if (burgerTrigger) burgerTrigger.addEventListener('click', openSideMenu);
  if (sideMenuClose) sideMenuClose.addEventListener('click', closeSideMenu);

  var searchTrigger = document.getElementById('searchTrigger');
  var calendarTrigger = document.getElementById('calendarTrigger');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchOverlayClose = document.getElementById('searchOverlayClose');

  function openSearch() { searchOverlay.classList.add('is-open'); }
  function closeSearch() { searchOverlay.classList.remove('is-open'); }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (calendarTrigger) calendarTrigger.addEventListener('click', openSearch);
  if (searchOverlayClose) searchOverlayClose.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSideMenu();
      closeSearch();
    }
  });

  var scrollButtons = document.querySelectorAll('.scroll-btn');
  scrollButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.dataset.target);
      if (!target) return;
      var dir = parseInt(btn.dataset.dir, 10);
      var amount = target.clientWidth * 0.8 * dir;
      target.scrollBy({ left: amount, behavior: 'smooth' });
    });
  });
})();
