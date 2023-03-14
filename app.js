let titulos = document.querySelectorAll(".title");

let texto = document.querySelector(".text");
let ps = document.querySelectorAll("p");
let img_direccion = document.querySelectorAll(".icon")[0];
let img_correo = document.querySelectorAll(".icon")[1];
let img_telefono = document.querySelectorAll(".icon")[2];
let iconRedes = document.querySelectorAll("i");
let labels = document.querySelectorAll("label");
let boton = document.querySelector(".btn");

titulos[0].insertAdjacentHTML("beforeend", "Mantengámonos en Contacto");
titulos[1].insertAdjacentHTML("beforeend","Contáctanos");
img_direccion.src ="img/location.png";
img_correo.src="img/email.png" ;
img_telefono.src="img/phone.png";
ps[0].insertAdjacentHTML("beforeend","Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepedolorum adipisci recusandae praesentium dicta!");
ps[1].insertAdjacentHTML("beforeend","Piedecuesta - Santander");
ps[2].insertAdjacentHTML("beforeend","correo@direccion.com");
ps[3].insertAdjacentHTML("beforeend","123-456-789");
ps[4].insertAdjacentHTML("beforeend","Conéctate con Nosotros :");

iconRedes[0].classList.add("fa-facebook-f");
iconRedes[1].classList.add("fa-twitter");
iconRedes[2].classList.add("fa-instagram");
iconRedes[3].classList.add("fa-linkedin-in");

labels[0].insertAdjacentHTML("beforeend","Usuario");
labels[1].insertAdjacentHTML("beforeend","Correo Electrónico");
labels[2].insertAdjacentHTML("beforeend","Teléfono");
labels[3].insertAdjacentHTML("beforeend","Mensaje");

boton.value = "Enviar";
