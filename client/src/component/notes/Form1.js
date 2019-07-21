import React from 'react'
import {Link} from 'react-router-dom'

class CategoryForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:''
    }
  }
  handleChange = (e) => {
    const name=e.target.value
    this.setState(() => ({name}))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: this.state.name
    }
    this.props.handleSubmit(formData)
  }
  componentWillReceiveProps(nextProps) {
    if(Object.keys(nextProps) > 0){
      this.setState(() => ({
        name: nextProps.category.name
      }));
    }
  }
  render(){
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
        <Link className="Link" to="/notes/new">
          Back
        </Link>
      </div>
    );
  }
}
export default CategoryForm