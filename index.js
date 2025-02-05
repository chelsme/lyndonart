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

let paintings = ["abstract-1.jpg", "abstract-2.jpg", "indian-pilgrim.jpg", "butterfly.jpg", "candlelight_mural.jpg", "chelsea.jpg", "creation-of-planets.jpg", "hippies.jpg", "island-heads.jpg", "lady_w_guitar.jpg", "mermaid-large.jpg", "moon-party.jpg", "narcissist-large.jpg", "numbers.jpg", "red-circles.jpg", "robot-color.jpg", "skater.jpg", "self-portrait.jpg", "sheila-portrait.jpg", "sight.jpg", "sirens.jpg", "super-girl.jpg", "uncle-sam.jpg", "uninvited.jpg", "victor-colorado.jpg", "windy-woman.jpg", "wrestling_w_demons.jpg"]
let cgi = ["airco.jpg", "circles.jpg", "clubcameron-large.jpg", "cybergenic.jpg", "drivers-large.jpg", "epv-peeps-large.jpg", "gardener.jpg", "hotguitar-large.jpg", "hr_olympics.jpg", "hrolympiciconsfin-large.jpg", "mosquito.jpg", "my-peeps-large.jpg", "arctic-package.jpg", "desert-package.jpg", "storminnormans-large.jpg", "superman.jpg", "tune-wrangler.jpg", "unique_corner.jpg", "valentine-large.jpg", "5_icons_OTC.jpg", "invite_OTC_cover.jpg", "invite_OTC_outside.jpg", "invite_OTC_inside.jpg"]
let drawings = ["animals.jpg", "another-card.jpg", "archetypes.jpg", "building.jpg", "horns.jpg", "playing-card.jpg", "rapture.jpg", "robot.jpg", "santa.jpg"]
let illustrations = ["a-boy-and-his-crab.jpg", "carousel.jpg", "cowboy.jpg", "cowboy_santa.jpg", "dreamhouse.jpg", "highways-of-life.jpg", "hng.jpg", "house.jpg", "houston-rodeo.jpg", "jeepstakes.jpg", "majic.jpg"]

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