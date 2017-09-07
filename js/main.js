
//<---These are my variables set to certain html or data type information--->//
var timeLeftElement = $('#timeLeft')
var resetBtn = $('#clear')
var pointsElementA = $('#pointsA')
var pointsElementB = $('#pointsB')
var playerTurn = $('.turn') 
var speed = 1000
var score = 0 
var seconds = 30
var playerAScore = null
var playerBScore = null
var timesPlayed = 0
var currentPlayer = 'playerA' 
var newBanana= $('#start')
//<---This click function is for my Banana button which allows the game to begin--->//
newBanana.on('click', function(){
    newBanana.toggleClass('light-on')
    var banana = $('<div>').addClass('banana').append('<img src="newbanana.svg"/>')
//<---This click function allows the players to click on the Banana Image, after the Banana button is clicked--->//
    banana.on('click', function(){
    
//<---This if statement allows for score increases, size decreases, speed increases for each player--->//
    if (currentPlayer === 'playerA'){
        score = score + 10
        pointsElementA.html("Score A: " + score )
        $('img').css({height: "-=10px",width:"-=10px"})
        speed = speed - 300
    } 
        else if (currentPlayer === 'playerB'){
        score = score + 10
        pointsElementB.html("Score B: " + score)
        $('img').css({height: "-=10px",width: "-=10px"})
        speed = speed - 300
        }
    })
//<---This line of code uses jQuery to insert content to the body by specifying the parameter banana--->
    $('body').append(banana)
//<--This line of code makes my banana fimage fade in fast by using the method .fadeIn()--->
    banana.fadeIn('fast')
//<---These lines of code make my banana image animate once the banana button has been clicked--->
    setInterval(function(){
    banana.animate({
        left: Math.random() * 900,
        top: Math.random() * 600,
        },speed, 'swing')
    }, speed)
//<---This line of code uses the setInterval method to continue calling the 'countDown' function and setting the milliseconds to 1000 which is the variable speed--->//
    theIntervalId = setInterval(countDown, speed)
})
//***That is the end of the newBanana click event***//

//<---These line code creates a function that allows the timer to count down by 1 second and reflects the text in my html accordingly--->//
function countDown(){
    seconds = seconds - 1
    timeLeftElement.html( "Time Left: " + seconds + " seconds")
//<---This if statement makes sure once the timer hits 0 seconds the Player A turn is over and Player B can play--->
    if (seconds <= 0){
        currentPlayer = "playerB" //kyle
//<---This if statement allows us to see that PlayerB should be playing plus it puts the speed, interval and size back to its orginal properties--->//
        if (currentPlayer === "playerB"){
        playerTurn.html('Player B')}
        speed = 1000
        clearInterval( theIntervalId );
        $('img').css({height: "300px", width: "300px"})
        alert("Your score is " + score);
//<---This if statement makes sure that score based off how many times the banana was clicked is assigned to the right player the first time its played--->//
        if(playerAScore == null){
            playerAScore = score
        }
        else {
            playerBScore = score
        }
            timesPlayed += 1
//<---These if statements makes sure an alert is displayed to let us know who won based off a comparison of player score after the second player plays the game--->//
        if(timesPlayed == 2) {
            if(playerAScore > playerBScore) {
                alert("Player 1 wins")
            }
            else if(playerBScore > playerAScore) {
                alert("Player 2 wins")
            } else { 
                alert ("Its a Tie you both are AWESOME")
            }
        }
//<---These lines of code allow the timer to start counting down again for player B--->//
        theIntervalId = setInterval(countDown,1000)
        seconds = 30
        timeLeftElement.innerHTML = "Time Left: " + seconds + " seconds"
        score = 0
    } 
}
//***This is the END of my coundtDown Function***//
//<---This is the start to my resetButton function that allows the game to reset score, time, banana position and player--->//
resetBtn.on('click', function(){
    score = 0
    pointsElementA.text("Score A: 0") 
    pointsElementB.text("Score B: 0")
    $('.banana').remove()
    playerTurn.html('Player A')
    speed = 1000
    seconds = 30
    timeLeftElement.html("Time Left: " + seconds + " seconds")
    clearInterval(theIntervalId)
})

//***THIS IS THE END OF MY JQUERY AND JAVASCRIPT CODE -- SPECIAL THANKS TO TIM, CHAKRIT AND KYLE FOR HELPING, EXPLAINING AND SUPPORTING */