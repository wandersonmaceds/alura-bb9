export default class UserService {
    
    constructor(userRepository) {
        this._userRepository = userRepository;
    }

    async execute() {
        return await this._userRepository.findAll()
    }
}