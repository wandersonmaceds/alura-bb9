import { throwIfEmpty, throwIfNotPresent, throwIfEmailNotValid, throwIfIsNotArray } from '../util/validators';
import {allowedRoles} from './Roles';

export default class User {
    
    constructor(name, email, aluraId, roles, isActive) {
        this.name = name;
        this.email = email;
        this.aluraId = aluraId;
        this.roles = roles;
        this._isActive = isActive;
        this._courses = [];
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
        throwIfNotPresent(roles, allowedRoles(), `Perfil ${roles} não existe`);
        this._roles = roles;
    }

    get roles() {
        return this._roles;
    }

    set isActive(isActive){
        this._isActive = isActive;
    }

    get isActive() {
        return this._isActive;
    }

    set courses(courses) {
        throwIfIsNotArray(courses);
        this._courses = courses;
    }

    get courses() {
        return this._courses;
    }

    toggleSubscription() {
        this._isActive = !this._isActive;
    }

    hasRole(role) {
        return this.roles.includes(role);
    }

}