function onValidate()
{
    let emailAddress=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(emailAddress==="akash" && password==="akash")
{

    alert("Welcome");
}
else{
    alert
    ("invalid");
}
}

function autheticate(email, password)
{
    validate(email,password);
}
