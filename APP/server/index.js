const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');

const app = express();

app.use(cors())
app.use(express.json());

const rotas = require('./src/routes/route');

const DB_USER = 'admin'
const DB_PASSWORD = encodeURIComponent('admin')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@capibalimpo.d9kxide.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Mongoose conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))