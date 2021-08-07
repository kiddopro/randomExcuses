let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


window.onload = function () {
  //write your code here
  let element = document.getElementById("excuse");
  element.innerHTML = phrase();
};

function randomExcuses(arrayOfExcuses) {
  let random = Math.floor(Math.random() * arrayOfExcuses.length - 1) + 1;
  return random;
}

function phrase() {
  let phrase =
    who[randomExcuses(who)] +
    " " +
    action[randomExcuses(action)] +
    " " +
    what[randomExcuses(what)] +
    " " +
    when[randomExcuses(when)];
  return phrase;
}


