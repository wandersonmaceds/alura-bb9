import User from '../model/User';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default {
     save(user) {
         return prisma.user.create({
             data: {
                 name: user.name,
                 email: user.email, 
                 roles: user.roles,
                 is_active: user.isActive,
                 alura_id: user.aluraId,
             }
         })
    },
    async findOne(criteria){
        const result = await prisma.user.findUnique({
            where: { ...criteria },
        })

        if(!result)
            return null;

        const user =  new User(result.name, result.email, result.aluraId, result.roles, result.isActive)

        user.id = result.id;

        return user;
    },
    async findAll(){
        const users = await prisma.user.findMany();
        return users.map(user => {
            const newUser = new User(user.name, user.email, user.alura_id, user.roles, user.is_active);
            newUser.id = user.id;
            newUser.extraContactOptions = user.extraContactOptions;

            return newUser;
        });
    },
    update(user){
        return prisma.user.update({
            data: { 
                name: user.name,
                email: user.email, 
                roles: user.roles,
                is_active: user.isActive,
                alura_id: user.aluraId,
            },
            where: { id: user.id }
        })
    },
}
