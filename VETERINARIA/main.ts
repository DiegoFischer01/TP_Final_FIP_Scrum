import { Cliente } from "./cliente";
import { Mascota } from "./Mascota";


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
