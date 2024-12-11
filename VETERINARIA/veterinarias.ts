import { generadorID } from "./id";
import { Cliente } from "./cliente";
import { Mascota } from "./mascota";

export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[] = [];
    private mascotas: Mascota[] = [];

    constructor(nombre: string, direccion: string, clientes: any[]) {
        this.id = generadorID.generarID();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = clientes;
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

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public agregarCliente(nombre: string, telefono: string, nombresMascotas: { nombre: string, especie: string }[]): void {
        const cliente = new Cliente(nombre, telefono, nombresMascotas);
        this.clientes.push(cliente);
        console.log(`Cliente ${nombre} agregado con ID ${cliente.getId()}.`);
    }

    public registrarVisitaCliente(id: number): void {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            cliente.incrementarVisitas();
            console.log(`Visita registrada para el cliente con ID ${id}.`);
            if (cliente.isVip()) {
                console.log(`¡Felicidades! El cliente ${cliente.getNombre()} es ahora VIP.`);
            }
        } else {
            console.log(`Cliente con ID ${id} no encontrado.`);
        }
    }

    public modificarCliente(id: number, nombre?: string, telefono?: string): void {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            if (nombre) cliente.setNombre(nombre);
            if (telefono) cliente.setTelefono(telefono);
            console.log(`Cliente con ID ${id} modificado.`);
        } else {
            console.log(`Cliente con ID ${id} no encontrado.`);
        }
    }

    public eliminarCliente(id: number): void {
        this.clientes = this.clientes.filter(c => c.getId() !== id);
        console.log(`Cliente con ID ${id} eliminado.`);
    }

    public agregarPaciente(nombre: string, especie: string, idDueno: number): void {
        const mascota = new Mascota(nombre, especie, idDueno);
        this.mascotas.push(mascota);
        console.log(`Paciente ${nombre} agregado con ID ${mascota.getId()}.`);
    }

    public modificarPaciente(id: number, nombre?: string, especie?: string): void {
        const paciente = this.mascotas.find(p => p.getId() === id);
        if (paciente) {
            if (nombre) paciente.setNombre(nombre);
            if (especie) paciente.setEspecie(especie);
            console.log(`Paciente con ID ${id} modificado.`);
        } else {
            console.log(`Paciente con ID ${id} no encontrado.`);
        }
    }

    public eliminarPaciente(id: number, nombre: string): void {
        this.mascotas = this.mascotas.filter(m => m.getId() !== id || m.getNombre() !== nombre);
        console.log(`Paciente con ID ${id} y nombre ${nombre} eliminado.`);
    }

    public mostrarClientesYMascotas(): void {
        console.log(`\n--- Lista de Clientes de la Veterinaria ${this.nombre} ---`);
        this.clientes.forEach(cliente => {
            console.log(`ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Teléfono: ${cliente.getTelefono()}, VIP: ${cliente.isVip()}, Visitas: ${cliente.getVisitas()}`);
            cliente.getMascotas().forEach(mascota => {
                console.log(`    Mascota: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}, ID Dueño: ${mascota.getId()}`);
            });
        });
    }
}
