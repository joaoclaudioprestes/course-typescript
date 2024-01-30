class Computador {
  // 1 - Criar a classe
  // 3 - Passamos os parametros
  public marca: string = ""; // public permite que alteremos o parametro fora da class
  modelo: string = "";
  serie: number = 0;
  private novo: boolean = false; // não podemos alterar fora da classe somente dentro dela ou artraves da classe

  constructor(marca: string, modelo: string, serie: number) {
    // 4 - Criamos a função construtora
    this.marca = marca;
    this.modelo = modelo;
    this.serie = serie;

    console.log("Novo computador criado!\n--------------------------------");
    console.log(
      `Dados do computador: \nMarca: ${this.marca}\nModelo: ${this.modelo}\nSerie: ${this.serie}\n--------------------------------`
    );
  }

  valor(): void {
    console.log(
      `O valor do computador ${this.marca} é de R$ 3000,00\n--------------------------------`
    );
  }

  aVenda(): void {
    console.log(
      `O computador ${this.marca} - Não está a venda!!\n--------------------------------`
    );
  }

  info(): string {
    return `${this.marca} - ${this.serie} - ${this.modelo} - ${
      this.novo === true ? "Novo" : "Não é novo!"
    }\n--------------------------------`;
  }

  newComputer(): void {
    this.novo = true;

    this.info();
  }
}

const notebook = new Computador("Acer", "erer43", 2333); // 2 - Instanciamos uma nova classe "Criamos"
const notebookLenovo = new Computador("Lenovo", "eor33", 2123);

// notebook.valor();
// notebook.aVenda();
console.log(notebook.info());
notebook.newComputer();
console.log(notebook.info());
