var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

let i = 0;
let time = 10000;
const bacaBuku = () =>{
    readBooksPromise(time, books[i])
    .then ( (sisaWaktu) =>{
        i++;
        time = sisaWaktu;
        return (i<books.length) ? bacaBuku(time, i) : console.log(`saya sudah tidak punya waktu untuk baca, ini sisa waktu saya : ${sisaWaktu}`)
    })
    .catch((error) => {console.log(error.message)})
}
bacaBuku();