let listadecontactos = [
  "Vanessa Forero",
  "Santiago Forero",
  "Liam Garcia",
  "Juan Carlos Garcia",
];

function agregarcontacto(nombrecompleto) {
  listadecontactos.push(nombrecompleto);
}

function borrarcontacto(nombrecompleto) {
  let id = listadecontactos.indexOf(nombrecompleto);
  if (id !== -1) {
    listadecontactos.splice(id, 1);
  }
}

function imprimircontactos() {
  console.log("Lista de contactos:");
  listadecontactos.forEach((contacto, id) => {
    console.log(`${id + 1}. ${contacto}`);
  });
}

agregarcontacto("Oswaldo Forero");
imprimircontactos();

borrarcontacto("Santiago Forero");
imprimircontactos();
