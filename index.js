let ft = 264
let HQ = 42

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-HQ)
}

function distanceFromHqInFeet(blocks){
    let difference = distanceFromHqInBlocks(blocks);

    return difference * ft 

}

function distanceTravelledInFeet(start, destination) {
    let difference = Math.abs(start - destination)
    return difference * ft
}
function calculatesFarePrice(start, destination) {
    
    let difference = distanceTravelledInFeet(start, destination)

    if(difference > 2500) {
        return 'Cannot travel that far.'
    } else if (difference < 400) {
        return 'This is free.'
    }
        return difference * 2  
    }
        

        