import React from 'react';
import Login from '../../components/users/login'




const LoginContent = () => (
	
	<div>
		{/* <div className="text-center" style={{padding:'50px 0'}}>
		hi shahaji
		</div> */}
		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">login</div>
			<div className="login-form-1">
			<form  onSubmit={this.handleSubmit}>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="lg_username" className="sr-only">Username</label>
								<input type="email" className="form-control" id="emailid" name="emailid" placeholder="username" required />
							</div>
							<div className="form-group">
								<label htmlFor="lg_password" className="sr-only">Password</label>
								<input type="password" className="form-control" id="password" name="password" placeholder="password" required/>
							</div>
							{/* <div className="form-group login-group-checkbox">
								<input type="checkbox" id="lg_remember" name="lg_remember" />
								<label for="lg_remember">remember</label>
							</div> */}
						</div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 3e4c64d0dfc2bd9437e07aaff7ac5670dd86ba77
						<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
					</div>
					<div class="etc-login-form">
						<p>forgot your password? <a href="#">click here</a></p>
						<p>new user? <a href="#">create new account</a></p>
<<<<<<< HEAD

						<button className="login-button" type="submit" > <i className="fa fa-chevron-right"></i></button>
						 

=======
=======
						<button className="login-button" type="submit" > <i className="fa fa-chevron-right"></i></button>
						 
>>>>>>> 540a1a3d2ff2aaf29e6004f1f8dcc4d0df47236f
>>>>>>> 3e4c64d0dfc2bd9437e07aaff7ac5670dd86ba77
					</div>
					
				</form>
				
				
			</div>

		</div>

</div>
);

export default LoginContent;