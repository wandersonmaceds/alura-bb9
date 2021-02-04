import User from '../model/User';
import { getRepository } from "typeorm";

export default {
     save(user) {
        return getRepository('User').save(user);
    },
    async findOne(criteria){
        const result = await getRepository('User').findOne(criteria);

        if(!result)
            return null;

        const user =  new User(result.name, result.email, result.aluraId, result.roles, result.isActive)

        user.id = result.id;

        return user;
    },
    async findAll(){
        const users = await getRepository('User').find();
        return users.map(user => {
            const newUser = new User(user.name, user.email, user.aluraId, user.roles, user.isActive);
            newUser.id = user.id;
            newUser.extraContactOptions = user.extraContactOptions;

            return newUser;
        });
    },
    update(user){
        return getRepository('User').save(user);
    },
}
