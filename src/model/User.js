const { throwIfEmpty, throwIfNotPresent, throwIfEmailNotValid } = require('../util/validators');
const permitedRoles = require('./Roles');

class User {
    
    constructor(name, email, alura_id, roles) {
        this.name = name;
        this.email = email;
        this.alura_id = alura_id;
        this.roles = roles;
    }

    set name(name) {
        throwIfEmpty(name, 'Nome não pode ser vazio');
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set email(email) {
        throwIfEmpty(email, 'Email não pode ser vazio');
        throwIfEmailNotValid(email, 'Email em formato inválido');
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set roles(roles) {
        throwIfEmpty(roles, 'Perfis não pode ser vazio');
        throwIfNotPresent(roles, permitedRoles, `Perfil ${roles} não existe`);
        this._roles = roles;
    }

    get roles() {
        return this._roles;
    }
}

module.exports = { User }