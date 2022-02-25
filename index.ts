import { from } from 'rxjs';

//Observable from collection
const map = new Map();
map.set(1, 'One');
map.set(2, 'Two');

const souce = from(map);

const subscribe = souce.subscribe((val) => console.log(map.get(val[0])));
