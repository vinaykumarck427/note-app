const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()
const User = require('../models/user')
const _ = require('lodash')
const { authenticationUser } = require('../middlewares/authentication')

router.get('/', function (req, res) {
	User.find()
	.then(function (user) {
		res.json(user)
	})
	.catch(function (err) {
		res.send(err)
	})
})

router.get('/account', authenticationUser, function (req, res) {
	const { user } = req
	res.send(_.pick(user, ['_id', 'username', 'email']))
})

router.post('/register', (req, res) => {
	const user = new User(req.body)
	user.save()
	.then((user) => {
		res.json(_.pick(user,['_id','username','email']))
	})
	.catch(err => {
		res.send(err)
	})
})

router.post('/login', function(req, res) {
	const body = req.body
	User.findByCredentials(body.email, body.password)
	.then(function (user) {
		return user.generateToken()
	})
	.then(function (token) {
		res.send({token:token})
	})
	.catch(function (err) {
		res.send(err)
	})
})

router.delete('/logout', authenticationUser, function (req, res) {
	const { user, token } = req
	User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
	.then(() => {
		res.send({ notice: 'successfully logged out' })
	})
	.catch(err => {
		res.send(err)
	})
})

module.exports = router