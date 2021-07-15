function reverseword(param = ""){
    let temp = param.split("");
    let positionUpperCase = [];
    
    //Dapatkan posisi huruf besar
    for(i in temp){
        if(temp[i] == " "){
            continue;
        }

        let upperCase = temp[i].toUpperCase();
        if(upperCase === temp[i]){
            positionUpperCase.push(i);
        }
    }

    //Reverse setiap kata
    let word = param.toLowerCase().split(" ");
    for(i in word){
        word[i] = word[i].split("").reverse().join("");
    }

    //Kembalikan menjadi kalimat dan ubah menjadi array huruf
    let tempReverse = word.join(" ").split("");

    //Pertahankan huruf besar berdasarkan posisinya
    positionUpperCase.forEach( (position) => {
        tempReverse[position] = tempReverse[position].toUpperCase();
    });

    return tempReverse.join("");
}

var result = reverseword("I am A Great human");
console.log(result);

