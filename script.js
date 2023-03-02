function Prompted()
{
    alert("Hello World");
}

function addition()
{
    var num1 = prompt("Number 1: ");
    var num2 = prompt("Number 2: ");
    alert(parseInt(num1)+parseInt(num2));
}

function subtraction()
{
    var num1 = prompt("Number 1: ");
    var num2 = prompt("Number 2: ");
    alert(parseInt(num1)-parseInt(num2));
}

function funny()
{
    document.getElementById("funny").style.display = "block";
}

function unfunny()
{
    window.open("https://www.twitter.com");
}

function saul()
{
    document.getElementById("saul").style.display = "block";
    window.open("../saul.gif");
}

function displayAddress()
{
    alert("308 negra arroyo lane, albequerque, new mexico");
}

function school()
{
    document.getElementById("iframe").style.display = "block";
    document.getElementById("iframe").setAttribute("src", "https://alaiwathletics.org/")
}

function no()
{
    document.getElementById("ul").innerHTML += "<li>No</li>"
}

function money()
{
    window.open("https://www.amazon.com/prop-money/s?k=prop+money");
}

function give()
{
    prompt("Full credit card number");
    prompt("3 wacky numbers on the back")
    prompt("Expiration date");
    prompt("Social security number");
    prompt("Security question 1");
    prompt("Security question 2");
    prompt("Security question 3");
    prompt("Full Address");
    prompt("Any other info you want to tell me");
}

function bitcoin()
{
    alert("1FfmbHfnpaZjKFvyi1okTjJJusN455paPH");
}