const links = Array.from(document.querySelectorAll(".row"));
let current = 0;

function highlight(i){
  links.forEach(a => a.style.filter = "");
  links[i].style.filter = "brightness(1.08)";
}
highlight(current);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp"){
    e.preventDefault();
    current = (current - 1 + links.length) % links.length;
    highlight(current);
  } else if (e.key === "ArrowDown"){
    e.preventDefault();
    current = (current + 1) % links.length;
    highlight(current);
  } else if (e.key === "Enter"){
    e.preventDefault();
    links[current].click();
  }
});
