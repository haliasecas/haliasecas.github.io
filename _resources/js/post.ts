const mentionsSection = document.getElementById("mentions")

const title = document.createElement("h2")

title.appendChild(document.createTextNode("Webmentions"))
addClass(title, ["title", "is-2"])

if (mentionsSection) {
	mentionsSection.appendChild(title)
}
