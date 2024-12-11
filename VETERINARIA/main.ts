import * as readline from 'readline-sync';
import { RedVeterinarias } from './redVeterinarias';
import { Proveedores } from './proveedores';

// Crear instancia de la red de veterinarias
const redVeterinarias = new RedVeterinarias();

function mainMenu() {
    console.log('\n--- Menu Principal ---');
    console.log('1. Gestionar Veterinarias');
    console.log('2. Gestionar Proveedores');
    console.log('3. Agregar Cliente');
    console.log('4. Mostrar Clientes y Mascotas');
    console.log('5. Registrar Visita de Cliente');
    console.log('6. Salir');
    const option = readline.question('Selecciona una opcion: ');

    switch (option) {
        case '1':
            redVeterinarias.menuVeterinarias(mainMenu);
            break;
        case '2':
            Proveedores.menuProveedores(mainMenu);
            break;
        case '3':
            agregarCliente();
            break;
        case '4':
            mostrarClientesYMascotas();
            break;
        case '5':
            registrarVisitaCliente();
            break;
        case '6':
            console.log('Saliendo...');
            process.exit();
        default:
            console.log('Opcion no valida, intenta nuevamente.');
            mainMenu();
    }
}

function agregarCliente() {
    const nombreVet = readline.question('Nombre de la veterinaria para el cliente: ');
    const veterinaria = redVeterinarias.getVeterinarias().find(vet => vet.getNombre() === nombreVet);

    if (!veterinaria) {
        console.log(`Veterinaria ${nombreVet} no encontrada. Por favor, agrega la veterinaria antes de añadir clientes.`);
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

    veterinaria.mostrarClientesYMascotas();
    mainMenu();
}

function registrarVisitaCliente() {
    const nombreVet = readline.question('Nombre de la veterinaria: ');
    const veterinaria = redVeterinarias.getVeterinarias().find(vet => vet.getNombre() === nombreVet);

    if (!veterinaria) {
        console.log(`Veterinaria ${nombreVet} no encontrada.`);
        return mainMenu();
    }

    const idCliente = parseInt(readline.question('ID del cliente: '), 10);
    veterinaria.registrarVisitaCliente(idCliente);
    mainMenu();
}

mainMenu();
