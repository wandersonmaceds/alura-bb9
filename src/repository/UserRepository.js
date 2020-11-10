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
    findAll(){
        return getRepository('User').find();
    },
    update(user){
        return getRepository('User').save(user);
    },
}
