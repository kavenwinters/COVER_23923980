const links = Array.from(document.querySelectorAll(".item"));
let current = 2; // SCENE SELECTIONS

function setActive(i) {
  links.forEach(link => {
    link.style.filter = "";
  });
  if (links[i]) {
    links[i].style.filter = "brightness(1.08)";
  }
}

setActive(current);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    current = (current - 1 + links.length) % links.length;
    setActive(current);
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    current = (current + 1) % links.length;
    setActive(current);
  } else if (e.key === "Enter") {
    e.preventDefault();
    links[current].click();
  }
});
