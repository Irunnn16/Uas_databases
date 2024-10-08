import express, { json } from 'express';
import userRouter from './routers/userRouters.js';
import postRouter from './routers/postRouter.js';


const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});