import { Proveedores } from "./proveedores";
import { Veterinaria } from "./veterinarias";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private proveedores: Proveedores[] = [];

    agregarVeterinaria(nombre: string, direccion: string, clientes: any[]): void {
        const veterinaria = new Veterinaria(nombre, direccion, clientes);
        this.veterinarias.push(veterinaria);
        console.log(`Veterinaria ${nombre} agregada con ID ${veterinaria.getId()}.`);
    }

    modificarVeterinaria(id: number, nombre?: string, direccion?: string): void {
        const vet = this.veterinarias.find(v => v.getId() === id);
        if (vet) {
            if (nombre) vet.setNombre(nombre);
            if (direccion) vet.setDireccion(direccion);
            console.log(`Veterinaria con ID ${id} modificada.`);
        } else {
            console.log(`Veterinaria con ID ${id} no encontrada.`);
        }
    }

    eliminarVeterinaria(id: number): void {
        this.veterinarias = this.veterinarias.filter(v => v.getId() !== id);
        console.log(`Veterinaria con ID ${id} eliminada.`);
    }

    getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    mostrarVeterinarias(): void {
        console.log('\n--- Lista de Veterinarias ---');
        this.veterinarias.forEach(v => {
            console.log(`ID: ${v.getId()}, Nombre: ${v.getNombre()}, Dirección: ${v.getDireccion()}`);
        });
    }
}
