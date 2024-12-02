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
    private mascotas: Mascota[] = [];

 
    agregarPaciente(nombre: string, especie: string, idDueno: number): void {
      const paciente = new Mascota(nombre, especie, idDueno);
      this.mascotas.push(paciente);
      console.log(`Paciente ${nombre} agregado con ID ${paciente.id}.`);
    }
  
    modificarPaciente(id: number, nombre?: string, especie?: string): void {
      const paciente = this.mascotas.find(p => p.id === id);
      if (paciente) {
        if (nombre) paciente.nombre = nombre;
        if (especie) paciente.especie = paciente.validarEspecie(especie);
        console.log(`Paciente con ID ${id} modificado.`);
      } else {
        console.log(`Paciente con ID ${id} no encontrado.`);
      }
    }
  
    eliminarPaciente(id: number, nombre: string): void {
      for (let i = 0; i < this.mascotas.length; i++) {
          if (this.mascotas[i].id === id && this.mascotas[i].nombre === nombre) {
              this.mascotas.splice(i, 1);
              console.log(`Paciente con ID ${id} y nombre ${nombre} eliminado.`);
              return;
          }
      }
      console.log(`Paciente con ID ${id} y nombre ${nombre} no encontrado.`);
  }

  

}