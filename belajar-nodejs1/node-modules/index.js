// const fs = require('fs')// Core Modules
// const cetakNama = require('./coba') // Local Modules
// const moment = require('moment'); // Third Party Modules / NPM Modules / di dalam folder node_modules

const coba = require('./coba')
console.log(coba)

// console.log(cetakNama('Akbar'))

console.log(coba.cetakNama('Akbar'), coba.PI)
// console.log(`Halo, Seorang Mahasiswa Bernama ${coba.mhs.nama}, Dan Berumur ${coba.mhs.umur}`)
console.log(coba.mhs.cetakMhs())
console.log(new coba.Orang())