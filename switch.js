var date = new Date();
var day = date.getDay();

//  0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday


switch (day) {
    case 0:
        console.log("Today is Sunday ");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;

    default: console.log("Error")
    
}