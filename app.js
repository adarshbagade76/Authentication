const express = require('express');
const app = express();
const port = 6000;
const userRouter = require('./Routes/user');
const mongoose = require('mongoose')
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mvc', {
    useNewUrlParser: true
}).then(() => {
    console.log("DB Connected")
}).catch((e) => {
    console.log(e)
})

app.use('/user', userRouter)
// app.use('/product', productRoute)



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})