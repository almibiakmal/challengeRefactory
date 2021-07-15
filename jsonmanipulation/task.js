const data = require('./data.json');

function searchItemMeetingRoom(){
    let items = [];

    data.forEach( (val) => {
        if(val.placement.name === 'Meeting Room'){
            items.push(val);
        }
    });

    return items;
}

function searchElectronicDevice(){
    let devices = [];

    data.forEach( (val) => {
        if(val.type === 'electronic'){
            devices.push(val);
        }
    });

    return devices;
}

function searchFurniture(){
    let furnitures = [];

    data.forEach( (val) => {
        if(val.type === 'furniture'){
            furnitures.push(val);
        }
    });

    return furnitures;
}

function searchPurchased(param = ""){
    let items = [];

    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let temp = param.split(" ");
    temp[1] = bulan[temp[1]];

    data.forEach( (val) => {
        let time = new Date(val.purchased_at);
        let tanggal = `${time.getDate()} ${bulan[time.getMonth()]} ${time.getFullYear()}`;

        if(tanggal === param){
            items.push(val);
        }
    });

    return items;
}

function searchBrownColor(){
    let temp = [];

    data.forEach( (val) => {
        if(val.tags.length == 3 && val.tags[2] == 'brown'){
            temp.push(val);
        }
    });

    return temp;
}
console.log("Task 1:");
console.log(searchItemMeetingRoom());

console.log("Task 2:");
console.log(searchElectronicDevice());

console.log("Task 3:");
console.log(searchFurniture());

console.log("Task 4:");
console.log(searchPurchased("16 Januari 2020"));

console.log("Task 5:");
console.log(searchBrownColor());
