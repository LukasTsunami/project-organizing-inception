import BaseApiUrl from "../0_core/base_api_url";
import Recomendar from "../2_user_stories/recomendar";

export default class RecomendaProAmiguinho extends Feature {
  constructor() {
    super();
    this.user_story = new Recomendar();

    post(`${BaseApiUrl}/compartilhar?amigo=:UUID`, "Charuto@share");
  }
}
