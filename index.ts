import { from } from 'rxjs';

//Observable from string
const souce = from('Hello World');

const subscribe = souce.subscribe((val) => console.log(val));
