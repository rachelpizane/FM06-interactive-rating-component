let chosenRating= document.getElementById("rating");
let btnMain = document.getElementById("btnMain");
let firstCard = document.getElementById("first-card");
let secondCard = document.getElementById("second-card");
let arrowBack = document.getElementById("arrowBack")
let numRatingBtn;

function addRating(numRating){
    chosenRating.innerHTML = numRating.innerHTML

    if( numRatingBtn){
        numRatingBtn.classList.remove("card-btn-select")
    }
        
    numRatingBtn = document.getElementById("btn" + numRating.innerHTML);
    numRatingBtn.classList.add("card-btn-select")
}

btnMain.addEventListener("click", function(){
    if(chosenRating.innerHTML){
        firstCard.style.display = "none";
        secondCard.style.display = "grid";
    } else {
        alert("Please select a rating before submitting.")
    }
})

arrowBack.addEventListener("click", ()=>{
    firstCard.style.display = "grid";
    secondCard.style.display = "none";
    chosenRating.innerHTML = "";
    numRatingBtn.classList.remove("card-btn-select")
})