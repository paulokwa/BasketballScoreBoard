let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let guestScoreEL = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    guestScoreEL.textContent = guestScore
}


function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEL.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEL.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEL.textContent = guestScore
}


function resetScore(){
    
    homeScore = 0
    guestScore = 0
    
    homeStoreEl.textContent = homeScore
    
    guestScoreEL.textContent = guestScore
    
}