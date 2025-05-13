

document.addEventListener("DOMContentLoaded", () => {


  const button = document.querySelector(".button");
  const menu = document.querySelector(".hide");

  function toggleMenu() {
    menu.classList.toggle("hide");
  }



  button.addEventListener("click", toggleMenu);

  function handleResize() {
  const menu = document.querySelector("nav");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
});
