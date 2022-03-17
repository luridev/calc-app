export { calcMemory, calcMath }

const calcMemory = {};

calcMemory.value = 0;

calcMemory.set = function (op) {
    this.value = op;
};

calcMemory.get = function () {
    return this.value;
};

calcMemory.increase = function (op) {
    this.value += op;
};

calcMemory.decrease = function (op) {
    this.value -= op;
};

calcMemory.clear = function () {
    this.set(0);
};

const calcMath = {};

calcMath.maxNumberLength = 10;

calcMath.prepare = function (x) {
    if (Math.trunc(x).toString().length > this.maxNumberLength)
        throw new Error('Result is too big');
    return Number((x).toFixed(this.maxNumberLength - Math.trunc(x).toString().length));
}

calcMath.addition = function (x, y) {
    return this.prepare(x + y);
}

calcMath.subtraction = function (x, y) {
    return this.prepare(x - y);
}

calcMath.multiplication = function (x, y) {
    return this.prepare(x * y);
}

calcMath.division = function (x, y) {
    if (y === 0)
        throw new Error('Division by zero');
    return this.prepare(x / y);
}

calcMath.sqrt = function (x) {
    if (x < 0)
        throw new Error('Negative value under square root');
    return this.prepare(Math.sqrt(x));
}

