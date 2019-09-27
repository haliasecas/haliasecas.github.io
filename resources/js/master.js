if (localStorage.halivertsTheme && localStorage.halivertsTheme === "light") {
  removeClass(document.documentElement, "dark");
  localStorage.halivertsTheme = "light";
} else {
  localStorage.removeItem("halivertsTheme");
}

document.addEventListener("DOMContentLoaded", function() {
	var themeSwitcher = document.getElementById("theme-switcher");
	var firstSpan = themeSwitcher.getElementsByTagName("span")[0];
	var icon = firstSpan.getElementsByTagName("i")[0];

	if (localStorage.halivertsTheme && localStorage.halivertsTheme === "light") {
		addClass(icon, "fa-moon");
		removeClass(icon, "fa-sun");
		addClass(themeSwitcher, "is-dark");
		removeClass(themeSwitcher, "is-warning");
	} else {
		removeClass(icon, "fa-moon");
		addClass(icon, "fa-sun");
		removeClass(themeSwitcher, "is-dark");
		addClass(themeSwitcher, "is-warning");
	}

	removeClass(themeSwitcher, "is-invisible");

	let resizeEnd = new Event("resizeEnd");

	changeScreen();

	window.addEventListener("resize", function() {
		if (window.resizeTO) {
			clearTimeout(window.resizeTO);
		}
		window.resizeTO = setTimeout(function() {
			window.dispatchEvent(resizeEnd);
		}, 50);
	});

	window.addEventListener("resizeEnd", changeScreen, false);

	(document.querySelectorAll(".notification .delete") || []).forEach(
		$delete => {
			$notification = $delete.parentNode;
			$delete.addEventListener("click", () => {
				$notification.parentNode.removeChild($notification);
			});
		}
	);
});

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
	let width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	document.querySelectorAll(".mobile-separator").forEach(function(it) {
		it.style.display = width < 768 ? "inline" : "none";
	});
}

function createCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = ";expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + expires + ";path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1, c.length);
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
	} else {
		var arr = element.className.split(" ");
		if (arr.indexOf(name) === -1) {
			element.className += " " + name;
		}
	}
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

function showElement(element) {
	if (element) element.classList.remove("is-hidden");
}

function hideElement(element) {
	if (element) element.classList.add("is-hidden");
}

function destroyElement(element) {
	if (element) element.remove();
}

function hasClass(element, name) {
	if (element.classList) {
		return element.classList.contains(name);
	} else {
		var classes = element.className.split(" ");
		var i = classes.indexOf(name);
		return i >= 0;
	}
}

const closeAllNavbars = () => {
	var $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach(function($el) {
			var target = $el.dataset.target;
			var $target = document.getElementById(target);
			removeClass($el, "is-active");
			removeClass($target, "is-active");
		});
	}
};
