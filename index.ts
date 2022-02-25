//Emit a seuqence of numbers

import { of } from 'rxjs';

//emit any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);

const subscribe = source.subscribe((val) => console.log(val));
