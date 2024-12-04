import { generadorID } from "./id";

export class Proveedores {
    private id: number;
    private nombre: string;
    private telefono: string;

    constructor(nombre: string, telefono: string) {
        this.id = generadorID.generarID();
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }
}
