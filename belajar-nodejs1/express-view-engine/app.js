const express = require('express')
const app = express()
const port = 3000


//root => halaman utama dari http
app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname,  })
})
app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname,  })
})
app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname,  })
})
app.get('/json', (req, res) => {
  res.json({
    nama: 'Cornelia Vanisa',
    email: 'cornelia@gmail.com',
    number: '0811351660865'
  })
})
app.get('/indexsendfile', (req, res) => {
  res.sendFile('./index.html', {root: __dirname,  })
})
app.get('/category/:idCategory/product/:idProduct', (req, res) => {
  res.send(`Barangi Ini Memiliki IDCategori ${req.params.idCategory} dan IDProduct ${req.params.idProduct}` )
})
app.get('product/:idProduct', (req, res) => {
  res.send(`Barangi Ini Memiliki IDCategori ${req.query.category} dan IDProduct ${req.params.idProduct}` )
})



// Menggunakan Midleware, Digunakan Ketika Halaman Ini Tidak Ada 
app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found For You')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





















// // Memanggil Core Modul Web Server
// const http = require('http')

// // Memanggil Core Modul File System
// const fs = require('fs')


// const renderHTML = (path, respond) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             respond.writeHead(404)
//             respond.write('Error')
//         } else {
//             respond.write(data)
//         }
//     respond.end    
//     })
// }
// // Membuat Web Server Sederhana
// // Membuat server dapat dilakukan dengan dua cara yaitu menggunakan variabel atau chaining
// // Melakukan Chaining atau Gabungan
// // Menggunakan Port 3000 Karena Default Digunakan Untuk Web Server
// http
//     .createServer((request, respond) => {
//     // Membuat Write Head dengan status code 200 artinya ok dan content typenya
//     // Mencetak url yang kita berikan di dalam web search bar
//     // Untuk Mengarahkan Ke Halaman HTML kita dapat menggunakan core modul filesystem
//         respond.writeHead(200, {
//             'Content-Type': 'text/html'
//         })

//         const url = request.url

//         if (url === '/about'){
//             renderHTML('./about.html', respond)
//         } 
//         else if (url === '/contact') {
//             renderHTML('./contact.html', respond)
//         } 
//         else {
//             renderHTML('./index.html', respond)
//         }
//     })

//     .listen(3000, () => {
//         console.log('Server is Listening on port 3000')
//     })

