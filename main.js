const entrada = document.querySelector(".header__input");
const gif = document.querySelector(".header__gif");
const mensaje = document.querySelector(".header__mensaje");
const compartir = document.querySelector(".footer__icon-mod");
const span = document.querySelector(".footer__span");
const spanSms = document.querySelector(".footer__copiado");

let arreglo = ["972229776", "94651944", "956456207", "930143374", "962758201", "952414598", "924489743","942290145","964308333","973511215","948769612"];

let url = "https://llamadas-spam-peru.netlify.app";

function buscar(ev) {
   let ingreso = entrada.value;
   
   if (ingreso === "") {
      alert("Ingresa un número");

   } else {
      if (arreglo.includes(ingreso)) {
         mensaje.textContent = `☠️ Número reportado como Spam`;
         mensaje.style.color = `var(--color-3)`;
   
      } else {
         mensaje.textContent = "No se encontraron coincidencias";
         mensaje.style.color = `var(--color-3)`;
   
      };
   };
};

/* Evento para que al presionar enter se ejecute la funcion "buscar" */
entrada.addEventListener("keydown", (ev) => {
   if (ev.code === "Enter") {
      buscar(ev);
   };

   if (ev.code === "Backspace") {
      mensaje.textContent = "...";
      mensaje.style.color = `var(--color-2)`;

   };
});

/* Evento para que al dar click a un boton se ejecute la funcion "buscar" */
gif.addEventListener("click", (ev) => {
   buscar(ev);
});
   
buscar;

compartir.addEventListener('click', () => {
   navigator.clipboard.writeText(url);
   //console.log(navigator.clipboard = url);
   span.style.display = "flex";
   spanSms.innerHTML = "¡Link copiado!";
   
   setTimeout(() => {
      span.style.display = "none";

   }, 4000);
});