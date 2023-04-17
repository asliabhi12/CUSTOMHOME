const inputBox = document.getElementById("input-box");
const listContainer = document.getElementsByClassName("to-do-container")[0];

function addTask(){
    
    if(inputBox.value === ''){
        alert("you must write something")
    }
    else{
        let li = document.createElement("label")

        li.innerHTML = `<input type="checkbox" name="${inputBox.value[0]}" id="" />${inputBox.value}`
        br = document.createElement("br")
        listContainer.appendChild(li)
        
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        
        li.appendChild(span)
        listContainer.appendChild(br)
        

    }
    inputBox.value=""
    saveData()
    
}



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LABEL"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.nextSibling.remove()
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()