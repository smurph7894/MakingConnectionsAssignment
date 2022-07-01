console.log("page loaded...");

function nameChange (element) {
    console.log("this is connected")
            var currentName = document.querySelector("#"+"profileName")        
        if(currentName.innerHTML === "Jane Doe") {
            currentName.innerHTML = "James Doe"
        }
    }



function acceptRequest(id) {
    removeRequest(id)

    //add one to Your Connections
    var connectionElem = document.querySelector("#"+"b2")
    var connectionText = connectionElem.innerText
    var connectionCount = parseInt(connectionText)
    connectionCount++
    connectionElem.innerHTML = connectionCount
}

function removeRequest (id) {

    //remove request line after icon selected
    var element = document.querySelector("#"+id)
    element.remove()

     //remove 1 from request count
    var connectionRequestElem = document.querySelector("#"+"b1")
    var connectionRequestText = connectionRequestElem.innerText
    var requestCount = parseInt(connectionRequestText)
    requestCount--
    connectionRequestElem.innerHTML = requestCount
}