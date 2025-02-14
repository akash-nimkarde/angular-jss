$(document).ready(()=>{
    $("#btnlogin").click(()=>{
        let email=$("#email").val();
        let password=$("#password").val();
        if(validate(email,password))
        {
            $("#message").innerHTML("Welcome to transflower");

        }
        else
        {
            $("#message").innerHTML("Invalid user,please try again");
        }
    
    }
    );
});



