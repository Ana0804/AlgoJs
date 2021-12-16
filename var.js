const { Console } = require("console");

var liquide = 'je bois'; //string

var number = 1; //int

var tasse ='chocolat chaud'; //string

var solide = 'je mange'; //string

var fruit = 'clémentine'; //string

function sayHello(){
    
    console.log (liquide + " " + number + " " + tasse + " " + "et" + " " + solide + " " + number + " " + fruit);

}

sayHello();

var price1 = 30;
var price2 = 22;
var price3 = 45;
var total = price1 + price2 + price3;

    console.log (price1 + price2);

var person = "Paul", action = "part travailler", manière = "en vélo", distance = 12, unité = "kilomètres";

    console.log (person + " " + action + " " + manière + " " + distance + unité); 

var $ = 2;
var $$ = 20;
var $$$ = 15;

const PI = 3.14159265359;
    
    console.log ($+$$+PI);

var pi = 3.14;
var person = "Mickey Mouse";
var answer = "quarante-deux";

    console.log("en voyant "+ pi + ", " + person + " eu la réponse à la vie et à tout le reste: " + answer); 

var x = "5" + 2 + 3;
    console.log (x);

var x = 2 + 3 + "5";
    console.log (x);

{
    let x = 8;
    let y = 2;
    let z = x + y;
        console.log (z);
}   

{
    let x = 5;
    let y = 4;
    let z = x - y;
        console.log (z);
}

{
    let x = 5;    
    let y = 7;    
    let z = x * y;
        console.log (z);
}

{
    let x = 5;    
    let y = 2;    
    let z = x / y;
        console.log (z);
}

{
    let x = 5;
    let y = 2;
    let z = x % y;
        console.log (z);
}

var x = 10;
x += 5;
    console.log (x);

{
    let text1 = "Etoile";
    let text2 = "filante";
    let text3 = text1 + " " + text2;
        console.log (text3);
}

{
    let text1 = "Ce concert ";
    text1 += "est génial";
        console.log (text1);
}

{
    let x = 100 + 50
        console.log (x);
}

{ 
    let a = 100;
    let b = 50;
    let x = a + b;
        console.log (x);
}

{
    let a = 3;
    let x = (100 + 50) * a;
        console.log (x);
}

{
    let x = 5;
    x++;
    let z = x;
        console.log (z);
}

{
    let x = 5;
    x--;
    let z = x;
        console.log (z);
}




{
    let x = 5;
    let z = x ** 2;
        console.log (z);
}
                // le bloc d'en-haut et d'en-bas fonctionnent de la même manière
{
    let x = 5;
    let z = Math.pow(x,2);
        console.log (z);
}




{
    let x = 16 + "Volvo";
        console.log (x);
}

{
    let x = "seize" + "Volvo";
        console.log (x);
        // Les guillemets déteminent s'il s'agit d'un segment texte ou numérique
}    

{
    let x = 16 + 4 + "Volvo";
        console.log (x)
}

{
    let x = "Volvo" + 16 + 4;
        console.log (x)
    // l'ordre est important, ce qui vient en premier défini le type d'addition
}

{
    let x;          // ici, x est indéfini
    x = 5;          // maintenant, on sait que c'est un chiffre
    x = "John";      // c'est désormais une chaîne de texte
        console.log (x);
}

{
    let dogBreed1 = "German Shepherd"; //double quotes
    let dogBreed2 = 'German Shepherd'; //single quotes
        console.log (dogBreed1 + " " + dogBreed2);
}

{
    let answer1 = "It's a good evening";         // Single quote inside double quotes
    let answer2 = "It is called 'Starlight'";    // Single quotes inside double quotes
    let answer3 = 'It is called "Starlight"';    // Double quotes inside single quotes
        console.log (answer1 + " " + answer2 + " " + answer3)
}

{
    let x1 = 34.00;     // Written with decimals
    let x2 = 34;        // Written without decimals
    let x3 = 3.14;
        console.log (x1 + " " + x2 + " " + x3)
}

{
    let y = 123e5;      // 12300000
    let z = 123e-5;     // 0.00123
        console.log (y + " " + z)
}

{
    let x = 5;
    let y = 5;
    let z = 6;
        console.log ( x == y ) //true
        console.log ( x == z) //false
}

const cars = ["Saab","Volvo","BMW"]; //Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
    console.log ( cars [0]) 

{
    const person = {
        firstName:"John", 
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue"};
        
        console.log ( person.firstName + " is " + person.age + " years old.")
}

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
    console.log (typeof "" + typeof"John" + typeof"John Doe");

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
    console.log (typeof 3.14 + typeof(3));

{
    let car; //it's undefined
        console.log (car);
}

{
    car = undefined; //same here
        console.log (car);
}

{
    let car = "";    // The value is "", the typeof is "string"
        console.log ( "the value is: " + car + " " + "the type is: " + typeof car);
}

function myFunction(p1, p2) {
    return p1 * p2; // The function returns  the product of p1 and p2
}        
    console.log (myFunction(4, 3))


var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}
    console.log (x)

function toCelsius(f) {
    return (5/9) * (f-32);
}
    console.log (toCelsius(77))
    console.log ("the temperature is " + toCelsius(77) + " celsius")

{
    const a = 10;
    const b = a * 2;
    const c = b + 5 ;
    const x = c - 15;
    const y = x / 3;
    
    var total = [a, b, c, x, y] 
    
    var i = 0
    for (i; i<total.length; i++) {
        console.log (total[i]) //permet de parcourir le tableau
    }
    function myFunction(data) {
        
        console.log(data)
    }
    
    myFunction(total); //les résultats sont donnés dans un tableau
}