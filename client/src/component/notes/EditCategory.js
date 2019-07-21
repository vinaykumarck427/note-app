import React from 'react'
import CategoryForm from './Form1'
import axios from '../../config/config'
import {setCategory} from '../../actions/category'
import {connect} from 'react-redux'


class CategoryEdit extends React.Component{
  componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`/categories/${id}`, {
      headers: {
        "x-auth": localStorage.getItem("userAuthToken")
      }
    })
    .then(response => {
      this.props.dispatch(setCategory(response.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleSubmit = (formData) => {
    axios.put(`/categories/${this.props.category._id}`, formData, {
      headers: {
        "x-auth": localStorage.getItem("userAuthToken")
      }
    })
    .then(response => {
      if (response.data.hasOwnProperty("errors")) {
        console.log(response.data.errors);
      } else {
        this.props.history.push(
          `/categories/${this.props.match.params.id}`
        );
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    return(
      <div>
        <h2>Edit this Category</h2>
        <CategoryForm category={this.props.category} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
const mapStateToProps = function(state) {
  return {
    category: state.category
  };
}
export default connect(mapStateToProps)(CategoryEdit);
