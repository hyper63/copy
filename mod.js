import { connect, crocks } from './deps.js';
import copy from './copy.js';

const { Async } = crocks;
const FINISHED = '__FINISHED__';

if (Deno.args.length !== 2) {
  console.log(`
Welcome to hyper-copy!

hyper-copy can copy one hyper data service to another hyper data service
using the hyper connection strings.

Usage:

  hyper-copy $SRC $TARGET
  
 `);
  Deno.exit();
}

const [SRC, TARGET] = Deno.args;
const [src, target] = [connect(SRC), connect(TARGET)];
const list = Async.fromPromise(src.data.list);
const bulk = Async.fromPromise(target.data.bulk);
const cp = copy(list, bulk);
let key = '';
const BATCH = 1001;

for (let i = 0; i < Infinity; i++) {
  try {
    key = await cp(BATCH, key).toPromise();
    if (key === FINISHED) {
      console.log('Finished Copy!');
      break;
    }
  } catch (err) {
    console.log(err);
    break;
  }
  console.log('Batch: ', i);
}
