import * as readline from 'readline-sync';
import { RedVeterinarias } from './redVeterinarias';
import { Cliente } from './cliente';

// Crear instancia de la red de veterinarias
const redVeterinarias = new RedVeterinarias();

function mainMenu() {
    console.log('\n--- Menu Principal ---');
    console.log('1. Agregar Veterinaria');
    console.log('2. Mostrar Veterinarias');
    console.log('3. Agregar Cliente');
    console.log('4. Mostrar Clientes y Mascotas');
    console.log('5. Salir');
    const option = readline.question('Selecciona una opcion: ');

    switch (option) {
        case '1':
            agregarVeterinaria();
            break;
        case '2':
            mostrarVeterinarias();
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

function agregarVeterinaria() {
    const nombre = readline.question('Nombre de la veterinaria: ');
    const direccion = readline.question('Direccion de la veterinaria: ');
    redVeterinarias.agregarVeterinaria(nombre, direccion, []);
    console.log(`Veterinaria ${nombre} agregada exitosamente.`);
    mainMenu();
}

function mostrarVeterinarias() {
    redVeterinarias.mostrarVeterinarias();
    mainMenu();
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
