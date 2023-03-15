function scuberGreetingForFeet(feet){
  // Write your code here!
if (feet<=400){
  return('This one is on me!')
}
if (feet < 2500){
  return ('I will gladly take your thirty bucks.')
}
if (feet > 2500){
  return('No can do.')
}
}
function ternaryCheckCity(city){
  switch(city){
    case "NYC":
      return 'Ok, sounds good.'
      break
    case "Pittsburgh":
      return 'No go.'

  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return ('Thank you so much.')
      break
    case 'not as generous':
      return('Thank you.')
      break
    default:
      return("Bye.")
  }
    


}