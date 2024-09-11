import express from 'express';
import database from '../config/database.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    const [result, response] = await database.execute('SELECT * FROM user');
    
    res.json({ massage: 'ini dari user router', users: result });
} );

userRouter.get('/:userid', async (req, res) => {
    const { userid } = req.params;
    const [result, response] = await database.execute('SELECT * FROM user WHERE id = ?', [userid])
    res.json({
        userId: userid,
        message: 'ini detail user' + userid,
        user: result[0]
    });
});

userRouter.post('/', async (req, res) => {
    const { nama, telepon } = req.body;
    const [result, response] = await database.execute('INSERT INTO user (nama, telepon) VALUES (?,?)', [nama, telepon]        
    );

    res.json({
        userId: result.insertId,
        message: 'user berhasil ditambahkan',
        user: {
            id: result.insertId,
            nama,
            telepon
        }
    });

    userRouter.delete('/:userId', async ( req, res ) => {
        const userId = req.params.userId;
        const [result, response] = await database.execute('DELETE FROM user WHERE id =?', [userId]

        );
    });
});

export default userRouter