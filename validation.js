function validate(){
    if (document.myForm.id.value==""){
        document.getElementById("idErr").innerHTML = "Please enter your ID";
        return false;
    }

    if (document.myForm.firstname.value==""){
        document.getElementById("firstnameErr").innerHTML = "Please enter your first name";
        return false;
    }

    if (document.myForm.lastname.value==""){
        document.getElementById("lastnameErr").innerHTML = "Please enter your last name";
        return false;
    }

    if (document.myForm.department.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter your department";
        return false;
    }

    if (document.myForm.position.value==""){
        document.getElementById("positionErr").innerHTML = "Please enter your position";
        return false;
    }

    if (document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(document.myForm.email.value)==false){
           alert("Please enter a valid email address");
            return false;
        }
    }

    if (document.myForm.contactno.value==""){
        document.getElementById("contactnoErr").innerHTML = "Please enter your contact no.";
        return false;
    }
    
    if (document.myForm.salary.value==""){
        document.getElementById("salaryErr").innerHTML = "Please enter your salary";
        return false;
    }

    if (document.myForm.username.value==""){
        document.getElementById("usernameErr").innerHTML = "Please enter your username";
        return false;
    }
}

