getData()



async function getData(){
    let response = await fetch("http://localhost/getdata.php")
    let data = await response.json()

    return data
}

function showData(data){
    let whereToAdd = document.getElementById("displayMessages")
    for (let i=0; i<data.length; i++){
        let newElement = document.createElement("div")
        
    }
}

function addParagToDiv(data, div){
    let parag = document.createElement("p")
    let content = document.createTextNode(data)
    parag.appendChild(content)
    div.appendChild(parag)
}