const contacts = require('./contacts')
    const main = async() => {
        const name = await contacts.tulisPertanyaan('Masukan Nama Anda: ')
        const email = await contacts.tulisPertanyaan('Masukan Email Anda: ')
        const number = await contacts.tulisPertanyaan('Masukan No HP Anda: ')

        contacts.simpanContact(name, email, number)
  
    }

    main()


 

