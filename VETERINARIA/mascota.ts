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

class GestionPacientes {
  private pacientes: Mascota[] = [];

  agregarPaciente(nombre: string, especie: string, idDueno: number): void {
    const paciente = new Mascota(nombre, especie, idDueno);
    this.pacientes.push(paciente);
    console.log(`Paciente ${nombre} agregado con ID ${paciente.id}.`);
  }

  modificarPaciente(id: number, nombre?: string, especie?: string): void {
    const paciente = this.pacientes.find(p => p.id === id);
    if (paciente) {
      if (nombre) paciente.nombre = nombre;
      if (especie) paciente.especie = paciente.validarEspecie(especie);
      console.log(`Paciente con ID ${id} modificado.`);
    } else {
      console.log(`Paciente con ID ${id} no encontrado.`);
    }
  }

  eliminarPaciente(id: number): void {
    this.pacientes = this.pacientes.filter(p => p.id !== id);
    console.log(`Paciente con ID ${id} eliminado.`);
  }
}