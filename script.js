const form = document.querySelector("form");
const nField = form.querySelector(".name");
const nInput = nField.querySelector("input");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input")

form.onsubmit = (e)=> {
    e.preventDefault();  //preventing form from submitting
    if (nInput.value == "") { // if email is empty
        nField.classList.add("shake", "error");
    }
    else {
        checkName(); // caling chechName function
    }

    if (eInput.value == "") { // if email is empty
        eField.classList.add("shake", "error");
    }
    else {
        checkEmail(); // calling checkEmail function
    }
    
    if (pInput.value == "") { // if email is empty
        pField.classList.add("shake", "error");
    }
    else {
        checkPassword(); // calling checkPassword function
    }

    setTimeout(()=> { // remove shake class after 500ms
        nField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    // let's work on input keyup 
    nInput.onkeyup = ()=> {
        checkName(); //calling checkName function
    }

    // let's create a function
    function checkName() {
        let patternN = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/; // pattern to validate name

        if (!nInput.value.match(patternN)) { //if password is empty
            nField.classList.add("error");
            let errorTxt = nField.querySelector(".error-text");

            // if name is not empty then show Enter a valid name until a valid else show Name can't be blank
            (nInput.value != "") ? errorTxt.innerText = "Enter a valid name" : errorTxt.innerText = "Name can't be blank";
        }
        else {
            nField.classList.remove("error");
        }
    }

    eInput.onkeyup = ()=> {
        checkEmail(); // calling checkEmail function
    }

    // let's create a function
    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
        
        if (!eInput.value.match(pattern)) { //if pattern not matched with user input
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-text");

            // if email is not empty then show Enter a valid email until a valid else show email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email" : errorTxt.innerText = "email can't be blank";
        }
        else {
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = ()=> {
        if (pInput.value == "") { //if password is empty
            pField.classList.add("error");
        }
        else {
            pField.classList.remove("error");
        }
    }

    // let's work on what to do after user filled up proper details
    // if error class not contains in nField eField and pField then user has entered proper details

    if (!nField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "#"; // remove that # and put the url where you want to submit the form data
        console.log("Form Submitted")
    }
}