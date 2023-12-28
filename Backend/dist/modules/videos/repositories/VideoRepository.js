"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRepository = void 0;
const mysql_1 = require("../../../mysql");
const uuid_1 = require("uuid");
class VideoRepository {
    create(req, res) {
        const { title, description, user_id } = req.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('INSERT INTO videos (video_id, user_id, title, description) VALUES (?,?,?,?)', [(0, uuid_1.v4)(), user_id, title, description], (error, result, fields) => {
                connection.release();
                if (error) {
                    return res.status(400).json(error);
                }
                res.status(200).json({ message: "Vídeo criado com sucesso!" });
            });
        });
    }
    getVideos(req, res) {
        const { user_id } = req.query;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE user_id = ?', [user_id], (error, results, fields) => {
                connection.release();
                if (error) {
                    return res.status(400).json({ error: "Erro ao buscar vídeos" });
                }
                return res.status(200).json({ message: "Vídeos retornados com sucesso", videos: results });
            });
        });
    }
    searchVideos(req, res) {
        const { search } = req.query;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE title LIKE ?', [`%${search}%`], (error, results, fields) => {
                connection.release();
                if (error) {
                    return res.status(400).json({ error: "Erro ao buscar vídeos" });
                }
                return res.status(200).json({ message: "Vídeos retornados com sucesso", videos: results });
            });
        });
    }
}
exports.VideoRepository = VideoRepository;
