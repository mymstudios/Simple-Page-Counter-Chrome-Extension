const counterDiv = document.createElement('div');
counterDiv.style.position = 'fixed';
counterDiv.style.bottom = '20px';
counterDiv.style.right = '20px';
counterDiv.style.padding = '10px';
counterDiv.style.backgroundColor = '#fff';
counterDiv.style.borderRadius = '8px';
counterDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
counterDiv.style.zIndex = '9999';

const button = document.createElement('button');
button.id = 'extension-counter';
button.style.padding = '8px 16px';
button.style.cursor = 'pointer';
counterDiv.appendChild(button);

document.body.appendChild(counterDiv);

let counter = 0;
const setCounter = (count) => {
  counter = count;
  button.textContent = `Count: ${counter}`;
};

button.addEventListener('click', () => setCounter(counter + 1));
setCounter(0);