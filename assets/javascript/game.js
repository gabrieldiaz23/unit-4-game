$(document).ready(function() {
    
    var numArray = [10,20,30]
    var crystalArray = [1,2,3,4,5];

    var sum = 0;
    var winCounter = 0;
    var loseCounter = 0;

    var randNum = numArray[Math.floor(Math.random()*numArray.length)];
    var goal = $("#randNum").html(randNum);


    function numAssign()
    {
        var crystalVal = crystalArray[Math.floor(Math.random()*crystalArray.length)];
        var scoreC = $("#score").html(sum += crystalVal);

        if (sum === randNum)
        {
            winCounter ++;
            $("#winCounter").html("Wins: " + winCounter);
            alert("You win! :D");
            var newRand = numArray[Math.floor(Math.random()*numArray.length)];
            var newGoal = $("#randNum").html(newRand);
            sum = 0;
        }
        else if (sum > randNum)
        {
            loseCounter ++;
            $("#loseCounter").html("Loses: " + loseCounter);
            alert("You lose :(");
            var newRand = numArray[Math.floor(Math.random()*numArray.length)];
            var newGoal = $("#randNum").html(newRand);
            sum = 0;
        }
    }

    $("#crystal1").on("click", function()
    {
        numAssign();
    });
    $("#crystal2").on("click", function()
    {
        numAssign();
    });
    $("#crystal3").on("click", function()
    {
        numAssign();
    });
}); 