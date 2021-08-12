var txtInput = document.querySelector("#text")
var btn = document.querySelector("#btn")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong, try again later")
}

function clickHandler(){
    var inputText = txtInput.value
    
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            output.innerText = translatedText
        })
        .catch(errorHandler)
    // console.log(input);
    // output.innerText = "HELLO" + inputText.value
}

btn.addEventListener("click", clickHandler)