

<!DOCTYPE html>
<html>
<head>

 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1" />
 <style>


@import url(http://fonts.googleapis.com/css?family=Ubuntu:400,500,700,300);
@import url(http://fonts.googleapis.com/css?family=Ubuntu+Condensed);
    
      header, footer,
      nav, article, aside {
        border: 1px solid black;
        padding: 0.25em;
        margin: 0.25em;
        border-radius: 0.25em;
      }

    
      html, body, .viewport {
        width: 100%;
        height: 100%;
        margin: 0;
        	font-family: 'Ubuntu', sans-serif; 
      }


      /* items flex/expand vertically */
      .vbox {
        /* previous syntax */
        display: -webkit-box;
        display:    -moz-box;
        display:         box;

        -webkit-box-orient: vertical;
           -moz-box-orient: vertical;
            -ms-box-orient: vertical;
                box-orient: vertical;

        /* current syntax */
        display: -webkit-flex;
        display:    -moz-flex;
        display:     -ms-flex;
        display:         flex;

        -webkit-flex-direction: column;
           -moz-flex-direction: column;
            -ms-flex-direction: column;
                flex-direction: column;
      }

      /* items flex/expand horizontally */
      .hbox {
        /* previous syntax */
        display: -webkit-box;
        display:    -moz-box;
        display:     -ms-box;
        display:         box;

        -webkit-box-orient: horizontal;
           -moz-box-orient: horizontal;
            -ms-box-orient: horizontal;
                box-orient: horizontal;

     
        display: -webkit-flex;
        display:    -moz-flex;
        display:     -ms-flex;
        display:         flex;

        -webkit-flex-direction: row;
           -moz-flex-direction: row;
            -ms-flex-direction: row;
                flex-direction: row;
      }

      .space-between {
  
        -webkit-box-pack: justify;
           -moz-box-pack: justify;
            -ms-box-pack: justify;
                box-pack: justify;

        -webkit-justify-content: space-between;
           -moz-justify-content: space-between;
            -ms-justify-content: space-between;
                justify-content: space-between;
      }

   
      header, footer {
        height:25px;

      }

      .main {
        /* previous syntax */
        -webkit-box-flex: 1;
           -moz-box-flex: 1;
            -ms-box-flex: 1;
                box-flex: 1;

        /* current syntax */
        -webkit-flex: 1;
           -moz-flex: 1;
            -ms-flex: 1;
                flex: 1;

                   -webkit-box-pack: center;
           -moz-box-pack: center;
            -ms-box-pack: center;
                box-pack: center;

        -webkit-justify-content: center;
           -moz-justify-content: center;
            -ms-justify-content: center;
                justify-content: center;
                	-webkit-align-items: center;
		-ms-flex-pack: center;
		align-items: center;
      }
      h4{

      }

     form {
     	background: #eee;
     	padding: 40px 20px;
     	border-top: 5px solid #E53C2E;

      width: 300px;
     }

     form input {
     	padding: 7px 15px;
     }
     form input[type="submit"]
     {
     	margin-top: 25px;
     }

     .g-recaptcha {
     	margin-top: 25px;
     }
     footer, header {
     	border: none;
     	font-size: 14px;
     	         -webkit-box-pack: center;
           -moz-box-pack: center;
            -ms-box-pack: center;
                box-pack: center;

        -webkit-justify-content: center;
           -moz-justify-content: center;
            -ms-justify-content: center;
                justify-content: center;
                	-webkit-align-items: center;
		-ms-flex-pack: center;
		align-items: center;

     }


     .submit {
      border: none;
      background:#1C75BC;
      color:#fff;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      padding: 8px 0;
     }
     .submit:hover {
      background: #2AABE4;
     }
     footer {
      display: block;
      margin: 10px auto;
      padding: 5px 0;
     }

     @media (max-width: 600px) {

      footer{
        display: none;
      }
     }
    </style>
	<title>Login</title>
</head>
 <body class="vbox viewport">
 <img src="images/logolg.png" alt="logo" width="220px" height="181px" style="text-align: center;margin: 0 auto;">
 	<div class="main vbox">

 				<form class="login vbox" action="login.php" method="POST">
		  <p>Username </p>
		  <input type="text" class="textbox" name="username" required="">
		  <p>Password </p>
		  <input type="password" class="textbox" name="password" required="" >
		  <div class="g-recaptcha" data-sitekey="6LeTZhETAAAAAHMWmNO2T-69bvtJgIqBVZHR1z7e"></div>
		  <input type="submit" class="submit" value="Login" name="submit" >
      <p> Forgot Password,<a href="forgot.php">click here</a> </p>
		</form>
		<script src='https://www.google.com/recaptcha/api.js'></script>
	</div>
	
</body>
<script >
	


</script>
</html>
	























