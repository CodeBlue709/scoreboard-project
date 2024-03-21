let homeCount = 0;//stores value of the HOME teams score
const homeScore = document.getElementById('home-team-score');

let guestCount = 0;//stores value of the GUEST teams score
const guestScore = document.getElementById('guest-team-score');

function compareScores(){
    if(homeCount > guestCount){
        homeScore.classList.add("glowing");
        guestScore.classList.remove("glowing");
    }
    else if(homeCount < guestCount){
        homeScore.classList.remove("glowing");
        guestScore.classList.add("glowing");
    }
    else if(homeCount == guestCount){
        homeScore.classList.add("glowing");
        guestScore.classList.add("glowing");
    }
}

//raises HOME score by 1
function homeIncermentOne(){
    homeScore.textContent =  homeCount+=1;
     compareScores()
}
//raises HOME score by 2
function homeIncermentTwo(){
    homeScore.textContent =  homeCount+=2;
     compareScores()
}
//raises HOME score by 3
function homeIncermentThree(){
    homeScore.textContent =  homeCount+=3;
     compareScores()
}

//raises GUEST score by 1
function guestIncermentOne(){
    guestScore.textContent =  guestCount+=1;
     compareScores()
}
//raises GUEST score by 2
function guestIncermentTwo(){
    guestScore.textContent =  guestCount+=2;
     compareScores()
}
//raises GUEST score by 3
function guestIncermentThree(){
    guestScore.textContent =  guestCount+=3;
     compareScores()
}

//resets both scores back to zero//
function resetScore(){
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent =  homeCount;
    guestScore.textContent = guestCount;
    homeScore.classList.remove("glowing");
    guestScore.classList.remove("glowing");
}







