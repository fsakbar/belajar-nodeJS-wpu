const yargs = require("yargs")
const contacts = require("./contacts")
// Mengambil Argumen Dari Command Line
// console.log(yargs.argv)

// Membuat Yargs Command=
yargs
    .command({
    command: 'add',
    describe: 'Menambahkan Contact Baru',
    builder: {
        name: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        number: {
            describe: 'Number',
            demandOption: true,
            type: 'string', 
        },
    },      
    handler(argv){
    contacts.simpanContact(argv.name, argv.email, argv.number)
    }

})

yargs.parse()
