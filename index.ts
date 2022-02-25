// Map to single property

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source = from([
  { name: 'Nam', age: 26 },
  { name: 'Yen Anh', age: 23 },
]);

const subject = source.pipe(map((val) => val.name + ' - ' + val.age));

const subscribe = subject.subscribe((name) => console.log(name));
