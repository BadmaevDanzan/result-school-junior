import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$h1Element = document.createElement('h1');
    this.$h1Element.className = 'total-amount';

    this.$spanElement = document.createElement('span');
    this.$spanElement.textContent = this.state.total;

    this.$h1Element.append(`Итого: $${this.$spanElement.textContent}`);
    this.$rootElement.appendChild(this.$h1Element);

    this.$total = this.$spanElement;

    // ...
    
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}
