//Done
function leapyear(tahunMulai, tahunAkhir){
    let tahunKabisat = [];
    for(let i = tahunMulai; i <= tahunAkhir; i++){

        if(i % 4 == 0){
            if(i % 100 == 0){
                if(i % 400 == 0){
                    tahunKabisat.push(i);
                }
            }else{
                tahunKabisat.push(i);
            }
        }

    }
    console.log(`Jumlah tahun kabisat : ${tahunKabisat.length}`);
    return tahunKabisat.join(",");
}

let result = leapyear(1900, 2020);
console.log(result);