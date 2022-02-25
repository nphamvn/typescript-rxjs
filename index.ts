//Observable from array

import { from } from 'rxjs';

//emit result of promise
const promiseSource = from(
  new Promise((resolve) => {
    let num = Math.random() * 100;
    resolve(num);
  })
);

const subscribe = promiseSource.subscribe((val) => console.log(val));
