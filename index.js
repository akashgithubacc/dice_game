



    var randomnumber = (Math.random()*5)+1;

var randomnumber1 = Math.round(randomnumber);


    var address = "images/dice"+randomnumber1+".png";
    
    //alert(address);
    document.querySelector(".img1").src = address;


randomnumber = (Math.random()*5)+1;

var randomnumber2 = Math.round(randomnumber);

var address = "images/dice"+randomnumber2+".png";
    
    //alert(address);
    document.querySelector(".img2").src = address;


if(randomnumber1 > randomnumber2)
{
    document.querySelector(".btn").innerHTML = "🚩 Player 1 Wins!!";
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector(".btn").innerHTML = "Player 2 Wins!! 🚩";
}
else{
    document.querySelector(".btn").innerHTML = "🚩 It's a Draw!! 🚩";
}
    

