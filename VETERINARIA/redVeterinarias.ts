import { Veterinaria } from "./veterinarias";

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

    menuVeterinarias(navigateToMainMenu: () => void): void {
        const readline = require('readline-sync');
        console.log('\n--- Menu de Veterinarias ---');
        console.log('1. Agregar Veterinaria');
        console.log('2. Modificar Veterinaria');
        console.log('3. Eliminar Veterinaria');
        console.log('4. Mostrar Veterinarias');
        console.log('5. Gestionar Clientes'); // Nueva opción para gestionar clientes
        console.log('6. Volver al Menu Principal');
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
                this.menuClientes();
                navigateToMainMenu();
                break;
            case '6':
                navigateToMainMenu();
                break;
            default:
                console.log('Opcion no valida, intenta nuevamente.');
                this.menuVeterinarias(navigateToMainMenu);
        }
    }

    menuClientes(): void {
        const readline = require('readline-sync');
        console.log('\n--- Menu de Clientes ---');
        console.log('1. Agregar Cliente');
        console.log('2. Modificar Cliente');
        console.log('3. Eliminar Cliente');
        console.log('4. Volver al Menu de Veterinarias');
        const option = readline.question('Selecciona una opcion: ');

        switch (option) {
            case '1':
                const nombreVet = readline.question('Nombre de la veterinaria para el cliente: ');
                const veterinaria = this.veterinarias.find(vet => vet.getNombre() === nombreVet);
                if (!veterinaria) {
                    console.log(`Veterinaria ${nombreVet} no encontrada. Por favor, agrega la veterinaria antes de añadir clientes.`);
                    return this.menuClientes();
                }
                const nombreCliente = readline.question('Nombre del cliente: ');
                const telefonoCliente = readline.question('Teléfono del cliente: ');

                const nombresMascotas: { nombre: string, especie: string }[] = [];
                let agregarOtraMascota = true;
                while (agregarOtraMascota) {
                    const nombreMascota = readline.question('Nombre de la mascota: ');
                    const especieMascota = readline.question('Especie de la mascota: ');
                    nombresMascotas.push({ nombre: nombreMascota, especie: especieMascota });

                    const otra = readline.question('Agregar otra mascota? (si/no): ').toLowerCase();
                    agregarOtraMascota = (otra === 'si' || otra === 's');
                }

                veterinaria.agregarCliente(nombreCliente, telefonoCliente, nombresMascotas);
                console.log(`Cliente ${nombreCliente} agregado a la veterinaria ${nombreVet}.`);
                return this.menuClientes();
            case '2':
                const nombreVetMod = readline.question('Nombre de la veterinaria para el cliente: ');
                const veterinariaMod = this.veterinarias.find(vet => vet.getNombre() === nombreVetMod);
                if (!veterinariaMod) {
                    console.log(`Veterinaria ${nombreVetMod} no encontrada.`);
                    return this.menuClientes();
                }
                const idClienteMod = parseInt(readline.question('ID del cliente a modificar: '), 10);
                const nuevoNombre = readline.question('Nuevo nombre del cliente (dejar en blanco para no cambiar): ');
                const nuevoTelefono = readline.question('Nuevo teléfono del cliente (dejar en blanco para no cambiar): ');
                veterinariaMod.modificarCliente(idClienteMod, nuevoNombre, nuevoTelefono);
                console.log(`Cliente con ID ${idClienteMod} modificado.`);
                return this.menuClientes();
            case '3':
                const nombreVetDel = readline.question('Nombre de la veterinaria para el cliente: ');
                const veterinariaDel = this.veterinarias.find(vet => vet.getNombre() === nombreVetDel);
                if (!veterinariaDel) {
                    console.log(`Veterinaria ${nombreVetDel} no encontrada.`);
                    return this.menuClientes();
                }
                const idClienteDel = parseInt(readline.question('ID del cliente a eliminar: '), 10);
                veterinariaDel.eliminarCliente(idClienteDel);
                console.log(`Cliente con ID ${idClienteDel} eliminado.`);
                return this.menuClientes();
            case '4':
                this.menuVeterinarias(() => {});
                break;
            default:
                console.log('Opción no válida, intenta nuevamente.');
                this.menuClientes();
        }
    }
}
