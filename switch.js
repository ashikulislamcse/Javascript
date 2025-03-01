const mark = 55;
switch(true){
    case (mark >= 80):
        console.log("A+");
        break;
    case (mark >= 70):
        console.log("A");
        break;
    case (mark >= 60):
        console.log("B");
        break;
    case (mark >= 50):
        console.log("C");
        break;
    case (mark >= 40):
        console.log("D");
        break;
    case (mark == 33):
        console.log("Kono moto pass");
        break;
    
    default:
        console.log("Check this mark");
}