function cetakNama(nama){
    return `Halo, Nama Saya ${nama}, dan PI = ${PI}`
}

const PI = 3.14;

const mhs = {
    nama: 'Fiony ',
    umur: 20, 
    cetakMhs(){
        return `Halo, Nama Saya ${this.nama} dan umur saya ${this.umur} tahun`
    }
}

class Orang{
    constructor(){
        console.log('Objek Orang Telah Dibuat!!!')
    }
}

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mhs = mhs
// module.exports.Orang = Orang;

//Ekspor Sekali
// module.exports = {
//     cetakNama: cetakNama, 
//     PI:PI,
//     mhs: mhs,
//     Orang: Orang
// }

//Notasi ES6
module.exports = {cetakNama, PI, mhs, Orang}
