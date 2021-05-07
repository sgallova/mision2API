const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')


app.use(express.urlencoded({ extended: false }));
app.use(cors());


mongoose.connect('mongodb://localhost:27017/misionDosDB', { useNewUrlParser: true });
mongoose.connection.on("error", function (e) { console.error(e); });

var schema = mongoose.Schema({
    name: String,
    email: String,
});

var User = mongoose.model("User", schema);

app.post("/api/usuarios", async (req, res) => {

    try {
        await User.create({ name: req.body.name, email: req.body.email });
        const usuarios = await User.find({});
        res.json(usuarios);

    } catch (error) {
        res.status(500).json('Error al registrar el usuario');
    }

});


app.listen(3000, () => console.log('Listening on port 3000!'));