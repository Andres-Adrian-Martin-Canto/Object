export class Costo_fijo {
    constructor(id, nombre, valor_unitario, monto) {
        this._id = id;
        this._nombre = nombre;
        this._valor_unitario = valor_unitario;
        this._monto = monto;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get valor_unitario() {
        return this._valor_unitario;
    }

    set valor_unitario(value) {
        this._valor_unitario = value;
    }

    get monto() {
        return this._monto;
    }

    set monto(value) {
        this._monto = value;
    }
}
