const { testEnvironment } = require('../../jest.config');
const { throwIfEmpty  } = require('../../src/util/validators');

test('throwIfEmpty', () => {
    expect(() => {
        throwIfEmpty(null, 'coisado')
    }).toThrow('coisado');
});