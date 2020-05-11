import UserStory from "../core/user_story";
import NinguemQuerSeVincularAMarcasDeCharuto from "../1_problems/ninguem-quer-se-vincular-a-marcas-de-charuto";
import NaoPodeSerPorMeiosOrtodoxos from "./acceptance-criterias/nao-pode-ser-por-meios-ortodoxos";

export default class Recomendar extends UserStory {
  constructor() {
    super({
      como: "Analista de Marketing Digital ",
      verbo: "preciso que ",
      acao: `os usuários possam recomendar produtos para
      seus amigos e familiares `,
      para: `alcançarmos uma boa North Star Metric e
      conseguamos um bom engajamento dos clientes com a empresa`,
    });

    this.problems.add(new NinguemQuerSeVincularAMarcasDeCharuto());
    this.acceptance_criterias.add(new NaoPodeSerPorMeiosOrtodoxos());
  }
}
