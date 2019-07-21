import React from 'react'


class FormRegister extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name:'',
			email:'',
			password:''
		}
	}
	handleChange = (e) => {
		const value = e.target.type === 'text' ? e.target.value : e.target.value
		const name = e.target.name
		this.setState(() => ({
			[name] : value
		}))
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			username:this.state.name,
			email:this.state.email,
			password:this.state.password
		}
		this.props.handleRegister(formData)
	}
	render(){
		return(
			<div>
				<h2>User Registration</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputText">Username</label>
						<input type='text' placeholder="Enter user name" className="form-control col-sm-3" name='name' value={this.state.name} onChange={this.handleChange} />
					</div>
					<br />

					<div className="form-group">
						<label htmlFor="inputEmail">Email</label>
						<input type='email' placeholder="Enter email" className="form-control col-sm-3" name='email' value={this.state.email} onChange={this.handleChange} />
					</div>
					<br />

					<div className="form-group">
						<label htmlFor="inputPassword">Password</label>
						<input type='password' placeholder="Enter password" className="form-control col-sm-3" name='password' value={this.state.Password} onChange={this.handleChange} /><br />
					</div>
					<input type='submit' value='Submit' className="btn btn-primary"/>                
				</form>
			</div>
		)
	}
}
export default FormRegister