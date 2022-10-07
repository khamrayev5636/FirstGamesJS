var elForm = document.querySelector(".number__form");
var elInput = document.querySelector(".number__input");
var elBtn = document.querySelector(".number-btn ");
var elText = document.querySelector(".number__span-js");
var elAlert = document.querySelector(".alert__js");
var elAlertBox = document.querySelector(".alert-js")
var x = Math.floor((Math.random() * 100) + 1 );
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
    }else{
        elAlert.textContent = "Siz Sonni topdingiz😎😎😎";
        elInput.setAttribute("disabled" , "disabled");
        elBtn.setAttribute("disabled" , true);
        elAlert.classList.add("bg-success");
        elAlert.classList.remove("bg-danger");
        elAlert.classList.remove("bg-info");
    }

    if(Try == 0){
        elAlert.textContent = "Siz Sonni topa olmadiz🙁🙁";
        elInput.setAttribute("disabled" , "disabled");
        elAlertBox.classList.add("bg-danger");
        elText.textContent = "tugadi";
        elBtn.setAttribute("disabled" , true);
        elAlert.classList.add("bg-danger");
    }


})
