import React from 'react'
import axios from '../../config/config'

import FormLogin from './LoginForm'

class UserLogin extends React.Component{
    handleLogin=(data) => {
        axios.post('/users/login',data)
        .then(response => {
            console.log(response.data)
            if(response.data.errors){
                    alert(response.data.errors)
            }else{
                const token = response.data.token
                localStorage.setItem('userAuthToken',token)
                this.props.history.push('/users/account')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <FormLogin handleLogin={this.handleLogin}/>
            </div>
        )
    }
}
export default UserLogin