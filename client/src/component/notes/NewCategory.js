import React from 'react'
import CategoryForm from './Form1'
import axios from '../../config/config'

class AddCategory extends React.Component{
    handleSubmit = (formData) => {
        axios
          .post("/categories", formData, {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            if (response.data.hasOwnProperty("errors")) {
              console.log(response.data.errors);
            } else {
              this.props.history.push("/categories");
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
        render(){
        return(
            <div>
                <h2>Add New Category</h2>
                <CategoryForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default AddCategory