// Memanggil Core Modul Web Server
const http = require('http')

// Memanggil Core Modul File System
const fs = require('fs')


const renderHTML = (path, respond) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            respond.writeHead(404)
            respond.write('Error')
        } else {
            respond.write(data)
        }
    respond.end    
    })
}
// Membuat Web Server Sederhana
// Membuat server dapat dilakukan dengan dua cara yaitu menggunakan variabel atau chaining
// Melakukan Chaining atau Gabungan
// Menggunakan Port 3000 Karena Default Digunakan Untuk Web Server
http
    .createServer((request, respond) => {
    // Membuat Write Head dengan status code 200 artinya ok dan content typenya
    // Mencetak url yang kita berikan di dalam web search bar
    // Untuk Mengarahkan Ke Halaman HTML kita dapat menggunakan core modul filesystem
        respond.writeHead(200, {
            'Content-Type': 'text/html'
        })

        const url = request.url

        if (url === '/about'){
            renderHTML('./about.html', respond)
        } 
        else if (url === '/contact') {
            renderHTML('./contact.html', respond)
        } 
        else {
            renderHTML('./index.html', respond)
        }
    })

    .listen(3000, () => {
        console.log('Server is Listening on port 3000')
    })

