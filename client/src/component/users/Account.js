import React from 'react'
import axios from '../../config/config'

import {connect} from 'react-redux'
import {setUser} from '../../actions/user'
 
class Account extends React.Component{

    componentDidMount(){
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
        
            const user = response.data
            this.props.dispatch(setUser(user))
            this.props.history.push('/notes')
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h2>User Profile - {this.props.user.username}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Account)