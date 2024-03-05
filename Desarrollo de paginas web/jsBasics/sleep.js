//Funcion regresar horas de dormir
function getSleepHours(day){
    let x;
    switch(day){
        case "monday":
            x = 7;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "tuesday":
            x = 7;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "wednesday":
            x = 6;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "thursday":
            x = 8;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "friday":
            x = 9;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "saturday":
            x = 7;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        case "sunday":
            x = 8;
            //console.log("On ", day, " you slept: ", x, " hours");
            return x;
        default:
            //console.log("Invalid day input, returning 0");
            return 0;
    }
}

function getActualSleepHours(){
    let sum=0;
    const days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    for(let i=0;i<7;i++){
        //getSleepHours(days[i]);
        sum=sum+getSleepHours(days[i]);
    }
    //console.log("Total hours: ",sum);
    return sum;
}

function getIdealSleepHours(hours){
    return hours*7;
}
function calculateSleepDebt(){
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours(8);

    if(actualSleepHours===idealSleepHours){
        console.log("You got the same amount of ideal and actual hours slept!");
        console.log("Missing sleep time: ", idealSleepHours-actualSleepHours);    
    }
    else if(actualSleepHours>idealSleepHours){
        console.log("You got more sleep than needed!");
        console.log("Extra sleep time: ", actualSleepHours-idealSleepHours);
    }else{
        console.log("You should get some more sleep!");
        console.log("Missing sleep time: ", idealSleepHours-actualSleepHours);
    }
    console.log("Total sleep time: ", getActualSleepHours());
    console.log("Average sleep time: ", getActualSleepHours()/7);
    console.log("Ideal hours: ", getIdealSleepHours(8));
}

calculateSleepDebt();