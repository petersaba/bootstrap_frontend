function checkinput(){
    let message = ""
    if (checkName() == false){
        message += "name format is wrong. "
    }
    if (checkEmail() == false){
        message += "Email format is wrong. "
    }
    if (checkPhone() == false){
        message += "Phone format is wrong. "
    }
    if (checkText() == false){
        message += "Message should be at least 100 characters. "
    }
    document.getElementById("badInput").classList.remove("hide-element")
    if (message.length > 1){
        switchToBadFormat()
        document.getElementById("badInputField").innerText = message
    }else{
        switchToGoodFormat()
        if (insertData()){
            document.getElementById("badInputField").innerText = "message sent successfully"
        }else{
            switchToBadFormat()
            document.getElementById("badInputField").innerText = "There was an error please try again"
        }
    }
    console.log(message)
    console.log(checkName())
    console.log(checkEmail())
    console.log(checkPhone())
    console.log(checkText())
}

function checkName(){
    let name =document.getElementById("full_name").value
    let pattern = /^[A-Za-z]{5,}/
    return pattern.test(name)
}

function checkEmail(){
    let email = document.getElementById("email").value
    let pattern = /^\w{3,}@\w{5,}\.\w{2,}/
    return pattern.test(email)
}

function checkPhone(){
    let phone = document.getElementById("phone").value
    let pattern = /^\+9613\d{6}/
    if (pattern.test(phone)){
        return true
    }else{
        pattern =/^\+961\d{8}/
        if(pattern.test(phone)){
            return true
        }
    }
    return false
}

function checkText(){
    let message = document.getElementById("message").value
    return message.length < 100 ? false : true
}

// 2 functions to alternate between styles for the div that shows the result of the submit
function switchToGoodFormat(){
    document.getElementById("badInput").classList.remove("bad-format")
    document.getElementById("badInput").classList.add("good-format")
}

function switchToBadFormat(){
    document.getElementById("badInput").classList.remove("good-format")
    document.getElementById("badInput").classList.add("bad-format")
}

async function insertData(){
    let full_name = document.getElementById("full_name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let message = document.getElementById("message").value

    let response = await fetch("http://localhost/insertdata.php",{
                                method : "POST",
                                headers :{
                                    "Content-Type" : "application/x-www-form-urlencoded"
                                },
                                body : "full_name=" + full_name + "&email=" + email + "&phone=" + phone + "&message=" + message
                            })
    let data = await response.json()
    console.log(data.success)
    return data.success
}