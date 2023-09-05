const express = require('express')
const expressLayouts = require('express-ejs-layouts') // Termasuk Third Party Middleware 
const {loadContact, findContact} = require('./utils/contacts')

const app = express()
const port = 3000

// Express menggunakan view engine EJS // Termasuk Third Party Middleware
app.set('view engine', 'ejs')
app.use(expressLayouts); 

// Built in Middleware Agar Kita Dapat Permisi Mengakses Asset dalam Code 
app.use(express.static('public'))

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
    layout: 'layouts/main-layout',
    
  })
})

app.get('/home', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname,  })
  // Menggunakan View Engin ejs
  res.render('home', {
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
  // Menggunakan View Engin ejs
  const contacts = loadContact(); 
  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
  })
})

app.get('/contact/:nama', (req, res) => {
  // Menggunakan View Engin ejs
  const contact = findContact(req.params.nama)
  res.render('detail', {
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact,
  })
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


app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found For You')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})