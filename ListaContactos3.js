let listacontactos3 = [
  {
    id: 1,
    nombres: "Vanessa",
    apellidos: "Forero Olarte",
    telefono: "3144546802",
    ubicaciones: [{ ciudad: "Cota", direccion: "Parcela 53" }],
  },
  {
    id: 2,
    nombres: "Santiago",
    apellidos: "Forero Olarte",
    telefono: "3122555329",
    ubicaciones: [{ ciudad: "Villadeleyva", direccion: "Plaza Central" }],
  },
  {
    id: 3,
    nombres: "Luz Marina",
    apellidos: "Olarte Zuluaga",
    telefono: "3124132847",
    ubicaciones: [{ ciudad: "Villadeleyva", direccion: "Plaza Central" }],
  },
  {
    id: 4,
    nombres: "Cindy Rocio",
    apellidos: "Vargas Forero",
    telefono: "3023526845",
    ubicaciones: [{ ciudad: "Medellin", direccion: "Rionegro" }],
  },
];

function agregarcontacto(contacto) {
  listacontactos3.push(contacto);
}

function borrarcontacto(id) {
  listacontactos3 = listacontactos3.filter((contacto) => contacto.id !== id);
}

function imprimircontactos() {
  console.log("Lista de contactos:");
  listacontactos3.forEach((contacto, indice) => {
    console.log(
      `${indice + 1}. ${contacto.nombres} ${contacto.apellidos}, Teléfono: ${
        contacto.telefono
      }`
    );
    contacto.ubicaciones.forEach((ubicacion, indiceUbicacion) => {
      console.log(
        `   Ubicación ${indiceUbicacion + 1}: ${ubicacion.ciudad}, ${
          ubicacion.direccion
        }`
      );
    });
  });
}

function actualizarcontacto(id, actualizaciones) {
  let indiceContacto = listacontactos3.findIndex(
    (contacto) => contacto.id === id
  );

  if (indiceContacto === -1) {
    return false;
  }

  listacontactos3[indiceContacto] = {
    ...listacontactos3[indiceContacto],
    ...actualizaciones,
  };

  return true;
}

agregarcontacto({
  id: 5,
  nombres: "Juan Carlos",
  apellidos: "García",
  telefono: "3005456985",
  ubicaciones: [{ ciudad: "Cota", direccion: "Vereda" }],
});

borrarcontacto(4);

actualizarcontacto(2, { telefono: "3128563214" });

imprimircontactos();
