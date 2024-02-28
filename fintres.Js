// Array para almacenar los chat disponibles
let chats = [];

// Función para listar los chats disponibles
function listarChats() {
  console.log("Chats disponibles:");
  for (let i = 0; i < chats.length; i++) {
    console.log(`ID: ${chats[i].id} - Nombre: ${chats[i].nombre} - Descripción: ${chats[i].descripcion}`);
  }
}

// Función para agregar un chat al catálogo
function agregarChat(nombre, descripcion) {
  const nuevoChat = {
    id: chats.length + 1,
    nombre: nombre,
    descripcion: descripcion
  };
  chats.push(nuevoChat);
  console.log("Chat agregado con éxito.");
}

// Función para eliminar un chat del catálogo
function eliminarChat(idChat) {
  const chatIndex = chats.findIndex(chat => chat.id === idChat);
  if (chatIndex !== -1) {
    chats.splice(chatIndex, 1);
    console.log("Chat eliminado con éxito.");
  } else {
    console.log("No se encontró ningún chat con ese ID.");
  }
}

// Ejemplo de uso
agregarChat("Chat 1", "Descripción del chat 1");
agregarChat("Chat 2", "Descripción del chat 2");
listarChats();
eliminarChat(2);
listarChats();