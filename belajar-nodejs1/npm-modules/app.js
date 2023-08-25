const validator = require('validator');
const chalk = require ('chalk');
// Validator
console.log(`Ini Adalah Validasi Email : ${(validator.isEmail('foo@bar.com'))}`) //=> true
console.log(`Ini Adalah Validasi Mobile${validator.isMobilePhone('087834784378', 'id-ID')}`) //=> true
console.log(validator.isNumeric('08783478437d8', 'id-ID', )) //=> true

const nomor = '081378938489'
console.log(validator.isMobilePhone(nomor, 'id-ID')) //true
const md5 = 'b10a8db164e0754105b7a99be72e3fe5'
console.log(validator.isMD5(md5, 'md5')) //=> true

// Chalk
const nama = 'Muhammad Aulia Akbar'
const pesan = chalk `Lorem, ipsum dolor {bgRed.black.bold Akbar}`
console.log(chalk.bgCyanBright.red(nama))
console.log(chalk.bgMagenta.blue(nama))
console.log(pesan)

