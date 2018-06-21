import React from 'react';

const LoginContent = ({login}) => (
	<div>
		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">login</div>
			<div className="login-form-1">
			<form  onSubmit={login.loginsubmit}>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="lg_username" className="sr-only">Username</label>
								<input type="email" className="form-control" id="emailid" name="emailid" placeholder="username" required maxLength="30"/>
							</div>
							<div className="form-group">
								<label htmlFor="lg_password" className="sr-only">Password</label>
								<input type="password" className="form-control" id="password" name="password" placeholder="password" required maxLength="20" />
							</div>
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					</form>
					<div className="etc-login-form">
						<p>forgot your password? <a href="#" onClick={login.forgotpasssubmit}  >click here</a></p>
						<p>new user? <a href="#" onClick={login.registersubmit}>create new account</a></p>
						<p>new user nilesh? <a href="./register" >create new account</a></p>
					</div>
			</div>
		</div>
</div>
);

export default LoginContent;