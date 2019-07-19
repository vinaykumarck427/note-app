import React from 'react'
import axios from '../../config/config'
import {setTag} from '../../actions/tag'
import {connect} from 'react-redux'

class TagShow extends React.Component{
  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    axios.get(`/tags/${id}`,{
      headers:{
        'x-auth':localStorage.getItem('userAuthToken')
      }
    })
    .then(response => {
      console.log(response.data)
        this.props.dispatch(setTag(response.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    console.log(localStorage.getItem("userAuthToken"));
    console.log(this.props.tag.notes)
    return(
      <div>
        <h1>{this.props.tag.name}</h1>
        <h5>a</h5>
        <h4><b>notes</b></h4>
        <ul>
          {/* {this.props.tag.map(note => console.log(note))} */}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = function(state){
  return{
    tag:state.tag
  }
}
export default connect(mapStateToProps)(TagShow);