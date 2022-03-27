const grid = document.querySelector(".grid");
let html = '';

for (let i=1; i<=12; i++) {
  html += `<div class="item item-${i}"><img src="../images/thumbnails/${i}.jpg"></div>`;
}

grid.innerHTML = html;

