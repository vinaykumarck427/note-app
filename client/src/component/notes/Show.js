import React from 'react'
import axios from '../../config/config'
import { Link } from 'react-router-dom'
 
class NoteShow extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            note: {}
        }
        this.handleRemove=this.handleRemove.bind(this)
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            this.setState(() => ({note:response.data}))
        })
    }
    handleRemove(e){
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
                }
    }
    handleRemoveTag=(tag) => {
        console.log(tag)
        const id = this.props.match.params.id
        axios.delete(`/notes/removeTag?noteId=${id}&tagId=${tag}`, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }}) 
        .then(response => {
            console.log(response.data)
                this.setState(() => ({note:response.data}))
        })
    }
    render(){
        return(
            <div>
                {this.state.note.title && (<h2>{this.state.note.title}</h2>)}
                {this.state.note.body && (<p>{this.state.note.body}</p>)}
                {this.state.note.category && (<p>category-<Link to={`/categories/${this.state.note.category._id}`}>{this.state.note.category.name}</Link></p>)}
                {this.state.note.tags && (<pre>tags - 
                     <ul>
                        {this.state.note.tags.map(tag =>
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
export default NoteShow