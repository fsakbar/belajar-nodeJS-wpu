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



// menampilkan detail sebuah contact
yargs
    .command({
        command: 'detail',
        describe: 'Menampilkan Detail dari sebuah Contact berdasarkan nama',
        builder:{
            name: {
                describe: 'Nama Lengkap',
                demandOption: true,
                type: 'string',
            }
        },
        handler(argv){
            contacts.detailContact(argv.name)
        }
    })


// menghapus sebuah contact
yargs
    .command({
        command: 'delete',
        describe: 'Menghapus Sebuah Contact berdasarkan nama',
        builder: {
            name: {
                describe: 'Nama lengkap',
                demandCommand: true,
                type: 'string',
            }
        },
        handler(argv){
            contacts.deleteContact(argv.name)
        }
    })

yargs.parse()
