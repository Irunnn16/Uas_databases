import express from "express";
import database from "../config/database.js"

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
    const [result, response] = await database.execute('SELECT * FROM post');
    res.json({ message: 'ini dari post router', posts: result });
});

postRouter.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    const [result, response] = await database.execute
    ('SELECT * FROM post WHERE id =?', [postId]);
    res.json({
        postId: postId,
        post: result[0],
        message: `message: detail post dengan id ${postId}`,
    });
});

postRouter.post('/', async (req, res) => {
    const { judul, tulisan, user_id } = req.body;
    const [result, response] = await database.execute(
        "INSERT INTO post (judul, tulisan, user_id) VALUES (?,?,?)",
         [judul, tulisan, user_id]
        );

    res.json({ message: 'post berhasil ditambahkan', result });
});

postRouter.delete('/:postId', async (req, res) => {
    const { postId } = req.params;
    const [result, response] = await database.execute(
        'DELETE FROM post WHERE id =?', [postId]);
    res.json({ message: `post dengan id ${postId} berhasil dihapus`, result });
});

export default postRouter;