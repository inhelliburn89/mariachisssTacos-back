require('dotenv').config()

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('./helpers/passport')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const prodsRouter = require('./routes/products-router');
const extrasRouter = require('./routes/extras-router');
const OrderRouter = require('./routes/order-router');

mongoose.connect(process.env.DB, {
    useUnifiedTopology:true,
    useNewUrlParser: true
})
.then((x)=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((error)=>{
    console.log("Error connecting to mongo", error)
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
    origin:["http://localhost:3000", "http://www.mipagina.com"], credentials: true
}))

app.use(
    session({
        secret:process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

app.use( passport.initialize() )
app.use( passport.session() )

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth',authRouter);
app.use('/api/products',prodsRouter);
app.use('/api/extras',extrasRouter);
app.use('/api/order',OrderRouter);

module.exports = app;
