function scuberGreetingForFeet(feet){
if (feet <= 400){
  return "This one is on me!"
}

else if (feet >= 2000 && feet <= 2499){
  return "I will gladly take your thirty bucks."
}

else if (feet >= 2500){
  return "No can do."
}
}



function ternaryCheckCity(city){
  if (city ==="NYC"){
    return "Ok,sounds good."
  }

  else {
    return "No, go."
  }
}




function switchOnCharmFromTip(phrase){
switch(phrase) {
      case 'generous':
          return 'Thank you so much.';
          break;

      case 'not as generous':
          return 'Thank you.';
          break;

      default:
        return 'Bye.';
  }
