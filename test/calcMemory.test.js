import { expect, test } from 'vitest'
import { calcMemory } from "../src/components/CalcMath.js";

test('Init', () => {
    expect(calcMemory.get()).toBe(0);
    calcMemory.set(10);
    expect(calcMemory.get()).toBe(10);
})

test('Increase and decrease', () => {
    const temp = 10;
    calcMemory.set(temp);
    calcMemory.increase(temp);
    expect(calcMemory.get()).toBe(2 * temp);
    calcMemory.decrease(temp);
    expect(calcMemory.get()).toBe(temp);
})

test('Clear', () => {
    calcMemory.clear();
    expect(calcMemory.get()).toBe(0);
})