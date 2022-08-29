import {Notify} from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onCallCreatePromise);

function onCallCreatePromise(event) {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);

  for (let position = 0; position < amount; position += 1) {
    createPromise(position, delay)
      .then(({position, delay}) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({position, delay}) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promiseObj = {position, delay};
    return new Promise((resolve, reject) => {

      if (shouldResolve) {
        resolve(promiseObj);
      }
      reject(promiseObj);
    })
  }
}







