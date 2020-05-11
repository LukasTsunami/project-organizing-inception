import VenderCharuto from "../2_user_stories/vender-charuto";
import BaseApiUrl from "../0_core/base_api_url";

export default class VendeCharuto extends Feature {
  constructor() {
    super();
    this.user_story = new VenderCharuto();

    post(`${BaseApiUrl}/loja/charutos`, "CharutoVenda@create");
  }
}
