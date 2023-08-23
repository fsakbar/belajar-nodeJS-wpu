const yargs = require("yargs")
const contacts = require("./contacts")
// Mengambil Argumen Dari Command Line
// console.log(yargs.argv)

// Membuat Yargs Command
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
            // const contact = {
            //     nama: argv.nama,
            //     email: argv.email,
            //     number: argv.number
            // }
            // console.log(contact)
    }
    
    })
    .demandCommand()

// menampilkan daftar semua nama contact
yargs
    .command({
        command: 'list',
        describe: 'Menambahkan Contact Baru (Nama dan Nomor HP)',
        //Builder Tidak Dibutuhkan
        handler(){
            contacts.listContacts()
        }

})

yargs.parse()
