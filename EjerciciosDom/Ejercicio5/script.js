function changeClass() {
	let paragraphs = document.getElementsByTagName("p");
	let p1 = paragraphs[0];
	let p2 = paragraphs[1];

	let p1Class = p1.getAttribute("class");
	let p2Class = p2.getAttribute("class");

	p1.setAttribute("class", p2Class);
	p2.setAttribute("class", p1Class);
}
