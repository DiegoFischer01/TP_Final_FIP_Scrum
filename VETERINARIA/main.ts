import { Cliente } from "./cliente";
import { Mascota } from "./mascota";
import { GestionPacientes } from "./mascota";

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


gestionPacientes.agregarPaciente("Firulais", "perro", 1);
gestionPacientes.agregarPaciente("Tomy", "gato", 1);


gestionPacientes.modificarPaciente(1, "Firulais", "Rufo");


gestionPacientes.eliminarPaciente(1, "Tomy");
