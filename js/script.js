//Esto hace que el nav quede fijo cuando se scrollea
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

//Esto hace que el nav se despliegue cuando se presiones el menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//Esto hace que el formulario se envíe a mi mail
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// async function handleSubmit(e) {
//   e.preventDefault();
//   const form = new FormData(this);
//   const response = await fetch(this.action, {
//     method: this.method,
//     body: form,
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   if (response.ok) {
//     this.reset();
//     alert("Gracias por contactarte, pronto me comunico con vos!");
//   }
// }
