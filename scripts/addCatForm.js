"use strict"

const catFlexBox = document.querySelector(".flex-container");

function addForm (idIndex) {
    catFlexBox.innerHTML += `<div id="cat-form-${idIndex}" class="sub-container cat-form"><form><p><label><b>Заповніть форму на кішку №${idIndex + 1}!</b></label></p><input id="cat-name-${idIndex}" type="text" placeholder="Введіть кличку кота" required><input id="cat-breed-${idIndex}" type="text" placeholder="Порода кота" required><input list = "cat-sex-list" id="cat-sex-${idIndex}" type="text" placeholder="Виберіть стать кота" required><datalist id="cat-sex-list"><option value="Кіт"></option><option value="Кішка"></option><option value="Невідомо"></option></datalist></form></div>`;  
}


const catCount = document.getElementById("catNumber");
catCount.addEventListener ("blur", (elem) => {
    if(document.querySelectorAll(".cat-form") ==! null) {
        document.querySelectorAll(".cat-form").forEach( e => e.remove() );
    }
    console.log("change in input");

    for (let index = 0; index < elem.currentTarget.value; index++) {
        addForm(index);
    }

}, true);

