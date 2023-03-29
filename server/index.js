const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
const authRouter = require('./routers/authRouter');
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
const cors = require('cors');

// midddleWares
app.use(express.json());
app.use(morgan('common'));      //   ---> a very helpfull middileware :: returns the router called as well as the time when it is called
app.use(cookieParser());
app.use(cors({                   // your frontend cannot access the backend as they both serve in different ip thats why cross origin resource sharing
    credentials: true,
    origin: 'http://localhost:3001'           // backend gives the authority to access its data only from this external origin 
}));

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
    });
});

dbConnect();

app.listen(port, () => {
    console.log('Listening on port :', port);
});