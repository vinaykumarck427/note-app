import React from 'react'
import axios from '../../config/config'

import {Link} from 'react-router-dom'

import {setCategories} from '../../actions/categories'
import {connect} from 'react-redux'

class CategoryList extends React.Component{
    componentDidMount(){
        axios.get('/categories', {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            this.props.dispatch(setCategories(response.data))
            // this.setState(() => ({categories:response.data}))
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return (
          <div>
            <h2>Listing Category - {this.props.categories.length}</h2>
            <ul>
              {this.props.categories.map(category => (
                <li key={category._id}>
                  <Link to={`/categories/${category._id}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="Link" to="/categories/new">
              Add Category
            </Link>
            <pre>
              <Link to="/notes/new">Back</Link>
            </pre>
          </div>
        );
    }
}
const mapStateToProps = function(state){
    return {
      categories: state.categories
    };
}
export default connect(mapStateToProps)(CategoryList);
