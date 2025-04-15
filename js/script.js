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
  const location = { lat: 41.83673948259765, lng: -87.62601463238548 };
  const climbGym = { lat: 41.945534641482034, lng:-87.71038545605438};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  
  const infoWindow1 = new google.maps.InfoWindow({
    content: "<h3>Illinois Tech</h3><p>This is where I go to school</p>",
  });
  const infoWindow2 = new google.maps.InfoWindow({
    content: "<h3>First Ascent</h3><p>This is the climbing gym I go to</p>",
  });

  const schoolMarker = new google.maps.Marker({
    position: location, 
    map: map,
    title: "IIT Campus",
    icon:  {
      url: "extras/building.svg",
      scaledSize: new google.maps.Size(32,32)
    }
  });

  const gymMarker = new google.maps.Marker({
    position: climbGym,
    map: map,
    title: "First Ascent",
    icon: {
      url: "extras/fitness-centre.svg",
      scaledSize: new google.maps.Size(32,32)
    }
  });

  schoolMarker.addListener("click", () => {
    infoWindow1.open(map, schoolMarker);
  });

  gymMarker.addListener("click", () => {
    infoWindow2.open(map, gymMarker);
  })
}