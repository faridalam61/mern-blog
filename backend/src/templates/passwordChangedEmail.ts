export const passwordResetEamilTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
	<head>
		<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
		<meta name="x-apple-disable-message-reformatting" />
		<style>
			.container {
				background-color: #eee;
				width: 500px;
				padding: 20px;
				margin: 0 auto;
				height: 100%;
			}
			.content {
				background-color: #fff;
				padding: 20px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="content">
				<h2 style="font-size: 20px; font-weight: bold">Hi, {name} !</h2>
				<p>
					Your password has been changed successfully!
                    
				</p>
               
				
				<p style="font-size: 10px">
					MERN AUTH will never email you and ask you to disclose or verify your
					password, credit card, or banking account number.
				</p>
			</div>
		</div>
	</body>
</html>


`;
