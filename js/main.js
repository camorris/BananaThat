var timeLeftElement = $('#timeLeft')
var resetBtn = $('#clear')
var pointsElementA = $('#pointsA')
var pointsElementB = $('#pointsB')
var playerTurn = $('.turn') //kyle
var speed = 1000
var score = 0 
var seconds = 30
var playerAScore = null
var playerBScore = null
var timesPlayed = 0
var currentPlayer = 'playerA' //kyle

//These lines of code if for the Banana collection
var newBanana= $('#start')

newBanana.on('click', function(){
newBanana.toggleClass('light-on')
var banana = $('<div>').addClass('banana').append('<img src="newbanana.svg"/>')


// above div tellsjquery we want to create this element
// $('body').append('<div class="planet"></div>')
banana.on('click', function(){
    
    // kyle - if statement
    if (currentPlayer === 'playerA'){
        score = score + 10
        pointsElementA.html("Score A: " + score )
        $('img').css({height: "-=30px",width:"-=30px"})
        speed = speed - 200
     
        
       
    } else if(currentPlayer === 'playerB'){
        score = score + 10
        pointsElementB.html("Score B: " + score)
        $('img').css({height: "-=30px",width: "-=30px"})
        speed = speed - 200
        

    }
    
})
// banana.css({
//     left: Math.random() * 500,
//     top: Math.random() * 500,
    
// })

    $('body').append(banana)
    banana.fadeIn('fast')

    setInterval(function(){
    banana.animate({
        left: Math.random() * 900,
        top: Math.random() * 600,
        },speed, 'swing')
    }, speed)

    theIntervalId = setInterval(countDown, speed)

})



function countDown(){
    seconds = seconds - 1
    timeLeftElement.html( "Time Left: " + seconds + " seconds")
    if (seconds <= 0){
        currentPlayer = "playerB" //kyle
        //kyle if statement
        if (currentPlayer === "playerB"){
        playerTurn.html('Player B')}
        speed = 1000
        clearInterval( theIntervalId );
        $('img').css({height: "300px", width: "300px"})
        alert("Your score is " + score);
        if(playerAScore == null){
            playerAScore = score
        }
        else {
            
            playerBScore = score
        }

        timesPlayed += 1

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


        theIntervalId = setInterval(countDown,1000)
        seconds = 30
        timeLeftElement.innerHTML = "Time Left: " + seconds + " seconds"
        score = 0
        // pointsElement.innerText = "Score: 0"
    } 
}


resetBtn.on('click', function(){
    score = 0
    pointsElementA.text("Score A: 0") 
    pointsElementB.text("Score B: 0")
    $('.banana').remove()
    playerTurn.html('Player A')
    speed = 1000
 
    //reset timer
    seconds = 30
    timeLeftElement.html("Time Left: " + seconds + " seconds")
    clearInterval(theIntervalId)
    // theIntervalId = setInterval(countDown, 1000)
    
})