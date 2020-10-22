const validator = require('class-validator');

function throwIfEmpty(field, message) {
    if(validator.isEmpty(field)) {
        throw new Error(message);
    }
}

function throwIfNotPresent(value, target, message) {
    if (!validator.isArray(target)) {
        throw new Error(`${target} não é um array`);
    }

    if(validator.isNotIn(value, target)) {
        throw new Error(message);
    }
}

function throwIfEmailNotValid(value, message) {
    if(!validator.isEmail(value)) {
        throw new Error(message);
    }
}

module.exports = { throwIfEmpty, throwIfNotPresent, throwIfEmailNotValid }