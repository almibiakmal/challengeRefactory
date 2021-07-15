function nearestFibonacci(param = []){
    var number = param.reduce( (a, b) => {
        return a + b;
    }, 0);

    let angkaPertama = 0;
    let angkaKedua = 1;
    let hasilPenjumlahan = angkaPertama + angkaKedua;
    
    while(hasilPenjumlahan <= number){
        angkaPertama = angkaKedua;
        angkaKedua = hasilPenjumlahan;
        hasilPenjumlahan = angkaPertama + angkaKedua;
    }

    let jarakAtas = hasilPenjumlahan - number;
    let jarakBawah = number - angkaKedua;

    if(jarakAtas < jarakBawah){
        return {
            jumlahParameter: number,
            nearestFibonacci: hasilPenjumlahan,
            jarak: jarakAtas
        };
    }else{
        return {
            jumlahParameter: number,
            nearestFibonacci: angkaKedua,
            jarak: jarakBawah
        };
    }
}

console.log(nearestFibonacci([15,1,20]));