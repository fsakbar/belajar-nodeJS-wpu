// Install Modul Express, EJS, Express-EJS-Layouts
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// Flash Module
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

//EJS
// Diletakan Di bawah app = express()
// Express menggunakan view engine EJS // Termasuk Third Party Middleware
app.set('view engine', 'ejs')
app.use(expressLayouts); 
// Built in Middleware Agar Kita Dapat Permisi Mengakses Asset dalam Code 
app.use(express.static('public'))
// Midleware untuk memparsing data kejson, merupakan built in middleware
app.use(express.urlencoded({extended: true}))


// Konfiguarsi Flash
app.use(cookieParser('secret'))
app.use(session({
  cookie: {maxAge: 6000},
  secret: 'secret',
  resave: true,
  saveUninitialized: true
})) 
app.use(flash())



// Halaman Home
app.get('/', (req, res) => {
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
      },
      {
        nama: 'Juan',
        email: 'juan@mail.com'
      }
    ]
  res.render('index', {
    nama: 'Muhammad Aulia Akbar',
    title: 'Halaman Utama',
    mahasiswa: mahasiswa,
    layout: 'layouts/main-layout',
  })
})

app.get('/about', (req, res, next) => {
  // res.sendFile('./about.html', {root: __dirname,  })
  res.render('about', {
    title: 'Halaman About',
    layout: 'layouts/main-layout'})
})

app.get('/contact', async (req, res) => {
  // Menggunakan View Engin ejs
  // Contact.find().then((contacts) => {
  //   res.send(contacts)
  // })
  const contacts = await Contact.find()
  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
    msg: req.flash('msg')
  })
})


  // Halaman Detil Contact
app.get('/contact/:nama', async (req, res) => {
  // Menggunakan View Engin ejs
  const contact = await Contact.findOne({
    nama: req.params.nama
  })
  res.render('detail', {
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact,
  })
})


app.listen(port, ()=> {
    console.log(`Mongo Contact App | Listening on http://localhost:${port}`)
})