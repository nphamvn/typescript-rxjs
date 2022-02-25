//Emitting an object, array, and function

import { of } from 'rxjs';

//Emit value of any type
const source = of({ name: 'Nam', age: 26 }, [1, 2, 3], function sayHi() {
  return 'Hello';
});

const subscribe = source.subscribe((val) => console.log(val));
