import React from 'react'
import axios from '../../config/config'
import { Link } from 'react-router-dom'
import {setNote} from '../../actions/note'
import {connect} from 'react-redux'
 
class NoteShow extends React.Component{
	componentDidMount(){
		const id = this.props.match.params.id
		axios.get(`/notes/${id}`, {
			headers: {
				'x-auth': localStorage.getItem('userAuthToken')
			}
		})
		.then(response => {
			this.props.dispatch(setNote(response.data))
			// this.setState(() => ({note:response.data}))
		})
	}
	handleRemove  = (e) => {
		const id = this.props.match.params.id        
		const confirm = window.confirm('Are you sure?')
		if(confirm){
			axios.delete(`/notes/${id}`, {
				headers: {
					'x-auth': localStorage.getItem('userAuthToken')
				}
			})
			.then(() => {
				this.props.history.push('/notes')  
			})
			.catch(err =>{
				console.log(err)
			})
		}
	}
	handleRemoveTag=(tag) => {
		console.log(tag)
		const id = this.props.match.params.id
		axios.delete(`/notes/removeTag?noteId=${id}&tagId=${tag}`, {
			headers: {
				"x-auth": localStorage.getItem("userAuthToken")
			}
		})
		.then(response => {
			console.log(response.data);
			this.props.dispatch(setNote(response.data))
		})
		.catch(err => {
			console.log(err);
		})
	}
	render(){
		console.log(this.props.note)
		return(
			<div>
				{this.props.note.title && (<h2>{this.props.note.title}</h2>)}
				{this.props.note.body && (<p>{this.props.note.body}</p>)}
				{this.props.note.category && (<p>category-<Link to={`/categories/${this.props.note.category._id}`}>{this.props.note.category.name}</Link></p>)}
				{this.props.note.tags && (<pre>tags - 
					<ul>
						{this.props.note.tags.map(tag =>
							<li key={tag._id}><span>{tag.tag.name}<button onClick={() => {
								this.handleRemoveTag(tag._id)
						}}>X</button></span></li>)}
					</ul> 
				</pre>)}
				<div>
					<Link className="Link" to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link >
					<button onClick={this.handleRemove}>Delete</button><br />
				</div><br />
				<pre><Link to='/notes'>Back</Link></pre>
			</div>
		)
	}
}
const mapStateToProps = function(state){
	return{
		note:state.note
	}
}
export default connect(mapStateToProps)(NoteShow)