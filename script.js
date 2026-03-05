const links = Array.from(document.querySelectorAll(".menu-link"));
let current = 2; // starts on SCENE SELECTIONS like the screenshot

function clearActive() {
  links.forEach((link) => {
    link.style.filter = "";
  });
}

function setActive(index) {
  clearActive();
  links[index].style.filter = "brightness(1.08)";
}

setActive(current);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    current = (current - 1 + links.length) % links.length;
    setActive(current);
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    current = (current + 1) % links.length;
    setActive(current);
  }

  if (e.key === "Enter") {
    e.preventDefault();
    links[current].click();
  }
});
