import { Router } from 'express';
import { VideoRepository } from '../modules/videos/repositories/VideoRepository';
import { login } from '../middleware/login';

const videoRoutes = Router();
const videoRepository = new VideoRepository();

videoRoutes.post('/create-video', login, (req, res) => {
    videoRepository.create(req, res);
})

videoRoutes.get('/get-videos', login, (req, res) => {
    videoRepository.getVideos(req, res);
})

videoRoutes.get('/search', (req, res) => {
    videoRepository.searchVideos(req, res);
})


export { videoRoutes };