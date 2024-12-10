import * as readline from 'readline-sync';
import { RedVeterinarias } from './redVeterinarias';
import { Proveedores } from './proveedores';

// Crear instancia de la red de veterinarias
const redVeterinarias = new RedVeterinarias();
const proveedores: Proveedores[] = [];

function mainMenu() {
    console.log('\n--- Menu Principal ---');
    console.log('1. Gestionar Veterinarias');
    console.log('2. Gestionar Proveedores');
    console.log('3. Agregar Cliente');
    console.log('4. Mostrar Clientes y Mascotas');
    console.log('5. Salir');
    const option = readline.question('Selecciona una opcion: ');

    switch (option) {
        case '1':
            menuVeterinarias();
            break;
        case '2':
            menuProveedores();
            break;
        case '3':
            agregarCliente();
            break;
        case '4':
            mostrarClientesYMascotas();
            break;
        case '5':
            console.log('Saliendo...');
            process.exit();
        default:
            console.log('Opcion no valida, intenta nuevamente.');
            mainMenu();
    }
}

function menuVeterinarias() {
    console.log('\n--- Menu de Veterinarias ---');
    console.log('1. Agregar Veterinaria');
    console.log('2. Modificar Veterinaria');
    console.log('3. Eliminar Veterinaria');
    console.log('4. Mostrar Veterinarias');
    console.log('5. Volver al Menu Principal');
    const option = readline.question('Selecciona una opcion: ');

    switch (option) {
        case '1':
            agregarVeterinaria();
            break;
        case '2':
            modificarVeterinaria();
            break;
        case '3':
            eliminarVeterinaria();
            break;
        case '4':
            mostrarVeterinarias();
            break;
        case '5':
            mainMenu();
            break;
        default:
            console.log('Opcion no valida, intenta nuevamente.');
            menuVeterinarias();
    }
}

function agregarVeterinaria() {
    const nombre = readline.question('Nombre de la veterinaria: ');
    const direccion = readline.question('Direccion de la veterinaria: ');
    redVeterinarias.agregarVeterinaria(nombre, direccion, []);
    console.log(`Veterinaria ${nombre} agregada exitosamente.`);
    menuVeterinarias();
}

function modificarVeterinaria() {
    const id = parseInt(readline.question('ID de la veterinaria a modificar: '), 10);
    const nombre = readline.question('Nuevo nombre de la veterinaria (dejar en blanco para no cambiar): ');
    const direccion = readline.question('Nueva direccion de la veterinaria (dejar en blanco para no cambiar): ');

    redVeterinarias.modificarVeterinaria(id, nombre || undefined, direccion || undefined);
    console.log(`Veterinaria con ID ${id} modificada exitosamente.`);
    menuVeterinarias();
}

function eliminarVeterinaria() {
    const id = parseInt(readline.question('ID de la veterinaria a eliminar: '), 10);
    redVeterinarias.eliminarVeterinaria(id);
    console.log(`Veterinaria con ID ${id} eliminada exitosamente.`);
    menuVeterinarias();
}

function mostrarVeterinarias() {
    redVeterinarias.mostrarVeterinarias();
    menuVeterinarias();
}

function menuProveedores() {
    console.log('\n--- Menu de Proveedores ---');
    console.log('1. Agregar Proveedor');
    console.log('2. Modificar Proveedor');
    console.log('3. Eliminar Proveedor');
    console.log('4. Mostrar Proveedores');
    console.log('5. Volver al Menu Principal');
    const option = readline.question('Selecciona una opcion: ');

    switch (option) {
        case '1':
            agregarProveedor();
            break;
        case '2':
            modificarProveedor();
            break;
        case '3':
            eliminarProveedor();
            break;
        case '4':
            mostrarProveedores();
            break;
        case '5':
            mainMenu();
            break;
        default:
            console.log('Opcion no valida, intenta nuevamente.');
            menuProveedores();
    }
}

function agregarProveedor() {
    const nombre = readline.question('Nombre del proveedor: ');
    const telefono = readline.question('Telefono del proveedor: ');
    const proveedor = new Proveedores(nombre, telefono);
    proveedores.push(proveedor);
    console.log(`Proveedor ${nombre} agregado exitosamente.`);
    menuProveedores();
}

function modificarProveedor() {
    const id = parseInt(readline.question('ID del proveedor a modificar: '), 10);
    const proveedor = proveedores.find(p => p.getId() === id);

    if (!proveedor) {
        console.log(`Proveedor con ID ${id} no encontrado.`);
        return menuProveedores();
    }

    const nombre = readline.question('Nuevo nombre del proveedor (dejar en blanco para no cambiar): ');
    const telefono = readline.question('Nuevo telefono del proveedor (dejar en blanco para no cambiar): ');

    if (nombre) proveedor.setNombre(nombre);
    if (telefono) proveedor.setTelefono(telefono);

    console.log(`Proveedor con ID ${id} modificado exitosamente.`);
    menuProveedores();
}

function eliminarProveedor() {
    const id = parseInt(readline.question('ID del proveedor a eliminar: '), 10);
    const index = proveedores.findIndex(p => p.getId() === id);

    if (index === -1) {
        console.log(`Proveedor con ID ${id} no encontrado.`);
        return menuProveedores();
    }

    proveedores.splice(index, 1);
    console.log(`Proveedor con ID ${id} eliminado exitosamente.`);
    menuProveedores();
}

function mostrarProveedores() {
    console.log('\n--- Lista de Proveedores ---');
    proveedores.forEach(proveedor => {
        console.log(`ID: ${proveedor.getId()}, Nombre: ${proveedor.getNombre()}, Telefono: ${proveedor.getTelefono()}`);
    });
    menuProveedores();
}

function agregarCliente() {
    const nombreVet = readline.question('Nombre de la veterinaria para el cliente: ');
    const veterinaria = redVeterinarias.getVeterinarias().find(vet => vet.getNombre() === nombreVet);

    if (!veterinaria) {
        console.log(`Veterinaria ${nombreVet} no encontrada. Por favor, agrega la veterinaria antes de anadir clientes.`);
        return mainMenu();
    }

    const nombre = readline.question('Nombre del cliente: ');
    const telefono = readline.question('Telefono del cliente: ');

    const nombresMascotas: { nombre: string, especie: string }[] = [];
    let agregarOtraMascota = true;
    while (agregarOtraMascota) {
        const nombreMascota = readline.question('Nombre de la mascota: ');
        const especieMascota = readline.question('Especie de la mascota: ');
        nombresMascotas.push({ nombre: nombreMascota, especie: especieMascota });

        const otra = readline.question('Agregar otra mascota? (si/no): ').toLowerCase();
        agregarOtraMascota = (otra === 'si' || otra === 's');
    }

    veterinaria.agregarCliente(nombre, telefono, nombresMascotas);
    console.log(`Cliente ${nombre} agregado a la veterinaria ${nombreVet}.`);
    mainMenu();
}

function mostrarClientesYMascotas() {
    const nombreVet = readline.question('Nombre de la veterinaria para visualizar clientes y mascotas: ');
    const veterinaria = redVeterinarias.getVeterinarias().find(vet => vet.getNombre() === nombreVet);

    if (!veterinaria) {
        console.log(`Veterinaria ${nombreVet} no encontrada.`);
        return mainMenu();
    }

    console.log(`\n--- Lista de Clientes de la Veterinaria ${nombreVet} ---`);
    veterinaria.getClientes().forEach(cliente => {
        console.log(`ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Telefono: ${cliente.getTelefono()}, VIP: ${cliente.isVip()}`);
        cliente.getMascotas().forEach(mascota => {
            console.log(`    Mascota: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}, ID Dueno: ${mascota.getId()}`);
        });
    });
    mainMenu();
}

mainMenu();
