import { generadorID } from './id';
import { Mascota } from './mascota';

export class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    vip: boolean;
    visitas: number;
    mascotas: Mascota[];

    constructor(nombre: string, telefono: string, nombresMascotas: { nombre: string, especie: string }[]) {
        this.id = generadorID.generarID(); // Usamos la función importada // Puede ser una class o una interface.
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 0;
        this.vip = false;
        this.mascotas = nombresMascotas.map(mascota => new Mascota(mascota.nombre, mascota.especie, this.id));
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

class GestionClientes {
    private clientes: Cliente[] = [];
  
    agregarCliente(nombre: string, telefono: string, nombresMascotas: { nombre: string, especie: string }[]): void {
      const cliente = new Cliente(nombre, telefono, nombresMascotas);
      this.clientes.push(cliente);
      console.log(`Cliente ${nombre} agregado con ID ${cliente.id}.`);
    }
  
    modificarCliente(id: number, nombre?: string, telefono?: string): void {
      const cliente = this.clientes.find(c => c.id === id);
      if (cliente) {
        if (nombre) cliente.nombre = nombre;
        if (telefono) cliente.telefono = telefono;
        console.log(`Cliente con ID ${id} modificado.`);
      } else {
        console.log(`Cliente con ID ${id} no encontrado.`);
      }
    }
  
    eliminarCliente(id: number): void {
      this.clientes = this.clientes.filter(c => c.id !== id);
      console.log(`Cliente con ID ${id} eliminado.`);
    }
  }
