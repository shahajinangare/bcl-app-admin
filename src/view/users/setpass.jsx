import React from 'react';
 
const setpassContent = ({setpass}) => (
	<div>
		 
		<div className="text-center" style={{padding:'50px 0'}}>
			<div className="logo">Set password</div>

			<div className="login-form-1">
				<form id="forgot-password-form" className="text-left" onSubmit={setpass.btnsubmit}>
					 
					<div className="login-form-main-message">{setpass.state.ErrorMsg}</div>
					<div className="main-login-form">
						<div className="login-group">
							<div className="form-group">
								<label htmlFor="pwd" className="sr-only">Password</label>
								<input type="password" className="form-control" id="pwd" name="pwd" placeholder="password" required maxLength="20"/>
							</div>
							<div className="form-group">
								<label htmlFor="confirmpwd" className="sr-only">Confirm Password</label>
								<input type="password" className="form-control" id="confirmpwd" name="confirmpwd" placeholder="confirm password" required maxLength="20"/>
								<input type="text" className="form-control" id="userid" name="userid" value={setpass.state.userid} style={{display:'none'}} />
							</div>
						</div>
						<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
					</div></form>
				</div>
		</div>
</div>
);

export default setpassContent;