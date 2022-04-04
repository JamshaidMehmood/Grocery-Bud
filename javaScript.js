// selecting target items
let alert_sign = document.querySelector(".alert-message");
let form = document.querySelector(".grocery-form");
let grocery = document.getElementById("grocery");

let s_btn = document.querySelector(".submit-btn");
let container = document.querySelector(".gerocery-container");
let list = document.querySelector(".gerocery-list");
let c_btn = document.querySelector(".c-btn");
// defining variab for later use
let editElement;
let editFlag = false;
let editId = "";

//adding eventss
//submit form

form.addEventListener("submit", addiItems);

// functions
function addiItems(event) {
    event.preventDefault();
    const value = grocery.value;
    //console.log(value);
    const id = new Date().getTime().toString();
    if (value !== "" && editFlag === false) {
        //creating an element
        let element = document.createElement("article");
        //adding a class
        element.classList.add("gerocery-item");
        //adding an id  pahla aur ab difference ya ha  ka ab hamm ya kam  dynamic kar rha
        let attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn" type="button">Edit</button>
            <button class="del-btn" type="button">Del</button>
        </div>`;

        //appending child
        list.appendChild(element);
        //displaying alert
        displayAlertMessage("item added to the list", "success");
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();

    }
    else if (value !== "" && editFlag === true) {
        console.log("editng");

    }
    else {
        //console.log("empty");
        displayAlertMessage("Enter some value !!!", "danger")


    }

}

//displaying alert message
function displayAlertMessage(text, action) {
    alert_sign.innerHTML = text;
    alert_sign.classList.add(`alert-${action}`);

    //for removing the message quickly
    setTimeout(function () {
        alert_sign.innerHTML = "";
        alert_sign.classList.remove(`alert-${action}`);

    }, 1000);

}

function setBackToDefault(id, value) {
    grocery.value = "";
    let editElement;
    let editFlag = false;
    let editId = "";

}