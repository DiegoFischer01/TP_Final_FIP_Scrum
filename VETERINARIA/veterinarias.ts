import { generadorID } from './id';

class Veterinaria {
    id: number;
    nombre: string;
    direccion: string;

    constructor (nombre: string, direccion: string) {
      this.id = generadorID.generarID();
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
  
    agregarVeterinaria(nombre: string, direccion: string): void {
      const veterinaria = new Veterinaria(nombre, direccion);
      this.veterinarias.push(veterinaria);
      console.log(`Veterinaria ${nombre} agregada con ID ${veterinaria.id}.`);
    }
  
    modificarVeterinaria(id: number, nombre?: string, direccion?: string): void {
      const vet = this.veterinarias.find(v => v.id === id);
      if (vet) {
        if (nombre) vet.nombre = nombre;
        if (direccion) vet.direccion = direccion;
        console.log(`Veterinaria con ID ${id} modificada.`);
      } else {
        console.log(`Veterinaria con ID ${id} no encontrada.`);
      }
    }
  
    eliminarVeterinaria(id: number): void {
      this.veterinarias = this.veterinarias.filter(v => v.id !== id);
      console.log(`Veterinaria con ID ${id} eliminada.`);
    }
  }
  