getData()


async function getData(){
    let response = await fetch("http://localhost/getdata.php")
    let data = await response.json()
    let dataLength = await data.length
    console.log(dataLength)
    returnedArr = []
    for (let i=0; i<dataLength; i++){
        let currentData = await data[i]
        returnedArr.push(currentData)
    }
    
    showData(returnedArr)
    return returnedArr
}

function showData(data){

    let whereToAdd = document.getElementById("displayMessages")
    for (let i=0; i<data.length; i++){
        
        let newElement = document.createElement("div")
        addParagToDiv(data[i].id, newElement)
        addParagToDiv(data[i].full_name, newElement)
        addParagToDiv(data[i].email, newElement)
        addParagToDiv(data[i].phone, newElement)
        addParagToDiv(data[i].message, newElement)
        whereToAdd.appendChild(newElement)
        console.log(newElement)
        
    }
}

function addParagToDiv(data, div){
    let parag = document.createElement("label")
    let content = document.createTextNode(data)
    parag.appendChild(content)
    div.appendChild(parag)
}