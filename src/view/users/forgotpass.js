import React from 'react';

const ForgotpassContent = () => (
	<div>
		{/* <div class="text-center" style={{padding:'50px 0'}}>
		hi shahaji
		</div> */}
		


		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">forgot password</div>

			<div className="login-form-1">
				<form id="forgot-password-form" className="text-left">
					<div className="etc-login-form">
						<p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
					</div>
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="fp_email" className="sr-only">Email address</label>
								<input type="text" className="form-control" id="fp_email" name="fp_email" placeholder="email address"/>
							</div>
						</div>
						<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="#">login here</a></p>
						<p>new user? <a href="#">create new account</a></p>
					</div>
				</form>
			</div>
		</div>
</div>
);

export default ForgotpassContent;