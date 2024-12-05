const entrada = document.querySelector(".header__input");
const gif = document.querySelector(".header__gif");
const mensaje = document.querySelector(".header__mensaje");
const seccionSpam = document.querySelector(".section1__spam");
const trash = document.querySelector(".header__trash");

const compartir = document.querySelector(".footer__icon-mod");
const span = document.querySelector(".footer__span");
const spanSms = document.querySelector(".footer__copiado");

let ingreso;
let url = "https://llamadas-spam-peru.netlify.app";

let arreglo = [972229776, 94651944, 956456207, 930143374, 962758201, 952414598, 924489743, 942290145, 964308333, 973511215];

//----- Agregando números spam al DOM ----
arreglo.forEach(spam => {
   seccionSpam.insertAdjacentHTML('beforeend', `<span class="section1__nro">${spam}</span>`);
});

//----- Buscador -----
const nrosVisibles = document.querySelectorAll(".section1__nro");

function buscar() {
   ingreso = entrada.value.trim();

   if (ingreso === "") {
      mensaje.textContent = "...";
      entrada.value = "";
      entrada.focus();
      nrosVisibles.forEach(nros => {
         nros.style.display = "flex";
      });
      return
   }
   
   mensaje.textContent = "No se encontraron coincidencias";
   
   nrosVisibles.forEach(nro => {
      nro.style.display = "none";

      if (nro.textContent.includes(ingreso)) {
         nro.style.display = "flex";
         mensaje.textContent = "Coincidencias encontradas";
         
      };
   });
};

//----Limpiar buscador----
function clean() {
   nrosVisibles.forEach(nros => {
      mensaje.textContent = "...";
      entrada.value = "";
      entrada.focus();
      nros.style.display = "flex";

   });
}

entrada.addEventListener("input", buscar);
trash.addEventListener("click", clean);

//-----  formulario -----

/* const formulario = document.querySelector(".form");
const inputs = document.querySelectorAll(".form [required]");
const enviar = document.querySelector(".form__enviar");

inputs.forEach(input =>  {
   const crearSpan = document.createElement("span");
   crearSpan.id = input.name;
   crearSpan.textContent = input.title;
   crearSpan.classList.add("form__error", "none");
   input.insertAdjacentElement('afterend', crearSpan);

});

document.addEventListener("keyup", (e) => {
   if (e.target.matches(".form [required]")) {
      let valorInput = e.target,
      patern = valorInput.pattern || valorInput.dataset.pattern;
      console.log(valorInput, patern);

      if (patern && valorInput.value !== "") {
         let regex = new RegExp(patern);

         return !regex.exec(valorInput.value)
         ? document.getElementById(valorInput.name).classList.add("active")
         : document.getElementById(valorInput.name).classList.remove("active");
      };

      if (!patern) {
         return valorInput.value === ""
         ? document.getElementById(valorInput.name).classList.add("active")
         : document.getElementById(valorInput.name).classList.remove("active");
      };
   };
});

enviar.addEventListener("submit", (e) => {
   formulario.reset();

}); */


compartir.addEventListener("click", () => {
   navigator.clipboard.writeText(url);
   span.style.display = "flex";
   spanSms.textContent = "Url copiado para compartir";

   setTimeout(() => {
      span.style.display = "none";
      spanSms.textContent = "";
      
   }, 5000);
});