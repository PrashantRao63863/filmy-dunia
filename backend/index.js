const express = require('express');
const app = express();
const stripe_sk = require('./config').stripe_sk;

const port = require('./config').port;

const userRouter = require('./routers/userManager');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);

const stripe = require('stripe')(stripe_sk);

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})

app.listen(port, () => {
    console.log('server started at port 5000')
})