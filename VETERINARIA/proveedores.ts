import { generadorID } from "./id";
import readline from 'readline-sync';

export class Proveedores {
    private static proveedores: Proveedores[] = [];
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

    // Métodos estáticos para gestionar proveedores
    static agregarProveedor(nombre: string, telefono: string): void {
        const proveedor = new Proveedores(nombre, telefono);
        Proveedores.proveedores.push(proveedor);
        console.log(`Proveedor ${nombre} agregado exitosamente.`);
    }

    static modificarProveedor(id: number, nombre?: string, telefono?: string): void {
        const proveedor = Proveedores.proveedores.find(p => p.getId() === id);

        if (!proveedor) {
            console.log(`Proveedor con ID ${id} no encontrado.`);
            return;
        }

        if (nombre) proveedor.setNombre(nombre);
        if (telefono) proveedor.setTelefono(telefono);

        console.log(`Proveedor con ID ${id} modificado exitosamente.`);
    }

    static eliminarProveedor(id: number): void {
        const index = Proveedores.proveedores.findIndex(p => p.getId() === id);

        if (index === -1) {
            console.log(`Proveedor con ID ${id} no encontrado.`);
            return;
        }

        Proveedores.proveedores.splice(index, 1);
        console.log(`Proveedor con ID ${id} eliminado exitosamente.`);
    }

    static mostrarProveedores(): void {
        console.log('\n--- Lista de Proveedores ---');
        Proveedores.proveedores.forEach(proveedor => {
            console.log(`ID: ${proveedor.getId()}, Nombre: ${proveedor.getNombre()}, Telefono: ${proveedor.getTelefono()}`);
        });
    }

    // Modificado método para manejar el menú de proveedores
    static menuProveedores(navigateToMainMenu: () => void): void {
        console.log('\n--- Menu de Proveedores ---');
        console.log('1. Agregar Proveedor');
        console.log('2. Modificar Proveedor');
        console.log('3. Eliminar Proveedor');
        console.log('4. Mostrar Proveedores');
        console.log('5. Volver al Menu Principal');
        const option = readline.question('Selecciona una opcion: ');

        switch (option) {
            case '1':
                Proveedores.agregarProveedor(readline.question('Nombre del proveedor: '), readline.question('Telefono del proveedor: '));
                navigateToMainMenu();
                break;
            case '2':
                Proveedores.modificarProveedor(parseInt(readline.question('ID del proveedor a modificar: '), 10), readline.question('Nuevo nombre del proveedor (dejar en blanco para no cambiar): '), readline.question('Nuevo telefono del proveedor (dejar en blanco para no cambiar): '));
                navigateToMainMenu();
                break;
            case '3':
                Proveedores.eliminarProveedor(parseInt(readline.question('ID del proveedor a eliminar: '), 10));
                navigateToMainMenu();
                break;
            case '4':
                Proveedores.mostrarProveedores();
                navigateToMainMenu();
                break;
            case '5':
                navigateToMainMenu();
                break;
            default:
                console.log('Opcion no valida, intenta nuevamente.');
                Proveedores.menuProveedores(navigateToMainMenu);
        }
    }
}
