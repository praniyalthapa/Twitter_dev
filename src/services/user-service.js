import {UserRepository} from '../repository/index.js';
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async signup(data){ //here we will create a user
    try {
        const user=await this.userRepository.create(data);
        console.log(user);
    return user;
        
    } catch (error) {
        throw error;
    }
    }


}
export default UserService;