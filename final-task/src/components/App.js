import {Component} from '../core/Component';
import {Form} from './Form';
import {List} from './List';
import {ListItem} from './ListItem';

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
        this.$spanElement.textContent = `Итого: $${this.state.total}`;

        this.$h1Element.append(this.$spanElement);
        this.$rootElement.appendChild(this.$h1Element);

        this.$total = this.$spanElement;

        const donateForm = new Form({
            onSubmit: this.onItemCreate.bind(this),
        });
        this.$rootElement.appendChild(donateForm.$rootElement);
        const donateList = new List();
        this.$rootElement.appendChild(donateList.$rootElement);

        this.donateList = donateList;
    }

    onItemCreate(amount) {
        const item = new ListItem({amount: amount});
        this.state.donates.push(item);
        this.donateList.addItem(item);

        this.state.total += amount;
        this.$total.textContent = `Итого: $${this.state.total}`;
    }
}
