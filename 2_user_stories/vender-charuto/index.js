import UserStory from "../core/user_story";
import PrecisoVenderCharutos from "../problems/preciso-vender-charutos";

export default class VenderCharuto extends UserStory {
  constructor() {
    super({
      como: "Dono da Fábrica de Charutos ",
      verbo: "gostaria de ",
      acao: `vender charutos online `,
      para: `aumentar a clientela`,
    });

    problems.add(new PrecisoVenderCharutos());
  }
}
