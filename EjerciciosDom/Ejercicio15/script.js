let titles = document.getElementsByClassName("list__item");

for (let i = 0; i < titles.length - 1; i++) {
    
    let submenu = titles[i].children[0];
    
    titles[i].onclick = function () {
        for (let item of submenu.children) {
            let display = item.style.display;
            display !== "block" ? item.style.display = "block" : item.style.display = "";

        }
    }
}
