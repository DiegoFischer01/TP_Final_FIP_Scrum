export class Mascota {
  id: number;
  nombre: string;
  especie: string;

  constructor(nombre: string, especie: string, idCliente: number) {
      this.nombre = nombre;
      this.especie = this.validarEspecie(especie);
      this.id = idCliente;
  }

  validarEspecie(especie: string): string {
    return ["perro", "gato"].includes(especie.toLowerCase()) ? especie : "exótica";
}
}

export class GestionPacientes {
    private pacientes: Mascota[] = [];
  
    agregarPaciente(nombre: string, especie: string, idDueno: number): void {
        const paciente = new Mascota(nombre, especie, idDueno);
        this.pacientes.push(paciente);
        console.log(`Paciente ${nombre} agregado con ID ${paciente.id}.`);
    }
  
    modificarPaciente(id: number, nombre: string, nuevoNombre?: string, nuevaEspecie?: string): void {
        const paciente = this.pacientes.find(p => p.id === id && p.nombre === nombre);
        if (paciente) {
            if (nuevoNombre) paciente.nombre = nuevoNombre;
            if (nuevaEspecie) paciente.especie = paciente.validarEspecie(nuevaEspecie);
            console.log(`Paciente con ID ${id} y nombre ${nombre} modificado.`);
        } else {
            console.log(`Paciente con ID ${id} y nombre ${nombre} no encontrado.`);
        }
    }
  
    eliminarPaciente(id: number, nombre: string): void {
        for (let i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].id === id && this.pacientes[i].nombre === nombre) {
                this.pacientes.splice(i, 1);
                console.log(`Paciente con ID ${id} y nombre ${nombre} eliminado.`);
                return;
            }
        }
        console.log(`Paciente con ID ${id} y nombre ${nombre} no encontrado.`);
    }
}