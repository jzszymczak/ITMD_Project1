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

//Google Map API
function initMap() {
  const location = { lat:41.83673948259765, lng: -87.62601463238548 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE,
      ],
    },  
  });

  new google.maps.Marker({
    position: location, 
    map: map,
    title: "IIT Campus"
  });
}