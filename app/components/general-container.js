import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;

  get itemCount() {
    return this.shoppingCart.itemList.reduce(
      (count, item) => (count += item.count),
      0
    );
  }
}
