import User from '../model/User';

export default {
    save(connection, user) {
        return connection.getRepository('User').save({
            name: user.name,
            email: user.email,
            alura_id: user.aluraId,
            roles: user.roles,
            is_active: user.isActive
        });
    },
    findOne(connection, criteria){
        return connection.getRepository('User').findOne(criteria).then(result => {
            if(!result)
                return null;
            const user =  new User(result.name, result.email, result.alura_id, result.roles, result.isActive)
            user.id = result.id;
            return user;
        });
    },
    findAll(connection){
        return connection.getRepository('User').find();
    },
    update(connection, user){
        return connection.getRepository('User').save(user);
    },
}
