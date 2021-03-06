import React from 'react'
import axios from '../../config/config'
import {setCategories} from '../../actions/categories'
import { setTags } from "../../actions/tags";

import {connect} from 'react-redux'

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      body: "",
      category: "",
      selectedTags: []
    };
    this.handleTitle=this.handleTitle.bind(this)
    this.handleBody=this.handleBody.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleTitle(e){
    const title=e.target.value
    this.setState(() => ({title}))
  }
  handleBody(e){
    const body=e.target.value
    this.setState(() => ({body}))
  }
  handleSubmit(e){
    e.preventDefault()
    const select =  this.state.selectedTags.map(tag => {
      return {
        tag:tag._id
      }
    })
    const formData = {
      title:this.state.title,
      body:this.state.body,
      category:this.state.category,
      tags:select
    }
    this.props.handleSubmit(formData) 
  }
  handleSelect = (e) => {
    const category = e.target.value
    this.setState(() => ({category}))
  }
    
  componentDidMount(){
  axios.get('/categories',{
    headers: {
      'x-auth': localStorage.getItem('userAuthToken')
    }
  })
  .then(response => {
    this.props.dispatch(setCategories(response.data));
  })
  .catch(err => {
    console.log(err)
  })
  
  axios.get('/tags', {
    headers: {
      'x-auth': localStorage.getItem('userAuthToken')
    }
  })
  .then(response => {
    this.props.dispatch(setTags(response.data))
  })
  .catch(err => {
    console.log(err)
  })
  }
  componentWillReceiveProps(nextProps) {
      this.setState(() => ({
        title: nextProps.title,
        body: nextProps.body,
        category: nextProps.category
      }));        
  }
  handleSelectedTag=(tag) => {
    this.setState((prevState) => ({ selectedTags: [...prevState.selectedTags,tag]}))

  }
  render(){
    // console.log(tags)
    // const tags = this.props.tag.filter(t => t.tag._id)
    // console.log(tags)
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-row">
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="inputSelectCategory"
              >
              category:
            </label>
            <div className="col-sm-10">
              <select
                className="form-control form-control-sm col-sm-3 selectpicker"
                id="inputSelectCategory"
                value={this.state.category}
                name="category"
                onChange={this.handleSelect}
                >
                <option value="">select</option>
                {this.props.categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <br />
            <label
              htmlFor="inputTitle"
              className="col-sm-2 col-form-label"
            >
              Title:{" "}
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control-sm col-sm-3"
                id="inputTitle"
                type="text"
                value={this.state.title}
                onChange={this.handleTitle}
              />
            </div>
            <br />
            <br />
            <label
              htmlFor="inputBody"
              className="col-sm-2 col-form-label"
            >
              Body:
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control-sm col-sm-3"
                id="inputBody"
                type="text"
                value={this.state.body}
                onChange={this.handleBody}
              />
            </div>
            <br />
            <br />
            <label 
              htmlFor="tag"
              className="col-sm-2 col-form-label"
            >
              tags:
            </label>
            <br />
            <div className="col-sm-10">
              {this.props.tags.map(tag => 
                <div key={tag._id}>               
                      <input
                        className="form-check-input"
                        id="tag"
                        type="checkbox"
                        value={tag._id}
                        onClick={() => {
                          this.handleSelectedTag(tag);
                        }}
                      />
                      <label className="form-check-label">
                        {tag.name}
                      </label>
                      <br />
                    </div>
                )}
            </div>
            <input
              type="submit"
              value="SUBMIT"
              className="w3-ripple btn btn-primary"
            />
          </div>
        </form>  
      </div>
    );
  }
}
const mapStateToProps = function(state){
  return {
    categories: state.categories,
    tags:state.tags
  };
}
export default connect(mapStateToProps)(Form)