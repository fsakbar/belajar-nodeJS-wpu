const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


// // Menambah Satu Data
// const contact1 = new Contact ({
//     nama: 'Cornelia Vanisa',
//     nohp: '081398329832',
//     email: 'cornelia@mail.com'
// })

// // Simpan ke collection (berbentuk promise)
// contact1.save()
//     .then((contact) => {console.log(contact)
//     })
//     .catch((error) => console.log(error))





