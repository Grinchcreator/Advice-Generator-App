let adviceID = document.querySelector(".advice-id");
let adviceText = document.querySelector(".advice-txt");
let button = document.querySelector(".shuffle-btn");
let APIurl = "https://api.adviceslip.com/advice";;

button.addEventListener("click", () => {
    fetch(APIurl, {cache: "no-cache"})
    .then((Response) => Response.json())
    .then((Response) => {
        let data = Response.slip;
        let dataID = data.id;
        let dataAdvice = data.advice;
        adviceID.innerHTML = `advice # ${dataID}`;
        adviceText.innerHTML = dataAdvice;
    });
})