import { generadorID, GeneradorID } from './id';
import { Mascota } from './mascota';

export class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    vip: boolean;
    visitas: number;
    mascotas: Mascota[];

    constructor(nombre: string, telefono: string, mascotas: { nombre: string, especie: string }[]) {
        this.id = generadorID.generarID(); // Usamos la instancia del generador de ID
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 0;
        this.vip = false;
        this.mascotas = mascotas.map(m => new Mascota(m.nombre, m.especie, this.id));
    }

    getId(): number {
        return this.id;
    }

    incrementarVisitas(): void {
        this.visitas++;
        if (this.visitas >= 5) {
            this.vip = true;
        }
    }
}

