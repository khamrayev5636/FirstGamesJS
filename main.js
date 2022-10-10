var elForm = document.querySelector(".number__form");
var elInput = document.querySelector(".number__input");
var elBtn = document.querySelector(".number-btn ");
var elText = document.querySelector(".number__span-js");
var elAlert = document.querySelector(".find__thenumber-alert");
var elAlertBox = document.querySelector(".alert-js");
var elAlertSearch = document.querySelector(".alert__search")
var elAlertTrue = document.querySelector(".alert__true");
var x = Math.floor((Math.random() * 100));
// var x = 15;

var Try = 6;

elText.textContent = Try;

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    Try--;
    elText.textContent = Try;

    var inputValue = Number(elInput.value);


    if(inputValue > x){
        elAlert.textContent = "Siz kiritgan son x dan kotta";
        elAlert.classList.add("bg-danger");
        elAlert.classList.remove("bg-info");
    }else if(inputValue < x){
        elAlert.textContent = "Siz kiritgan son x dan kichik";
        elAlert.classList.add("bg-info");
        elAlert.classList.remove("bg-danger");
    }else if(inputValue == x){
        elAlert.textContent = "Siz Sonni topdingiz😎😎😎";
        elAlertTrue.textContent = x;
        elAlertSearch.classList.add("alert__search-js")
        elInput.setAttribute("disabled" , "disabled");
        elBtn.setAttribute("disabled" , true);
        elAlert.classList.add("bg-success");
        elAlert.classList.remove("bg-danger");
        elAlert.classList.remove("bg-info");
    }
    
    if(Try == 0){
        elInput.setAttribute("disabled" , "disabled");
        elAlertTrue.textContent = x;
        elAlertSearch.classList.add("alert__search-js");
        elText.textContent = "tugadi";
        elAlertBox.classList.add("bg-danger")
        elBtn.setAttribute("disabled" , true);
        elAlert.classList.add("find__thenumber-alert--js");
    }

    elInput.value = "";
})
