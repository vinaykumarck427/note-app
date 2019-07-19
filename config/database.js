const mongoose = require('mongoose')

// connect express to mongo via mongoose
// configure the promise library to be ES6 Promise
mongoose.Promise = global.Promise

const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/notes-app-feb"  // "mongodb+srv://vinay427:vinay427@cluster0-xdiwz.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URI, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => {
        console.log("db connected succefully");
    })
    .catch(err => {
        console.log("Error connecting to DB", err);
    });

module.exports = mongoose
// export default