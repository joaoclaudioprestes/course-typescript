// Definição da interface Curso
interface Linguagem {
  titulo: string;
  des: string;
  aulas: number;
  maxAlunos?: number; // A interrogação indica que maxAlunos é opcional
}

interface Config extends Linguagem {
  pago: boolean;
}

// Inicialização da variável php com um objeto que segue a estrutura da interface Curso
const php: Linguagem = {
  titulo: "PHP",
  des: "Descrição do curso de PHP",
  aulas: 34,
  maxAlunos: 30, // maxAlunos é opcional, então pode ser omitido se necessário
};

// Inicialização da variável phpConfig com um objeto que segue a estrutura da interface Config
const phpConfig: Config = {
  titulo: "PHP Config",
  des: "Descrição do curso de PHP com configurações",
  aulas: 30,
  maxAlunos: 25,
  pago: true,
};
