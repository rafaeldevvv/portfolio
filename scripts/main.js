const mainMenu = document.querySelector("#main-menu");
const mainMenuToggle = document.querySelector("#main-menu-toggle");
const header = document.querySelector("header");

function toggleMainMenu(boolean) {
   const message = boolean ? "Close main menu" : "Open main menu";
   const nextIcon = boolean ? "fa-xmark" : 'fa-bars';
   const previousIcon = !boolean ? "fa-xmark" : "fa-bars";

   const iconDOM = mainMenuToggle.getElementsByClassName("icon")[0];
   iconDOM.classList.replace(previousIcon, nextIcon);
   const spanSrOnly = mainMenuToggle.getElementsByClassName("sr-only")[0];
   spanSrOnly.textContent = message;

   if (boolean) {
      header.classList.add("show-nav");
   } else {
      header.classList.remove("show-nav");
   }

   mainMenuToggle.setAttribute("aria-label", message);
   mainMenuToggle.setAttribute("title", message);
   mainMenuToggle.setAttribute("aria-expanded", boolean);
}

mainMenuToggle.addEventListener("click", () => {
   const expanded = mainMenuToggle.getAttribute("aria-expanded");
   const isExpanded = expanded === 'true';

   toggleMainMenu(!isExpanded);
});

const mainMenuLinks = document.querySelectorAll("#main-menu a");
mainMenuLinks.forEach(l => {
   l.addEventListener("click", () => toggleMainMenu(false));
})