import React from 'react';
 
const ForgotpassContent = ({forgetpass}) => (
	<div>
		 
		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">forgot password</div>

			<div className="login-form-1">
				<form id="forgot-password-form" className="text-left" onSubmit={forgetpass.btnsubmit}>
					<div className="etc-login-form">
						<p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
					</div>
					<div className="login-form-main-message">{forgetpass.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="email_id" className="sr-only">Email address</label>
								<input type="text" className="form-control" id="email_id" name="email_id" placeholder="email address"/>
							</div>
						</div>
						<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
					</div></form>
					<div className="etc-login-form">
						<p>already have an account? <a href="/login" >login here</a></p>
						{/* <p>new user? <a href="" onClick={vforgetpass.registerview} >create new account</a></p> */}
					</div>
				
			</div>
		</div>
</div>
);

export default ForgotpassContent;