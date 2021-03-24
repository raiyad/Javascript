var date = new Date()
var today = date.getDay()

switch(today){
    case 0:
    console.log("today is sunday")
    break

    case 1:
    console.log("today is Monday")
    break

    case 2:
    console.log("today is Tuesday")
    break

    case 3:
    console.log("today is wednesday")
    break

    case 4:
    console.log("today is Thursday")
    break

    case 5:
    console.log("today is Friday")
    break

    case 6:
    console.log("today is saturday")
    break
    default:console.log("Not a valid number")
}