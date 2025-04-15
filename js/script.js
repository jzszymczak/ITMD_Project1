document.addEventListener("DOMContentLoaded", () => {
  const images = ["extras/computer.jpg", "extras/computer2.jpg",];

  let index = 0;
  const imageElement = document.getElementById("pic-slider");

  function updateImage() {
    imageElement.src = images[index];
  }

  document.getElementById("back").addEventListener("click", () => {
    index = (index -1 + images.length) % images.length;
    updateImage();
  })

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImage();
  })
})

