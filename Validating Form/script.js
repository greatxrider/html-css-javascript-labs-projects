function checkdata() 
{
    // code to be executed
    var username = document.getElementById("name");
    var emailid = document.getElementById("email");
    if (username.value == "") {
        alert("Please enter your Name");
        username.focus();
        return false;
    }

    if (emailid.value == "") {
        alert("Please enter your Email Address");
        emailid.focus();
        return false;
    }

    return true;
}
