import { assertEquals } from 'https://deno.land/std@0.119.0/testing/asserts.ts';

import { crocks } from './deps.js';
import copy from './copy.js';
const { Async } = crocks;

const test = Deno.test;
const list = () =>
  Async.Resolved({ ok: true, docs: [{ id: '1', type: 'foo' }, { id: '2', type: 'bar' }] });
const bulk = () =>
  Async.Resolved({ ok: true, results: [{ ok: true, id: '1' }, { ok: true, id: '2' }] });

const cp = copy(list, bulk);

test('return last key', async () => {
  const key = await cp(2, '').toPromise();
  assertEquals(key, '2');
});

test('return finished', async () => {
  const key = await cp(1001, '').toPromise();
  assertEquals(key, '__FINISHED__');
});

test('error', async () => {
  const b = () => Async.Resolved({ ok: false });
  const cp2 = copy(list, b);
  try {
    await cp2(1001, '').toPromise();
  } catch (err) {
    assertEquals(err, 'Error Copying Data');
  }
});
