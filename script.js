let chosenRating= document.getElementById("rating");
let btnMain = document.getElementById("btnMain");
let firstCard = document.getElementById("first-card");
let secondCard = document.getElementById("second-card");
let arrowBack = document.getElementById("arrowBack")

function addRating(numRating){
    chosenRating.innerHTML = numRating.innerHTML
}


btnMain.addEventListener("click", function(){
    if(chosenRating.innerHTML !== ""){
        firstCard.style.display = "none";
        secondCard.style.display = "grid";
    } else {
        alert("You need to give a rating to move on to the next card!")
    }
})

arrowBack.addEventListener("click", ()=>{
    firstCard.style.display = "grid";
    secondCard.style.display = "none";
    chosenRating.innerHTML = "";

})