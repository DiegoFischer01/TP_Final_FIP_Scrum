import { RedVeterinarias } from './redVeterinarias'; 
import { Cliente } from './cliente'; 

// Crear instancia de la red de veterinarias
const redVeterinarias = new RedVeterinarias();

// Crear cliente Diego con dos mascotas
const diegoMascotas = [
    { nombre: "Kira", especie: "perro" },
    { nombre: "Ciri", especie: "gato" }
];
const diego = new Cliente("Diego", "123456789", diegoMascotas);

// Registrar la veterinaria PetCare
redVeterinarias.agregarVeterinaria("PetCare", "123 Calle Falsa", []);

// Obtener la veterinaria PetCare
const veterinariaPetCare = redVeterinarias.getVeterinarias().find(vet => vet.getNombre() === "PetCare");

// Agregar el cliente Diego a la veterinaria PetCare
veterinariaPetCare?.agregarCliente(diego.getNombre(), diego.getTelefono(), diegoMascotas);

// Mostrar los datos del cliente Diego y sus mascotas
console.log(`Cliente: ${diego.getNombre()}`);
console.log(`Teléfono: ${diego.getTelefono()}`);
console.log('Mascotas:');
diego.getMascotas().forEach(mascota => {
    console.log(`- ${mascota.getNombre()} (${mascota.getEspecie()})`);
});

// Mostrar todos los clientes de PetCare
console.log('\n--- Lista de Clientes de PetCare ---');
veterinariaPetCare?.getClientes().forEach(cliente => {
    console.log(`ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Teléfono: ${cliente.getTelefono()}, VIP: ${cliente.isVip()}`);
    cliente.getMascotas().forEach(mascota => {
        console.log(`    Mascota: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}`);
    });
});

