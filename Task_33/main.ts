let numbers :number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(ordinalsNumber => {
    let suffix = "th";
    if (ordinalsNumber == 1){
        suffix = "st"
    }
    else if(ordinalsNumber == 2){
        suffix = "nd"
    }
    else if(ordinalsNumber == 3){
        suffix = "rd"
    }

    console.log(`${ordinalsNumber}${suffix}`)
})