function throwIfEmpty(field, message) {
    if(field == null || field == undefined || field.length == 0) {
        throw new Error(message);
    }
}

function throwIfNotPresent(value, target, message) {
    if (!Array.isArray(target)) {
        throw new Error(`${target} não é um array`);
    }

    if(!target.includes(value)) {
        throw new Error(message);
    }
}

module.exports = { throwIfEmpty, throwIfNotPresent }