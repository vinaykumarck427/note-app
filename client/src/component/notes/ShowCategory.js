import React from 'react'
import axios from '../../config/config'

import {Link} from 'react-router-dom'
import {setCategory} from '../../actions/category'
import {setNotes} from '../../actions/notes'

import {connect} from 'react-redux'

class ShowCategory extends React.Component{
  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    axios.get(`/categories/${id}`, {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
    .then(response => {
      this.props.dispatch(setCategory(response.data))
      this.props.dispatch(setNotes(response.data.notes));
    })
    .catch(err => {
      console.log(err)
    })        
  }
  handleRemove = () => {
    const id = this.props.match.params.id
    axios.delete(`/categories/${id}`, {
      headers: {
        "x-auth": localStorage.getItem("userAuthToken")
      }
    })
    .then(response => {
      const confirm = window.confirm("Are you Sure?");
      if (confirm) {
        this.props.history.push("/categories");
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  render(){
    return (
      <div>
        <h2>{this.props.category.name}</h2>
        <ul><b>notes</b> -
          {this.props.notes.map(note => {
            return (
              note.note && (
                <li key={note._id}>
                  <span>
                    <p>{note.note.title}</p>
                    <p>{note.note.body}</p>
                  </span>
                </li>
              )
            );
          })}
        </ul>
        <Link className="Link" to={`/notes`}>
          Back
        </Link>
        <Link
          className="Link"
          to={`/categories/edit/${this.props.match.params.id}`}
        >
          Edit
        </Link>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
const mapStateToProps = function(state){
  return{
    notes:state.notes,
    category:state.category
  }
}
export default connect(mapStateToProps)(ShowCategory); 