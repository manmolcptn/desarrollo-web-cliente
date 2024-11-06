const COLORS = [
	"#2657EB",
	"#7326EB",
	"#3326EB",
	"#0F8CEB"
];

let tds = document.getElementsByTagName("td");

function changeColor(COLORS) {
	let i = 0;
	for (td of tds) {
		td.onclick = function() {
			this.style.backgroundColor = COLORS[i++];
			if (i === COLORS.length - 1) i = 0;
		}
	}
}
changeColor(COLORS);
