import React from 'react'

class FormLogin extends React.Component{
	constructor(){
		super()
		this.state = {
			email:'',
			password:''
		}
	}
	handleChange = (e) => {
		const value =  e.target.type === 'text' ? e.target.value : e.target.value
		const name = e.target.name

		this.setState(() => ({
			[name]:value
		}))
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			email:this.state.email,
			password:this.state.password
		}
		this.props.handleLogin(formData)
	}
	render(){
		return(
			<div>
				<h2>Login of user</h2>
				<form onSubmit={this.handleSubmit} >
					<div className="form-group">
						<label htmlFor="inputEmail">Email</label>
						<div>
							<input 
								type="email"
								className="form-control col-sm-3"
								placeholder="Email" 
								name='email' 
								value={this.state.email} 
								onChange={this.handleChange}
							/><br />
						</div>
						<small id="emailHelp" className="form-text text-muted">Please don't Enter incorrect Email.</small>
					</div>	
						<br />
						<div className="form-group">
							<label htmlFor="inputPassword">Password</label>
							<div>
								<input 
									type='password'
									className="form-control col-sm-3"
									name='password'
									placeholder="password"
									value={this.state.password}
									onChange={this.handleChange}
								/><br />
							</div>
							<small id="emailHelp" className="form-text text-muted">Please don't Enter incorrect Password.</small>
						</div>
						<br />
						<button type='submit' className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}
export default FormLogin