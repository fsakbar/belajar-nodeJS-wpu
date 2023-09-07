const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";
const dbName = 'wpu';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ObjectId = require('mongodb').ObjectId;


client.connect((error, client)=>{
    if(error){
        return console.log('Koneksi Gagal')
    }
    // Pilih Database
    const db = client.db(dbName)

    // Insert 1 Data
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Erikson Aja',
    //         email: 'erik@mail.com',
    //         nohp: '081367676778'
    //     }, 
    // (error, result)=>{
    //     if(error){
    //         return console.log('Gagal menambahkan data')
    //     }
    //     console.log(result)
    // })

    // Insert Banyak Data
        // db.collection('mahasiswa').insertMany([
        //     {
        //         nama: 'Erikson',
        //         email: 'erikson@mail.com',
        //         nohp: '081367674578'
        //     },
        //     {
        //         nama: 'Erikmas',
        //         email: 'erikmas@mail.com',
        //         nohp: '081367674578'
        //         }
        // ], (error, result)=>{
        //     if(error){
        //         return console.log('Data Gagal Ditambahkan')
        //     }
        //     return console.log('Data Berhasil Ditambahkan')
        // })


    // Menampilkan Semua Data 
    // db
    //     .collection('mahasiswa')
    //     .find() 
    //     .toArray((error, result)=>{
    //         console.log(result)
    // })


    // Menampilkan Data Berdasarkan Kriteria
    // db
    //     .collection('mahasiswa')
    //     .find({nama: 'Erik'}) 
    //     .toArray((error, result)=>{
    //     console.log(result)
    // })


    // Mengubah Data Berdasarkan Id
    // const updatePromises = db.collection('mahasiswa').updateOne(
    //     {
    //         '_id': new ObjectId('64f97d670a14b82fc26188aa'),
    //     },
    //     {
    //         $set: 
    //         {
    //             nama: 'Avip Saifulah',
    //             email: 'avip@yahoo.com',
    //             nohp: '081384738212'
    //         },
    //     }
    //     )
    
    //     // Menggunakan Variabel Karena Masih Berbentuk Promises, Maka Dapat menggunakna fungsi then dan catch (karena dapat menjalankan promises)
    //     updatePromises
    //         .then((result) => {
    //             console.log(result)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         }) 


        // Mengubah Data Lebih Dari Satu Berdasarkan Kriteria
        // const updatePromisesMany = db.collection('mahasiswa').updateMany(
        //     {
        //         nama: 'Erikson Doank' 
        //     },
        //     {
        //         $set: {
        //             nama: 'Erikson Aja'
        //         }
        //     }
        // )
        // updatePromisesMany
        //     .then((result) => {
        //         console.log(result)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })


        // Menghapus Satu Mahasiswa

        // db.collection('mahasiswa').deleteOne(
        //     {
        //         _id: ObjectId('64f97d670a14b82fc26188aa')
        //     },
        // ).then((result) => {
        //     console.log(result)
        //  }).catch((error)=>{
        //     console.log(error)
        //  })



//        Menghapus Banyak Mahasiswa
        db.collection('mahasiswa').deleteMany(
            {
                nama: 'Erikson Aja'
            },
        ).then((result) => {
            console.log(result)
         }).catch((error)=>{
            console.log(error)
         })
    


})
















// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);