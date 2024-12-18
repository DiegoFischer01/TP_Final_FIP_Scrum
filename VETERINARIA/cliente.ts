import { generadorID } from './id';
import { Mascota } from './mascota';

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: string;
    private vip: boolean;
    private visitas: number;
    private mascotas: Mascota[];

    constructor(nombre: string, telefono: string, nombresMascotas: { nombre: string, especie: string }[]) {
        this.id = generadorID.generarID();
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 0;
        this.vip = false;
        this.mascotas = nombresMascotas.map(mascota => new Mascota(mascota.nombre, mascota.especie, this.id));
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

    public isVip(): boolean {
        return this.vip;
    }

    public incrementarVisitas(): void {
        this.visitas++;
        if (this.visitas >= 5) {
            this.vip = true;
        }
    }

    public getVisitas(): number {
        return this.visitas;
    }

    public getMascotas(): Mascota[] {
        return this.mascotas;
    }
}
