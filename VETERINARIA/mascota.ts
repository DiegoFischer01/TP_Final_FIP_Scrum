export class Mascota {
  private id: number;
  private nombre: string;
  private especie: string;

  constructor(nombre: string, especie: string, idCliente: number) {
      this.nombre = nombre;
      this.especie = this.validarEspecie(especie);
      this.id = idCliente;
  }

  private validarEspecie(especie: string): string {
      return ["perro", "gato"].includes(especie.toLowerCase()) ? especie : "exótica";
  }

  public getId(): number {
      return this.id;
  }

  public getNombre(): string {
      return this.nombre;
  }

  public setNombre(nombre: string): void {
      this.nombre = nombre;
  }

  public getEspecie(): string {
      return this.especie;
  }

  public setEspecie(especie: string): void {
      this.especie = this.validarEspecie(especie);
  }
}
