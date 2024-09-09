import { ListaCostoFijo } from './listaCostoFijo.js';
// Instanciar la lista

const listaObjetosCostoFijo = new ListaCostoFijo();
// Selecciona la tabla específica
const table = document.getElementById('myTable');

// Obtenemos los inputs
const inputs = table.querySelectorAll('input');
for (let input of inputs) {
  // Asignacion a los inputs el evento.
  input.addEventListener('blur', () => {
    const row = input.closest('tr');
    const rowInputs = row.querySelectorAll('input');
    // Obtener el índice de la fila dentro del tbody
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    // Si esta dentro de la lista se manda a editar
    rowInputs[3].value = Number(rowInputs[2].value) * Number(rowInputs[1].value);
    if (listaObjetosCostoFijo.obtenerLista.length - 1 >= rowIndex) {
      console.log('Se mando a editar');
      let valores = [rowInputs[0].value, rowInputs[1].value, rowInputs[2].value];
      // Mando a editar los valores
      listaObjetosCostoFijo.editarLista(rowIndex, valores);
      // De lo contrario se mandara a crear en la lista.
    } else {
      console.log('Se mando a crear');
      let valores = [0, rowInputs[0].value, rowInputs[1].value, rowInputs[2].value];
      // Mando a crear el nuevo valor.
      listaObjetosCostoFijo.creacionesElemento(valores);
    }
  });
}

/**
 * Funcion que me va a servir para crear una nueva fila en la tabla
 */
function crearNuevaFilaUITabla() {

}

// Selecciona solo los botones dentro de la tabla
const botones = table.querySelectorAll('button');
// Iteramos sobre la colección de botones
for (let boton of botones) {
  // Creacion de evento de los botones.
  boton.onclick = function() {
    // Obtén la fila (tr) del botón presionado
    const row = event.target.closest('tr');
    // Obtén el índice de la fila dentro del tbody
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    listaObjetosCostoFijo.eliminarElemento(rowIndex);
    // Eliminar la fila html de la vista.

  };
}
