import './index.css'
import JS_IMG from './assets/image.png'

const h1Element = document.createElement('h1');
const imgElement = document.createElement('img');

h1Element.innerText = 'I love JavaScript';
imgElement.src = JS_IMG;

document.getElementById('container').append(h1Element, imgElement);
