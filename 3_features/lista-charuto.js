import VenderCharuto from "../2_user_stories/vender-charuto";
import BaseApiUrl from "../0_core/base_api_url";

export default class ListaCharuto extends Feature {
  constructor() {
    super();
    this.user_story = new VenderCharuto();

    get(`${BaseApiUrl}/loja/charutos`, "Charuto@index");
  }
}
