getData()



async function getData(){
    let response = await fetch("http://localhost/getdata.php")
    let data = await response.json()

    return data
}
