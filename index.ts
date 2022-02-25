import { interval } from 'rxjs';

//Emit sequence of values at 1 second interval
const source = interval(1000);

const subscriber = source.subscribe((number) => console.log(number));
