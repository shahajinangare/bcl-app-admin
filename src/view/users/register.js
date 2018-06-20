import React from 'react';

const RegisterContent = () => (
	<div>
		{/* <div class="text-center" style={{padding:'50px 0'}}>
		hi shahaji
		</div> */}
		<div class="text-center" style={{padding:'50px 0'}}>
			<div class="logo">register</div>
			<div class="login-form-1">
				<form id="register-form" class="text-left">
					<div class="login-form-main-message"></div>
					<div class="main-login-form">
						<div class="login-group">
							<div class="form-group">
								<label for="reg_username" class="sr-only">Name</label>
								<input type="text" class="form-control" id="reg_username" name="reg_username" placeholder="username"/>
							</div>
							<div class="form-group">
								<label for="reg_password" class="sr-only">Emailid</label>
								<input type="password" class="form-control" id="reg_password" name="reg_password" placeholder="emailid"/>
							</div>
							<div class="form-group">
								<label for="reg_password_confirm" class="sr-only">Mobileno</label>
								<input type="password" class="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="mobileno"/>
							</div>
							
							<div class="form-group">
								<label for="reg_email" class="sr-only">Bussinesscode</label>
								<input type="text" class="form-control" id="reg_email" name="reg_email" placeholder="bussinesscode"/>
							</div>
							
							
							{/* <div class="form-group login-group-checkbox">
								<input type="radio" class="" name="reg_gender" id="male" placeholder="username"/>
								<label for="male">male</label>
								
								<input type="radio" class="" name="reg_gender" id="female" placeholder="username"/>
								<label for="female">female</label>
							</div> */}
							
							{/* <div class="form-group login-group-checkbox">
								<input type="checkbox" class="" id="reg_agree" name="reg_agree"/>
								<label for="reg_agree">i agree with <a href="#">terms</a></label>
							</div> */}
						</div>
						<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
					</div>
					<div class="etc-login-form">
						<p>already have an account? <a href="#">login here</a></p>
					</div>
				</form>
			</div>

		</div>
</div>
);

export default RegisterContent;