import express from 'express'
import Connection from './database/db.js';
import  dotenv from'dotenv';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


dotenv.config();

const app=express();
const PORT=8000;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

app.listen(PORT,()=>console.log(`server is running successfully on PORT ${PORT}`));
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);