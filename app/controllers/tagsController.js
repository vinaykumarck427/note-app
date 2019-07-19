const express = require('express')
const Tag = require('../models/tag')
const router = express.Router()
const { authenticationUser } = require('../middlewares/authentication')

router.get('/', authenticationUser, (req,res) => {
    const {user} = req
    // Tag.find()
    Tag.find({
        user: user._id
    })
    .then(tag => {
        res.json(tag)
    })
})
router.post('/', authenticationUser, (req, res) => {
    const { user } = req
    const body = req.body
    const tag = new Tag(body)
    tag.user = user._id
    tag.save()
        .then(tag => {
            res.json(tag)
        })
})

router.post('/', authenticationUser, (req,res) => {
    const {user} = req
    const body = req.body
    const tag = new Tag(body)
    tag.user = user._id
    tag.save()
    .then(tag => {
        res.json(tag)
    })
})

router.get("/:id", authenticationUser, (req, res) => {
  const { user } = req;
  const id = req.params.id;
  Tag.findOne({
    _id: id,
    user: user._id
  }).populate("notes.note")
    // Tag.findById(id).populate('notes.note', ['title', 'body'])
    .then(tag => {
      res.json(tag);
    });
});

router.delete('/:id', authenticationUser, (req,res) => {
    const {user} = req
    const id = req.params.id
    Tag.findOneAndDelete({
        _id: id,
        user: user._id
    })
    // Tag.findByIdAndDelete(id)
    .then(tag => {
        res.json(tag)
    })
})
router.put('/:id', authenticationUser, (req,res) => {
    const {user} = req
    const id=req.params.id
    const tag = new Tag(req.body)
    Tag.findOneAndUpdate({
        _id: id,
        user: user._id
    }, { $set: tag }, { new: true })
    // tag.save()
    .then(tag => {
        res.json(tag)
    })
})

module.exports =  router