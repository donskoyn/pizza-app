require('dotenv').config();
const express=require('express');
const cors=require('cors');
const cookieParse=require('cookie-parser');
const mongoose=require('mongoose');
const router=require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT= process.env.PORT || 5000;
const app=express();



app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParse());
app.use(cors({
    origin:'http://localhost:3000',
    'credentials':true,
}));
app.use('/api',router);
app.use(errorMiddleware);

const start=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        app.listen(PORT,()=>console.log('server start in port '+PORT));
    }catch(err){
        console.log(err);
    }
}

start()


