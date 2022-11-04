document.addEventListener("click", function(e) {
    if(!e.target.matches("#button")) return;

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => renderJokes(data))
        .catch(() => renderError()); 
}); 

function renderJokes(data) {
    const setup = document.querySelector("#setup"); 
    const punchLine = document.querySelector("#punchline"); 
    const error = document.querySelector("#error"); 

    error.innerHTML = ""; 
    setup.innerHTML = data.setup; 
    punchLine.innerHTML = data.punchline; 
}

function renderError() {
    const error = document.querySelector("#error"); 
    error.innerHTML = "Whoops, something went wrong. Please try again later!"; 
}