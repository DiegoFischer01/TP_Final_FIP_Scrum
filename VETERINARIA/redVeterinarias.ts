import { Proveedores } from "./proveedores";
import { Veterinaria } from "./Veterinaria";

export abstract  class  RedVeterinarias {

    private veterinarias: Veterinaria[] = [];
    private proveedores: Proveedores []=[];

    
    agregarVeterinaria(nombre: string, direccion: string,clientes:[]): void {
      const veterinaria = new Veterinaria(nombre, direccion,clientes);
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

