baguetteBox.run('.gallery');

function search() {
  let input = document.querySelector('input').value.toLowerCase();
  let images = document.querySelectorAll('a');

  for (let i = 0; i < images.length; i++) {
    if (images[i].dataset.caption.toLowerCase().includes(input)) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
}