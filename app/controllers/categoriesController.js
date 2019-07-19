const express = require('express')
const Category = require('../models/category')
const Note = require('../models/note')
const router = express.Router()

const { authenticationUser } = require('../middlewares/authentication')

router.get('/', authenticationUser, (req,res) => {
    const {user} = req
    Category.find({
        user:user._id
    })
    .then(categories => {
        res.json(categories)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/', authenticationUser, (req,res) => {
    const {user} = req
    const body = req.body
    const category =  new Category(body)
    category.user = user._id
    category.save()
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
})

router.delete('/:id', authenticationUser, (req,res) => {
    const {user} = req
    const id = req.params.id
    Category.findOneAndDelete({
        _id:id,
        user:user._id
    })
    .then(category => {
        res.json(category)
    })
    .catch(err => {
        res.json(err)
    })
})
router.put('/:id', authenticationUser, (req, res) => {
    const {user} = req
    const id = req.params.id
    const body =  req.body
    Category.findOneAndUpdate({
        _id: id,
        user: user._id
    }, { $set: body }, { new: true })
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/:id', authenticationUser, (req, res) => {
    const {user} = req
    const id = req.params.id
    Category.findOne({
        _id:id,
        user:user._id
    }).populate('notes.note',['title','body']).populate('user',['username','email'])
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
})
// router.get('/:id', (req,res) => {
//     const id=req.params.id
//     Promise.all([Category.findById(id), Note.find({category:id})])
//     .then(response => {
//         res.json({
//             category:response[0],
//             notes:response[1]
//         })
//     })
// })

// Sequential
// router.get('/:id', (req,res) => {
//     const id=req.params.id
//     Category.findById(id)
//     .then(category => {
//         Note.find({category:id})
//         .then(note => {
//             res.json({
//                 category,
//                 note
//             })
//         })
//     })
// })
module.exports = router