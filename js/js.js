// Obtener los elementos del DOM
const button_kids = document.getElementById("button_kids");
const button_children = document.getElementById("button_children");
const button_young = document.getElementById("button_young");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");

content1.style.display = "block";
content2.style.display = "none";
content3.style.display = "none";

// Agregar eventos a los botones
button_kids.addEventListener("click", () => {
  // Mostrar el contenido del botón 1 y ocultar los otros
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
});

button_children.addEventListener("click", () => {
  // Mostrar el contenido del botón 2 y ocultar los otros
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
});

button_young.addEventListener("click", () => {
  // Mostrar el contenido del botón 3 y ocultar los otros
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
});
