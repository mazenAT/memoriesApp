import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use('/posts',postRoutes);


const PORT= process.env.PORT || 5000;
mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>app.listen(PORT,()=>console.log('server Running on PORT:'+PORT)))
    .catch((error)=>console.error(error.message));

    mongoose.set('useFindAndModify', false);
