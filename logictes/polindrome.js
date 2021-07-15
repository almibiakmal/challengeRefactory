function polindrom(param = ""){

    param = param.toLowerCase();
    let testing = param.split("").reverse().join("");

    if(param == testing){
        return true;
    }else{
        return false;
    }
}


let data = ['Radar','Malam','Kasur ini rusak','Ibu Ratna antar ubi','Malas','Makan nasi goreng','Balonku ada lima']
data.forEach((val) => {
    let result = polindrom(val);
    let description = result ? "polindrome" : "not polindrome";
    console.log(`${val} ( ${description} )`);
});
