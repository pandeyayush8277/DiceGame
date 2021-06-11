var randomNumber1 = Math.random();

randomNumber1 = Math.ceil(randomNumber1*6);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.random();

randomNumber2 = Math.ceil(randomNumber2*6);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else
{
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
