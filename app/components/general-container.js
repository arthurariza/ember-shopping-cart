import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;
}
