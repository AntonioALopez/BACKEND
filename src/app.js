const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express();

//enviroment variables
app.set('port', process.env.PORT || 4000);


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/trabajos", require('./routes/tdg.routes'));
app.use("/api/tutores", require('./routes/tutor.routes'));
app.use("/api/jurados1", require('./routes/jurado1.routes'));
app.use("/api/jurados2", require('./routes/jurado2.routes'));
app.use("/api/users", require('./routes/user.routes'));


module.exports = app;