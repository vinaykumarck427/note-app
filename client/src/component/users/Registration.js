import React from 'react'
import axios from '../../config/config'

import FormRegister from './RegisterForm'

class UserRegistration extends React.Component{
    handleRegister = (data) => {
        axios
          .post("/users/register", data)
          .then(response => {
            if(response.data.errors){
                alert(response.data.message)
            }else{
            console.log(response.data);
                this.props.history.push("/users/login");
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
    render(){
        return(
            <div>
                <FormRegister handleRegister={this.handleRegister}/>
            </div>
        )
    }
}

export default UserRegistration