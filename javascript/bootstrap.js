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
    if (message.length > 1){
        document.getElementById("badInput").classList.remove("hide-element")
        document.getElementById("badInput").classList.add("show-element")
        let messageField = document.getElementById("badInputField").innerText = message
    }else{
        document.getElementById("badInput").classList.remove("show-element")
        document.getElementById("badInput").classList.add("hide-element")
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