import React from 'react';

const RegisterContent = () => (
	<div>
		{/* <div class="text-center" style={{padding:'50px 0'}}>
		hi shahaji
		</div> */}
		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">register</div>
			<div className="login-form-1">
				<form id="register-form" className="text-left">
					<div className="login-form-main-message"></div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="reg_username" className="sr-only">Name</label>
								<input type="text" className="form-control" id="reg_username" name="reg_username" placeholder="username"/>
							</div>
							<div className="form-group">
								<label htmlFor="reg_password" className="sr-only">Emailid</label>
								<input type="password" className="form-control" id="reg_password" name="reg_password" placeholder="emailid"/>
							</div>
							<div className="form-group">
								<label htmlFor="reg_password_confirm" className="sr-only">Mobileno</label>
								<input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="mobileno"/>
							</div>
							
							<div className="form-group">
								<label htmlFor="reg_email" className="sr-only">Bussinesscode</label>
								<input type="text" className="form-control" id="reg_email" name="reg_email" placeholder="bussinesscode"/>
							</div>
							
							
							{/* <div className="form-group login-group-checkbox">
								<input type="radio" className="" name="reg_gender" id="male" placeholder="username"/>
								<label for="male">male</label>
								
								<input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
								<label for="female">female</label>
							</div> */}
							
							{/* <div className="form-group login-group-checkbox">
								<input type="checkbox" className="" id="reg_agree" name="reg_agree"/>
								<label for="reg_agree">i agree with <a href="#">terms</a></label>
							</div> */}
						</div>
						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
					</div>
					<div className="etc-login-form">
						<p>already have an account? <a href="#">login here</a></p>
					</div>
				</form>
			</div>

		</div>
</div>
);

export default RegisterContent;