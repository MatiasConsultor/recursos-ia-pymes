const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { test } = require('node:test');
const html = readFileSync(join(__dirname, 'index.html'), 'utf8');
const script = html.match(/<script id="roi-core">([\s\S]*?)<\/script>/)[1];
const calculate = vm.runInNewContext(script + '\ncalculateRoi');
const sample = { people:1, hours:4, reduction:50, reuse:75, hourValue:24, cashSavings:0, ongoing:35, initial:270 };
test('reproduce el ejemplo y separa capacidad de caja', () => {
  const r = calculate(sample);
  assert.ok(Math.abs(r.freed - 26/3) < 1e-9);
  assert.equal(r.capacity, 156);
  assert.equal(r.netCash, -35);
  assert.equal(Math.round(r.capacityRoi*1000), 1713);
  assert.equal(r.cashRoi, -1);
  assert.equal(Math.round(r.capacityPayback*10), 22);
  assert.equal(r.cashPayback, null);
});
test('solo recupera inversión de caja con neto positivo', () => {
  assert.equal(calculate({...sample,cashSavings:35}).cashPayback,null);
  assert.equal(calculate({...sample,cashSavings:65}).cashPayback,9);
});
test('coste cero no produce un ROI infinito', () => {
  const r=calculate({...sample,initial:0,ongoing:0});
  assert.equal(r.cashRoi,null);
  assert.equal(r.capacityRoi,null);
  assert.equal(r.capacityPayback,0);
});
test('valida porcentajes y número entero de personas', () => {
  assert.throws(()=>calculate({...sample,reduction:101}),{name:'RangeError'});
  assert.throws(()=>calculate({...sample,people:0.5}),{name:'RangeError'});
});
