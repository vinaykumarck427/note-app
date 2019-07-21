const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
	name: {
		type:String,
		required:true
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required: true
	},
	notes:[{
		note:{
			type:Schema.Types.ObjectId,
			ref:'Note'
		}
	}]
})

const Category = mongoose.model('Category', categorySchema)
 
module.exports = Category