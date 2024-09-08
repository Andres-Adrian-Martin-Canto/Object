// archivo listaCostoFijo.js
import { Costo_fijo } from './costo_fijo.js';

export class ListaCostoFijo {
    #_lista;

    // Constructor
    constructor() {
        this.#_lista = [];
    }

    /**
     * Metodo Get para obtener la lista.
     * @returns {*}
     */
    get obtenerLista() {
        return this.#_lista;
    }

    /**
     * Metodo para agregar un elemento a la lista
     * @param losValores
     */
    creacionesElemento(losValores) {
        let costoNuevo = new Costo_fijo(losValores[0], losValores[1], losValores[2], losValores[3]);
        this.#_lista.push(costoNuevo);
    }

    /**
     * Metodo Editar un elemento en la lista
     * @param posicion
     * @param losValores
     */
    editarLista(posicion, losValores) {
        let item = this.#_lista.find(elemento => elemento.index === posicion);
        if (item) {
            item.nombre = losValores[1];
            item.valorUnitario = losValores[2];
            item.cantidad = losValores[3];
        }
    }

    /**
     * Metodo para eliminar.
      * @param rowIndex
     */
    eliminarElemento(rowIndex) {
        this.#_lista.splice(rowIndex, 1);
    }
}