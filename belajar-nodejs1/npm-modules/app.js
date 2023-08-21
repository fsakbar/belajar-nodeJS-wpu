var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')) //=> true

console.log(validator.isMobilePhone('087834784378', 'id-ID', )) //=> false

console.log(validator.isNumeric('08783478437d8', 'id-ID', )) //=> true