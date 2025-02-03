import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: this.props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

      const year = this.state.date.getFullYear();
      const month = String( this.state.date.getMonth() + 1).padStart(2, '0');
      const day = String(this.state.date.getDate()).padStart(2, '0');
      const hours = this.state.date.getHours();
      const minutes = this.state.date.getMinutes();
      const seconds = this.state.date.getSeconds();

      const convertDate = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

      const bElement = document.createElement('b')
    bElement.innerText = this.state.amount;

    this.$rootElement.textContent = `${convertDate} - $`;
    this.$rootElement.appendChild(bElement);
  }
}
