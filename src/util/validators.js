import validator from 'class-validator';

export function throwIfEmpty(field, message) {
    if(validator.isEmpty(field)) {
        throw new Error(message);
    }
}

export function throwIfNotPresent(value, target, message) {
    if (!validator.isArray(target)) {
        throw new Error(`${target} não é um array`);
    }

    if(validator.isNotIn(value, target)) {
        throw new Error(message);
    }
}

export function throwIfEmailNotValid(value, message) {
    if(!validator.isEmail(value)) {
        throw new Error(message);
    }
}