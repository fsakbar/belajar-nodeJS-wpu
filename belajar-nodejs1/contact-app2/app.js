const yargs = require("yargs")
// Mengambil Argumen Dari Command Line
console.log(yargs.argv)

yargs.command('add', 'menambahkan kontak baru', ()=>{}, (argv ) => {
    console.log(argv.nama)
})
yargs.parse()
