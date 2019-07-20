import React from 'react'
import NoteForm from './Form'
import axios from '../../config/config'

import { Link } from 'react-router-dom'
import {setNote} from '../../actions/note'
import {connect} from 'react-redux'

class NoteEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTags:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios
          .get(`/notes/${id}`, {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            console.log(response.data);
            this.props.dispatch(setNote(response.data));
          })
          .catch(err => {
            console.log(err);
          });
    }
    handleSubmit(formData){
      console.log(localStorage.getItem('userAuthToken'))
        axios
          .put(`/notes/${this.props.note._id}`, formData, {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            if (response.data.hasOwnProperty("errors")) {
              console.log(response.data.errors);
            } else {
              this.props.history.push(`/notes/${this.props.match.params.id}`);
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
 
    render(){
      console.log(this.props.note)
        const title=this.props.note.title
        const body=this.props.note.body
        const category = this.props.note.category.name
        return (
          <div>
            <h2>Edit the Note</h2>
            <NoteForm
              title={title}
              body={body}
              category={category}
              handleSubmit={this.handleSubmit}
            />
            <Link
              className="Link"
              to={`/notes/${this.props.match.params.id}`}
            >
              Back
            </Link>
          </div>
        );
    }
}
const mapStateToProps = function(state){
    return {
      note: state.note
    };
}
export default connect(mapStateToProps)(NoteEdit);