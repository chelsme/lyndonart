window.onload = () => {
  loadPaintings()
  loadCGI()
  loadDrawings()
  loadIllustrations()
}

window.addEventListener("DOMContentLoaded", function () {
  let closeButton = document.getElementById("close");
  closeButton.addEventListener("click", closeModal);
});

let paintings = ["abstract-1.jpg", "abstract-2.jpg", "basketball.jpg", "butterfly-large.jpg", "butterfly-mural.jpg", "chelsea.jpg", "creation-of-planets.jpg", "flying-woman.jpg", "hippies.jpg", "island-heads.jpg", "mermaid-large.jpg", "moon.jpg", "mythical-music.jpg", "narcissist-large.jpg", "ocean.jpg", "red-circles.jpg", "roller-skater.jpg", "selfportrait-large.jpg", "sheilaportrait-large.jpg", "uncle-sam.jpg", "uninvited-large.jpg", "victor-colorado.jpg", "windy-woman.jpg", "wresting_with_demons.jpg"]
let cgi = ["airco.jpg", "circles.jpg", "clubcameron-large.jpg", "drivers-large.jpg", "epv-peeps-large.jpg", "hotguitar-large.jpg", "hrolympiciconsfin-large.jpg", "mosquito.jpg", "my-peeps-large.jpg", "package-arctic.jpg", "package-desert.jpg", "storminnormans-large.jpg", "tune-wrangler.jpg", "valentine-large.jpg"]
let drawings = ["animals.jpg", "another-card.jpg", "archetypes.jpg", "building.jpg", "horns.jpg", "playing-card.jpg", "robot.jpg", "santa.jpg"]
let illustrations = ["a-boy-and-his-crab.jpg", "carousel.jpg", "cowboy.jpg", "highways-of-life.jpg", "hng.jpg", "houston-rodeo.jpg", "jeepstakes.jpg", "music.jpg", "unique-corner.jpg"]

const loadPaintings = () => {
  var src = document.getElementById("painting");
  paintings.forEach(image => {
    var img = document.createElement("img");
    img.src = `images/paintings/${image}`;
    img.className = "galleryimg";
    img.addEventListener("click", () => clickOnImage(`images/paintings/${image}`));
    src.appendChild(img);
  });
}

const loadCGI = () => {
  var src = document.getElementById("cgi");
  cgi.forEach(image => {
    var img = document.createElement("img");
    img.src = `images/cgi/${image}`;
    img.className = "galleryimg";
    img.addEventListener("click", () => clickOnImage(`images/cgi/${image}`));
    src.appendChild(img);
  });
}

const loadDrawings = () => {
  var src = document.getElementById("drawings");
  drawings.forEach(image => {
    var img = document.createElement("img");
    img.src = `images/drawings/${image}`;
    img.className = "galleryimg";
    img.addEventListener("click", () => clickOnImage(`images/drawings/${image}`));
    src.appendChild(img);
  });
}

const loadIllustrations = () => {
  var src = document.getElementById("illustrations");
  illustrations.forEach(image => {
    var img = document.createElement("img");
    img.src = `images/illustrations/${image}`;
    img.className = "galleryimg";
    img.addEventListener("click", () => clickOnImage(`images/illustrations/${image}`));
    src.appendChild(img);
  });
}

const clickOnImage = (image) => {
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
  let modal = document.getElementById("modal");
  var img = document.createElement("img");
  img.src = image;
  img.classList.add("modal-img");
  modal.appendChild(img);
  modal.style.display = 'flex';
}

const closeModal = () => {
  let body = document.querySelector("body");
  body.style.overflow = "unset";
  let modal = document.getElementById("modal");
  modal.style.display = 'none';
  modal.removeChild(modal.lastChild)
}