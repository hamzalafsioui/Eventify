var acc = document.getElementsByClassName("accordin");
const inputSearch = document.getElementById("search");
const BtnSearch = document.getElementById("btn-search");
var filter = inputSearch.value;
var i;
/*-------------------------search---------------------------------*/
BtnSearch.addEventListener('click' , ()=>{
    for(i = 0 ; i <acc.length ;i++){
        let title = acc[i].ge
    if(acc[i][0].indexOf(filter) > -1){
        acc.style.display = ""
    }else{
        acc.style.display = "none"
    }
}
})





/*-----------------accordion--------------------*/
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElemenatSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
/*----------------validation formulaire-----------------*/

const form = document.getElementById("form-question");
const nameInput = document.getElementById("Name_input");
const prenomInput = document.getElementById("Prenom_input");
const emailInput = document.getElementById("Email_input");
const questionInput = document.getElementById("Question_input");
const erreurNom = document.getElementById("validation-nom");
const erreurPrenom = document.getElementById("validation-prenom");
const erreurEmail = document.getElementById("validation-email");
const erreurQuestion = document.getElementById("validation-question");

form.addEventListener("submit", function (form) {
    form.preventDefault();

    erreurNom.textContent = "";
    erreurPrenom.textContent = "";
    erreurEmail.textContent = "";
    erreurQuestion.textContent = "";

    let valid = true;

    if (nameInput.value == "") {
        erreurNom.textContent = "Veuillez entrer votre nom.";
        valid = false;
    }
    if (prenomInput.value == "") {
        erreurPrenom.textContent = "Veuillez entrer votre prenom.";
        valid = false;
    }
    if (emailInput.value == "") {
        erreurEmail.textContent = "Veuillez entrer votre email.";
        valid = false;
    }

    if (questionInput.value == "") {
        erreurQuestion.textContent = "Veuillez poser votre question.";
        valid = false;
    }

    if (valid) {
        alert("votre question et envoyer ");
        form.reset();
    }
});

