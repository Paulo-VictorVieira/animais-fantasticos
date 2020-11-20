import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuLista = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];
  function openMenu() {
    menuLista.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuLista, eventos, () => {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  if (menuButton) {
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
