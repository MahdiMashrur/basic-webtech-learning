let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  let result= (a+b<4)? 'Below': 'Over';

  let value = prompt('What is the "official" name of JavaScript?', '');

  if (value == 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? ECMAScript!");
  }

  // another way of doing
  (value == 'ECMAScript')? alert('Right!') : alert("You don't know? ECMAScript!");