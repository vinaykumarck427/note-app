const mongoose = require('mongoose')
const Tag=require('./tag')
const Category = require('./category')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	tags:[{
		tag:{
			type: Schema.Types.ObjectId,
			ref: 'Tag'
		}
	}],
	isPinned:{
		type:Boolean,
		default:false
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required:true  
	}
})

NoteSchema.pre('save', function(next){
	console.log('middlware')
	const note = this
	if(note.isNew){
		note.tags.forEach(function (tagItem) {
			console.log(tagItem.tag)
			console.log(note.user)
			Tag.findOne({
				_id: tagItem.tag,
				user: note.user._id
			})
			.then(t => {
				console.log('after tag found')
				console.log(note.user)
				console.log(t)
				t.notes.push({ note: note._id })
				t.save()
				.then(response => {
					console.log('after tag save')
					console.log(response)
				})
			})
		})
		Category.findOne({
			_id: note.category,
			user: note.user
		})
		.then(category => {
			console.log(category)
			category.notes.push({ note: note._id })
			category.save()
		})
	}
	console.log('after complete')   
	next()    
})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note