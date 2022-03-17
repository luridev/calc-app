import { expect, test } from 'vitest'
import { calcMath } from "../src/components/CalcMath.js";

test('0.1 + 0.2 === 0.3', () => {
    expect(calcMath.addition(0.1, 0.2)).toBe(0.3);
})

test('0.1 + 0.7 === 0.8', () => {
    expect(calcMath.addition(0.1, 0.7)).toBe(0.8);
})

test('Division by zero', () => {
    expect(() => calcMath.division(9, 0)).toThrowError('Division by zero');
})

test('Negative value under square root', () => {
    expect(() => calcMath.sqrt(-9)).toThrowError('Negative value under square root');
})

test('Too long number', () => {
    const longNumber = Number(Array(calcMath.maxNumberLength)
        .fill(9)
        .join(''));
    expect(() => calcMath.addition(longNumber, 1)).toThrowError('Result is too big');
})
