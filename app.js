const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var DbConnection = require('./dbconn/DbConnection');
const AddressModel = require('./model/AddressModel');
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

DbConnection.StartConnection();

app.post("/add_address", function (req, res) {
    var Address = new AddressModel(req.body);
    Address.save(err => {
        if (err) {
            res.redirect("/");
        }
        res.redirect("/");
    })
})

app.get("/", function (req, res) {
    AddressModel.find({}, function (err, addressDetails) {
        console.log(addressDetails);
        if (err) {
            console.log(err);
        } else {
            res.render("index", { address: addressDetails })
        }
    })
})


