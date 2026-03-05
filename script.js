// Optional: simple keyboard navigation to feel like a DVD menu.
// Up/Down highlights items; Enter follows the link.

const links = Array.from(document.querySelectorAll(".menu a.menu-item"));
let index = 0;

// Start with PLAY MOVIE highlighted (matches screenshot)
index = Math.max(0, links.findIndex(a => a.classList.contains("is-highlight")));

function clearHighlight() {
  links.forEach(a => a.style.filter = "");
  links.forEach(a => a.dataset.kb = "0");
}

function setHighlight(i) {
  clearHighlight();
  const a = links[i];
  a.dataset.kb = "1";
  a.style.filter = "brightness(1.08)";
}

setHighlight(index);

window.addEventListener("keydown", (e) => {
  if (["ArrowUp", "ArrowDown", "Enter"].includes(e.key)) e.preventDefault();

  if (e.key === "ArrowUp") {
    index = (index - 1 + links.length) % links.length;
    setHighlight(index);
  } else if (e.key === "ArrowDown") {
    index = (index + 1) % links.length;
    setHighlight(index);
  } else if (e.key === "Enter") {
    links[index].click();
  }
});
