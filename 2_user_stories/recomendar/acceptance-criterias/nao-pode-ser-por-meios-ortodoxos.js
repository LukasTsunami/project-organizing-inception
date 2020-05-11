import UserStory from "../core/user_story";
import NinguemQuerSeVincularAMarcasDeCharuto from "../1_problems/ninguem-quer-se-vincular-a-marcas-de-charuto";

export default class NaoPodeSerPorMeiosOrtodoxos extends AcceptanceCriteria {
  constructor() {
    super({
      description: `
    Não podemos usar rádio, tv, impulsionar em redes sociais, 
    muito menos em motores de busca.
    `,
    });
  }
}
