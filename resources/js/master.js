document.addEventListener('DOMContentLoaded', function(event) {
  let resizeEnd = new Event('resizeEnd');

  changeScreen();

  window.addEventListener('resize', function(event) {
    if (window.resizeTO) {
      clearTimeout(window.resizeTO);
    }
    window.resizeTO = setTimeout(function() {
      window.dispatchEvent(resizeEnd);
    }, 50);
  });

  window.addEventListener('resizeEnd', changeScreen, false);

  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    $notification = $delete.parentNode;
    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});

function showColorPicker(evt) {
  evt.preventDefault();
  toggleClass(document.getElementById('colorPicker'), "is-invisible");
}

function toggleClass(element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf(className);

    if (i >= 0) classes.splice(i, 1);
    else classes.push(className);
    element.className = classes.join(" ");
  }
}

function changeScreen() {
  let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  let items;

  document.querySelectorAll('.mobile-separator').forEach(function(it) {
    it.style.display = width < 768 ? 'inline' : 'none';
  });
}

function createCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = ';expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + ';path=/';
}

function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeClass(element, name) {
  element.classList.remove(name);
}

function addClass(element, name) {
  if (element.classList) {
    element.classList.add(name);
  }
  else {
    var arr = element.className.split(' ');
    if (arr.indexOf(name) == -1) {
      element.className += ' ' + name;
    }
  }
}

function eraseCookie(name) {
  createCookie(name, '', -1);
}

function showElement(element) {
  if (element) element.classList.remove('is-hidden');
}

function hideElement(element) {
  if (element) element.classList.add('is-hidden');
}

function destroyElement(element) {
  if (element) element.remove();
}

