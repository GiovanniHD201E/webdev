highscore1 = 0;
 highscore2 = 0;
 highscore3 = 0;
 
 function myfunction() {
    
    input = document.getElementById("result").value;
    count = parseInt(input, 10);
    count += 1;
    document.getElementById("result").value = count;
    }
    
function reset() {
    document.getElementById("result").value = 0;
}

function save() {

    name = prompt("What is your name?");
    score = document.getElementById("result").value;
    score = parseInt(score, 10);
    
    function alhigh() {
        alert("Your name is: " + name + " Your score is: " + score + " The current highscore is: " + highscore1 + " Your score is in the highscore list! You have the a new highscore!!!");
    }
    
    if (score > highscore1) {
        alhigh();
        
        secondtothird = document.getElementById("highscore2").innerHTML;
        document.getElementById("highscore3").innerHTML = secondtothird;
        
        firsttosecond = document.getElementById("highscore1").innerHTML;
        document.getElementById("highscore2").innerHTML = firsttosecond;
        
        document.getElementById("highscore1").innerHTML = "<strong>" + name + "</strong>" + " | " + score;
        highscore1 = score;
        return highscore1;
        
    } else if (score > highscore2) {
        alhigh();
        
        secondtothird = document.getElementById("highscore2").innerHTML;
        document.getElementById("highscore3").innerHTML = secondtothird;
        
        document.getElementById("highscore2").innerHTML = "<strong>" + name + "</strong>" + " | " + score;
        highscore2 = score;
        return highscore2;
        
    } else if (score > highscore3) {
        alhigh();
        document.getElementById("highscore3").innerHTML = "<strong>" + name + "</strong>" + " | " + score;
        highscore3 = score;
        return highscore3;
        
    } else {
        alert("Your score is not higher than the current highscore, " + name + ". Your score is: " + score + " The current highscore is: " + highscore1);   
    }
}