// Code your solution in this file!
function distanceFromHqInBlocks(num){
    let result
    result = Math.sqrt((num - 42)**2)
    return result
}

function distanceFromHqInFeet(num){
    let result
    result = distanceFromHqInBlocks(num) *264
    return result
}

function distanceTravelledInFeet(num1, num2){
    let result
    result = Math.sqrt((num1 - num2)**2) * 264
    return result
}

function calculatesFarePrice(start, destination){
    let result
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400){
        result = 0
    }
    else  if (distance >= 400 && distance < 2000){
        result = (distance - 400)* 0.02
    }
    else if (distance >2000 && distance <= 2500 ) {
        result = 25
    }
    else if (distance > 2500){
        result = 'cannot travel that far'
    }

    return result
}