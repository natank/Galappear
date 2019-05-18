document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // Init carousel
  elems = document.querySelectorAll('.carousel');
  instance = M.Carousel.init(elems, {
    indicators: true,
    fullWidth: true
  });

  // Init Modal
  options = {};
  elems = document.querySelectorAll('.modal');
  instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});
