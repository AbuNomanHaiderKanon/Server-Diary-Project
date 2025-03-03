import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//components
import connectDatabase  from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use( cors({
    origin: 'http://localhost:3000/', // Allow frontend domain
    credentials: true, // Allow cookies to be sent
}));
app.use(bodyParser.json({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 3000;
// connect db
connectDatabase();

app.listen(PORT, () => console.log(`Server is running successfully on http://localhost:${PORT}`));