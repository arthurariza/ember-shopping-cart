import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subTotal() {
    return this.model.reduce((acc, { price }) => {
      return acc + price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subTotal;
  }

  get total() {
    return this.tax + this.subTotal;
  }
}
