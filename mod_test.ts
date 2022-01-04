import { assert } from "https://deno.land/std@0.119.0/testing/asserts.ts";

const test = Deno.test

test('ok', () =>
  assert('Hello')
)