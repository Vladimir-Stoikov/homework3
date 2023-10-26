// Домашнее задание (Основное, полифил в конце)

function multiTasks() {
  setTimeout(() => {
    // Таск 1
    fetch('https://cataas.com/cat') // Микротаск
      .then(response => {
        const targetImage = document.getElementById('image');
        if (targetImage) targetImage.style.backgroundImage = `url(${response.url})`; // Задача на рендер (изменение стиля)
        else throw new Error('Missing Component');
      })
      .catch(error => console.log(error));
  });

  setTimeout(() => {
    // Таск 2
    // Микротаск
    new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    })
      .then(resolve => console.log(`Random number is ${Math.floor(resolve * 100)}`))
      .catch(error => console.log(error));

    // Микротаск
    new Promise((resolve, reject) => {
      const date = new Date();
      resolve(date);
    })
      .then(resolve => console.log(`Today is ${resolve.getDate()}.${resolve.getMonth() + 1}.${resolve.getFullYear()}`))
      .catch(error => console.log(error));
  });

  setTimeout(() => {
    // Таск 3
    fetch('https://catfact.ninja/fact') // Микротаск
      .then(response => response.json())
      .then(data => {
        const targetText = document.getElementById('cat-joke');
        if (targetText) targetText.textContent = `${data.fact}`; // Задача на рендер (измение контента)
        else throw new Error('Missing Component');
      })
      .catch(error => console.log(error));
  });
}

// //----------------------------------------

// Создание компонентов

function createComponents() {
  // Настройки стиля body

  const body = document.querySelector('body');
  Object.assign(body.style, {
    width: '100vw',
    height: '100vh',
  });

  // Создание узла под картинку и указание стилей

  const image = document.createElement('div');
  Object.assign(image.style, {
    margin: '5% auto',
    width: '300px',
    height: '300px',
    border: 'solid 3px black',
    borderRadius: '20px',
    backgroundSize: 'cover',
  });
  image.id = 'image';

  // Создание узла под текст и указание стилей

  const text = document.createElement('p');
  Object.assign(text.style, {
    maxWidth: '70%',
    fontSize: '1.5rem',
    color: 'black',
    margin: 'auto',
    textAlign: 'center',
  });
  text.id = 'cat-joke';

  // Вставка узлов в body

  body.prepend(image, text);
}

// Вызов функций

createComponents();
multiTasks();

//----------------------------------------

// Кастомный Map

Array.prototype.customMap = function (func) {
  const newArr = [];

  for (let index = 0; index < this.length; index++) {
    newArr.push(func(this[index], index, this));
  }

  return newArr;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.customMap((item, index, arr) => {
  if (arr[index + 1]) return item + arr[index + 1];
  return item;
});

console.log(`(Доп задание) arr => ${arr1}, newArr after customMap => ${arr2}`);

// ---------------------

// // Вариант домашнего задания(упрощенный)

// function simpleTasks() {
//   setTimeout(() => {
//     new Promise((resolve, reject) => {
//       const data = "i'm microtdatask from 1 task";
//       resolve(data);
//     })
//       .then(res => console.log(res))
//       .then(() => {
//         const body = document.querySelector('body');
//         body.style.backgroundColor = 'lightgreen';
//         console.log("i'm render from 1 task");
//       });
//   });

//   setTimeout(() => {
//     async function microtasks() {
//       const a = await "i'm 1 microtdatask from 2 task";
//       console.log(a);

//       const b = await "i'm 2 microtdatask from 2 task";
//       console.log(b);
//     }
//     microtasks();
//   });

//   setTimeout(() => {
//     new Promise((resolve, reject) => {
//       const data = "i'm microtdatask from 3 task";
//       resolve(data);
//     })
//       .then(res => console.log(res))
//       .then(() => {
//         const body = document.querySelector('body');
//         body.textContent = 'Promises is cool';
//         console.log("i'm render from 2 task");
//       });
//   });
// }

// simpleTasks();
