function scuberGreetingForFeet(feet){
if (feet <= 400){
  return "This one is on me!"
}

else if (feet >= 2000 && feet <= 2499){
  return "I will glad take your thirty bucks."
}

else if (feet >= 2500){
  return "No can do."
}
}









function switchOnCharmFromTip(phrase){
switch(phrase) {
      case 'generous':
          console.log('Thank you so much.');
          break;

      case 'not as generous':
          console.log('Thank you.');
          break;

      default:
        console.log('Bye.');
  }
