import {Costo_fijo} from './costo_fijo.js';
export class ListaCostoFijo {
    
    constructor() {
        this.lista = [];
    }

    editarLista(posicion, losValores) {
        if (this.comparacionObjetoPrincial_Editable(posicion, losValores)) {
            let objetoEditar = this.lista[posicion];
            objetoEditar.id = 3;
            objetoEditar.nombre = losValores[0];
            this.lista[posicion] = objetoEditar;
        }

    }

    comparacionObjetoPrincial_Editable(posicion, losValores){
       // function objetosSonIguales(obj1, obj2) {
//     // Obtener las claves de ambos objetos
//     const clavesObj1 = Object.keys(obj1);
//     const clavesObj2 = Object.keys(obj2);
//
//     // Verificar si ambos objetos tienen el mismo número de claves
//     if (clavesObj1.length !== clavesObj2.length) {
//         return false;
//     }
//
//     // Verificar si todas las claves y valores son iguales
//     for (let clave of clavesObj1) {
//         // Comprobar si el objeto 2 tiene la misma clave
//         if (!obj2.hasOwnProperty(clave)) {
//             return false;
//         }
//
//         // Comprobar si los valores son iguales
//         if (obj1[clave] !== obj2[clave]) {
//             return false;
//         }
//     }
//
//     // Si todas las comprobaciones pasan, los objetos son iguales
//     return true;
// }
//
// // Ejemplo de uso
// const objeto1 = {
//     nombre: 'Ana',
//     edad: 20,
//     profesion: 'Diseñadora'
// };
//
// const objeto2 = {
//     nombre: 'Ana',
//     edad: 28,
//     profesion: 'Diseñadora'
// };
//
// const objeto3 = {
//     nombre: 'Ana',
//     edad: 30,
//     profesion: 'Diseñadora'
// };
//
// console.log(objetosSonIguales(objeto1, objeto2)); // Imprime: true
// console.log(objetosSonIguales(objeto1, objeto3)); // Imprime: false
        return true;
    }

    eliminarElemento(posicion) {

    }

    creacionesElemento(losValores) {
        let costo1 = new Costo_fijo(1,"Luz",3,2000);
        this.lista.push(costo1);
    }

}