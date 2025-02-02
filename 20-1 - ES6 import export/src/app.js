import { getRandomColor } from "./utils";

export default function initApp() {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'button';
    buttonElement.innerText = 'Изменить цвет страницы';

    buttonElement.addEventListener('click', () => {
        getRandomColor();
    })


    document.body.append(buttonElement);
}

