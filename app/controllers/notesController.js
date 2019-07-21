const express = require('express')
const Note = require('../models/note')
const router = express.Router()
const _=require('lodash')
const { authenticationUser } = require('../middlewares/authentication')

router.get('/', authenticationUser, (req, res) => {
	const {user} = req
	Note.find({
		user:user._id
	})
	.then((notes) => {
		if(!notes){
			res.json([])
		}
		res.json(notes)
	})
	.catch((err) => {
		res.json(err)
	})
})

router.post('/', authenticationUser,(req, res) => {
	const {user} = req
	const body = req.body
	const note = new Note(body)
	note.user = user._id
	note.save()
	.then((note) => {
		res.json(note)
	})
	.catch((err) => {
		res.send(err)
	})
})

router.get('/:id', authenticationUser,(req, res) => {
	const {user} = req
	const id=req.params.id
	Note.findOne({
		_id:id,
		user:user._id
	}).populate('tags.tag', ['name']).populate('category', ['name'])
	.then((note) => {
		if(!note){
			res.json([])
		}
		res.json(note)
	})
	.catch((err) => {
		res.json(err)
	})
})
router.delete('/removeTag', authenticationUser, (req, res) => {
	const { user } = req
	const id = req.query.noteId
	const tag = req.query.tagId
	Note.findOne({
		_id:id,
		user: user._id
	}).populate('tags.tag', ['name']).populate('category', ['_id', 'name'])
	.then((note) => {
		console.log(note)
		if (!note) {
			res.json({})
		}else{
			note.tags = note.tags.filter(tagItem => String(tagItem._id) != tag)
			console.log(note)
			note.save()
			.then(note => {
				console.log(note)
				res.json(note)
			})
		}
	})
	.catch((err) => {
		res.json(err)
	})
})  // order of the router is important


router.delete('/:id',authenticationUser, (req, res) => {
	const {user} = req
	const id=req.params.id
	Note.findOneAndDelete({
		_id:id,
		user:user._id
	})
	.then((note) => {
		if(!note){
				res.json({})
		}
		res.json(note)
	})
	.catch((err) => {
		res.json(err)
	})
})
router.put('/:id', authenticationUser, (req, res) => {
	const {user} = req
	const id = req.params.id
	const body=req.body
	console.log(user._id,id)
	Note.findOneAndUpdate({
		_id:id,
		user:user._id
	},{$set:body},{new:true})
	.then((note) => {
		if(!note){
			res.json({})
		}
		res.json(note)
	})
	.catch((err) => {
		res.json(err)
	})
})
module.exports=router