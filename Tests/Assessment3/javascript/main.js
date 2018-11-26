/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'} 
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [];

humans = users.filter(function(element){
    return element.race === 'human';
})

test('q1', humans);

/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia;

leia = users.find(function(element){
    return element.id === 2;
})

test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.    
================*/
var totalAge = 0;

totalAge = users.reduce(function(prev, cur) {
    return prev + cur.age;
}, 0);

test('q3', totalAge);

/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [];

userNames = users.map(function(element) {
    return element.username;
})

test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]

numbers.sort(function(a,b){
    return a - b;
});

test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = "Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.";

var regex = /lorem/ig;

replacement.replace(regex, "REPLACED");

test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()
================*/

// .map() returns a new array.

/*==============
    Q8 - What is the difference between .filter() and .find()
================*/

// .find() only returns the first thing found matching the parameters.



function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}