"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoutes = void 0;
const express_1 = require("express");
const VideoRepository_1 = require("../modules/videos/repositories/VideoRepository");
const login_1 = require("../middleware/login");
const videoRoutes = (0, express_1.Router)();
exports.videoRoutes = videoRoutes;
const videoRepository = new VideoRepository_1.VideoRepository();
videoRoutes.post('/create-video', login_1.login, (req, res) => {
    videoRepository.create(req, res);
});
videoRoutes.get('/get-videos', login_1.login, (req, res) => {
    videoRepository.getVideos(req, res);
});
videoRoutes.get('/search', (req, res) => {
    videoRepository.searchVideos(req, res);
});
