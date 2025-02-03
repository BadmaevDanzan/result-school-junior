import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$h2Element = document.createElement('h2');
    this.$h2Element.className = 'donates-container__title';
    this.$h2Element.textContent = 'Список донатов'

    this.$divElement = document.createElement('div');
    this.$divElement.className = 'donates-container__donates';
    this.$divElement.textContent = 'Список донатов';

    this.$rootElement.append(this.$divElement, this.$divElement);

    this.$listContainer = this.$divElement;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}