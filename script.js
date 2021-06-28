"use strict";


function main() {

    document.querySelector("#grow-me").classList.add("big");

    document.querySelector("#shrink-me").classList.remove("big");
    for (let li of document.querySelectorAll("li").innerText) {
        console.log(li);
    }

// **4** Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".

    document.getElementById("welcome").innerHTML = "Welcome Grant";

}