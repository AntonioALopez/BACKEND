const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://dbMau:link2021@cluster0.okuo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err));