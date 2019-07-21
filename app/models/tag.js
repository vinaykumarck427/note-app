const mongoose = require('mongoose')
const Note = require('./note')

const Schema = mongoose.Schema

const TagSchema = new Schema({
	name:{
		type:String
	},
	isChecked:{
		type:Boolean,
		default:false
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required:true
	},
	notes: [{
		note:{
			type: Schema.Types.ObjectId,
			ref: 'Note' 
		} 
	}]
})

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag