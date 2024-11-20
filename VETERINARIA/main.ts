import { Cliente } from "./cliente";
import { Mascota } from "./Mascota";
import { GestionPacientes } from "./Mascota";

const clienteJuan = new Cliente("Juan", "2284-345678", [
    { nombre: "Fido", especie: "perro" },
    { nombre: "Rex", especie: "gato" }
]);
console.log(clienteJuan);
console.log(clienteJuan.getId());


const diego = new Cliente("Diego Fischer", "2284-507340", [{ nombre: "Ciri", especie: "gato" }]);
console.log(diego);
console.log(diego.getId());
diego.incrementarVisitas();
diego.incrementarVisitas();
diego.incrementarVisitas();
diego.incrementarVisitas();
diego.incrementarVisitas();
console.log(diego);




const gestionPacientes = new GestionPacientes();

// Agregar pacientes
gestionPacientes.agregarPaciente("Firulais", "perro", 1);
gestionPacientes.agregarPaciente("Tomy", "gato", 1);

// Modificar paciente
gestionPacientes.modificarPaciente(1, "Firulais", "Rufo");

// Eliminar paciente
gestionPacientes.eliminarPaciente(1, "Tomy");
