import {Component} from '../core/Component';

export class List extends Component {
    setup(props) {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donates-container';

        this.$h2Element = document.createElement('h2');
        this.$h2Element.className = 'donates-container__title';

        this.$divElement = document.createElement('div');
        this.$divElement.className = 'donates-container__donates';
        this.$divElement.textContent = 'Список донатов';

        this.$rootElement.append(this.$divElement, this.$divElement);

        this.$listContainer = this.$divElement;

        this.$rootElement.onclick = function (event) {
            const $divElement = event.target.closest('.donate-item')
            if (!$divElement) return;

            props.onDeleteItem(parseInt(event.target.dataset.id));
        }
    }

    addItem(item) {
        this.$listContainer.appendChild(item.$rootElement);
    }

    deleteItem(item) {
        this.$listContainer.removeChild(item.$rootElement);
    }

}