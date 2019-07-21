const express = require('express')
const mongoose = require('./config/database')
mongoose.set('useFindAndModify', false);
const app = express()
const cors = require('cors')
const path = require("path");
const port = process.env.PORT || 3006
app.use(express.static(path.join(__dirname, "client/build")))

const notesRouter = require('./app/controllers/notesController')
const categoriesRouter = require('./app/controllers/categoriesController') // 2nd approach
const tagRouter =  require('./app/controllers/tagsController')
const userRouter = require('./app/controllers/usersController')

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/notes', notesRouter) 
app.use('/categories', categoriesRouter) 
app.use('/tags', tagRouter)

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port, () => {
	console.log('listening on port', port)
})