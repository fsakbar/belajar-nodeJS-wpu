const express = require('express')
const expressLayouts = require('express-ejs-layouts') // Termasuk Third Party Middleware
const morgan = require('morgan') // Termasuk Third Party Middleware
const app = express()
const port = 3000

// Express menggunakan view engine EJS // Termasuk Third Party Middleware
app.set('view engine', 'ejs')
app.use(expressLayouts); 

// Built in Middleware Agar Kita Dapat Permisi Mengakses Asset dalam Code 
app.use(express.static('public'))


// Application Level Middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next() // next perlu di jalankan agar aplikasi tidak hanging
})

// Third Party Middleware
app.use(morgan('dev'))



const mahasiswa = [
  {
    nama: 'Cornelia',
    email: 'cornelia@mail.com'
  },
  {
    nama: 'Alveria',
    email: 'alveria@mail.com'
  },
  {
    nama: 'Akbar',
    email: 'akbar@mail.com'
  }
]


app.get('/', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname,  })

  // Menggunakan View Engin ejs
  res.render('index', {
    nama: 'Muhammad Aulia Akbar',
    title: 'Halaman Utama',
    mahasiswa: mahasiswa,
    layout: 'layouts/main-layout'
  })
})
app.get('/about', (req, res, next) => {
  // res.sendFile('./about.html', {root: __dirname,  })

  // Menggunakan View Engin ejs
  res.render('about', {
    title: 'Halaman About',
    layout: 'layouts/main-layout'})
})
app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html', {root: __dirname,  })

  // Menggunakan View Engin ejs
  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout'})
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

app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found For You')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})