import React from 'react'
import axios from '../../config/config'
import {setTags} from '../../actions/tags'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Tags extends React.Component{
  componentDidMount(){
    axios
      .get("/tags", {
        headers: {
          "x-auth": localStorage.getItem("userAuthToken")
        }
      })
      .then(response => {
        this.props.dispatch(setTags(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
  render(){
    return(
      <div>
        <h1>Tag list -{this.props.tags.length}</h1>
        <ul>
          {this.props.tags.map(tag => <li key={tag._id}>{tag.name}</li>)}
        </ul>
        <Link to='/notes'>Note list</Link>
      </div>
    )
  }
}
const mapStateToProps = function(state) {
  return{
    tags:state.tags
  }
}
export default connect(mapStateToProps)(Tags);