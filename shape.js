let number = 50;
for (let i = number; i >= 1; i--){
    let string = "";
    if (i % 2 == 0) {
        continue;
    }
    for (let d = 1; d <=Math.ceil((number - i) / 2); d++){
        string += " ";
    }
    for (let j = 1; j <= i; j++){
        
        string += "*";
    }
    
    console.log(string);
}




for (let j = 1; j <= number; j++){
    let string = "";

    if (j == 1) {
        continue;
    }

    if (j % 2 == 0) {
        continue;
    }

    for (let d = 1; d <= Math.ceil((number - j) / 2); d++){
        string += " ";
    }
    for (let i = 1; i <= j; i++){
        string += "*";
    }
    console.log(string);
}