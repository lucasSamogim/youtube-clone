import { Router } from 'express';
import { UserRepository } from '../modules/user/repositories/userRepository';
import { login } from '../middleware/login';

const userRoutes = Router();
const userRepository = new UserRepository();

userRoutes.post('/sign-up', (req, res) => {
    userRepository.create(req, res);
})


userRoutes.post('/sign-in', (req, res) => {
    userRepository.login(req, res);
})

userRoutes.get('/get-user', login, (req, res) => {
    userRepository.getUser(req, res);
})

export { userRoutes };