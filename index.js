var readBooks = require('./index.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
]

readBooks(10000,books[0], function() {
    let waktu = 10000
    let sisaWaktu = waktu-books[0].timeSpent
    readBooks(sisaWaktu,books[1], function(){
        let sisaWaktu2 = sisaWaktu - books[1].timeSpent;
        readBooks(sisaWaktu2,books[2], function(){
            let sisaWaktu3 = sisaWaktu2 - books[2].timeSpent;
        })
    })
});