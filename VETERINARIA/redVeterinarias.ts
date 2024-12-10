import { Veterinaria } from "./veterinarias";
import readline from 'readline-sync';

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];

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

    // Modificado método para manejar el menú de veterinarias
    menuVeterinarias(navigateToMainMenu: () => void): void {
        console.log('\n--- Menu de Veterinarias ---');
        console.log('1. Agregar Veterinaria');
        console.log('2. Modificar Veterinaria');
        console.log('3. Eliminar Veterinaria');
        console.log('4. Mostrar Veterinarias');
        console.log('5. Volver al Menu Principal');
        const option = readline.question('Selecciona una opcion: ');

        switch (option) {
            case '1':
                this.agregarVeterinaria(readline.question('Nombre de la veterinaria: '), readline.question('Direccion de la veterinaria: '), []);
                navigateToMainMenu();
                break;
            case '2':
                this.modificarVeterinaria(parseInt(readline.question('ID de la veterinaria a modificar: '), 10), readline.question('Nuevo nombre de la veterinaria (dejar en blanco para no cambiar): '), readline.question('Nueva direccion de la veterinaria (dejar en blanco para no cambiar): '));
                navigateToMainMenu();
                break;
            case '3':
                this.eliminarVeterinaria(parseInt(readline.question('ID de la veterinaria a eliminar: '), 10));
                navigateToMainMenu();
                break;
            case '4':
                this.mostrarVeterinarias();
                navigateToMainMenu();
                break;
            case '5':
                navigateToMainMenu();
                break;
            default:
                console.log('Opcion no valida, intenta nuevamente.');
                this.menuVeterinarias(navigateToMainMenu);
        }
    }
}

