import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.$labelElement = document.createElement('label');
    this.$labelElement.className = "donate-form__input-label";
    this.$labelElement.textContent = " Введите сумму в $";

    this.$inputElement = document.createElement('input');
    this.$inputElement.className = 'donate-form__donate-input';
    this.$inputElement.name = 'amount';
    this.$inputElement.type = 'number';
    this.$inputElement.max = '100';
    this.$inputElement.min = '1';
    this.$inputElement.required = true;

    this.$buttonElement = document.createElement('button');
    this.$buttonElement.disabled = true;
    this.$buttonElement.className = 'donate-form__submit-button';
    this.$buttonElement.type = 'submit';
    this.$buttonElement.textContent = 'Задонатить';

    this.$rootElement.append(this.$labelElement, this.$inputElement, this.$buttonElement);

    this.$input = this.$inputElement;
    this.$button = this.$buttonElement;


    this.$input.addEventListener('click', this.handleInput.bind(this));
    this.$button.addEventListener('click', this.handleSubmit.bind(this));
  }

  get isValid() {
    return this.state.amount >= 1 && this.state.amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      console.log(this.state.amount);
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
