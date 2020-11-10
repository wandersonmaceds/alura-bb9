import UserRepository from "../repository/UserRepository";
import User from "../model/User";
import HttpStatus from "../util/http-status";
import logger from "../config/logger";

export default {
    async create(request, response) {

        const { name, email, alura_id, roles, is_active = true } = request.body;

        const userFromDatabase = await UserRepository.findOne({ email });

        if(userFromDatabase){
            userFromDatabase.toggleSubscription();
            await UserRepository.update(userFromDatabase);

            return response.sendStatus(HttpStatus.ok);
        }

        try {
            const user = new User(name, email, alura_id, roles, is_active);
            await UserRepository.save(user);
        } catch( error ) {
            logger.error(error);
            return response.status(HttpStatus.internalServerError).json(error);
        }

        return response.sendStatus(HttpStatus.created);
    },
    async list(request, response) {
        const users =  await UserRepository.findAll();

        return response.status(HttpStatus.ok).json(users);

    }
}









