export class Mascota {
    id: number;
    nombre: string;
    especie: string;

    constructor(nombre: string, especie: string, idCliente: number) {
        this.nombre = nombre;
        this.especie = especie.toLowerCase() === "perro" || especie.toLowerCase() === "gato" ? especie : "exótica";
        this.id = idCliente;
    }
}
