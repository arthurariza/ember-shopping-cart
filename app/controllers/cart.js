import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subTotal() {
    return this.cart.itemList.reduce((acc, { price, count }) => {
      return acc + price * count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subTotal;
  }

  get total() {
    return this.tax + this.subTotal;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count < 1) {
      item.count = 1;
    } else {
      item.count = count;
    }
  }
}
