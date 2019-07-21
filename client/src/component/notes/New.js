import React from 'react'
import axios from '../../config/config'

import { Link } from 'react-router-dom'

import Form from './Form'

class AddNote extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    error:{}
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(Data){
    axios.post("/notes", Data, {
      headers: {
        "x-auth": localStorage.getItem("userAuthToken")
      }
    })
    .then(response => {
      if (response.data.hasOwnProperty("error")) {
        this.setState(() => ({ error: response.data }));
      } else {
        this.props.history.push("/notes");
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  render(){
    return (
      <div>
        <h2 className="h2"> Add new note</h2>
        <Form handleSubmit={this.handleSubmit} />
        <Link className="Link" to="/notes">
          Back
        </Link>
        <Link to='/categories/new' >AddCategory</Link>
      </div>
    );
  }
}
export default AddNote

