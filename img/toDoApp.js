const txtBox = document.getElementById('txtBox');
const itemList = document.getElementById('list');
const deleteAllBtn = document.getElementById("deleteAllBtn");
function add() { //add task func
    if(txtBox.value === ''){ 
        alert('The task is undefined')
    }
    else{ 
        let li = document.createElement('li');
        li.innerHTML = txtBox.value;
        itemList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    txtBox.value = '';
    save();
}
deleteAllBtn.addEventListener("click", function () { //delete all button
    itemList.innerHTML = "";
    save();
});

itemList.addEventListener("click" , function(e){ //add item by click
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        save();
    }
}, false)

// add item by pressing Enter
txtBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        add(); 
    }
});


function save(){ //save to local storage function
localStorage.setItem("data" , list.innerHTML);
}
function showList(){
    list.innerHTML = localStorage.getItem("data")
}
showList();