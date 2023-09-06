const express = require('express')
const expressLayouts = require('express-ejs-layouts') // Termasuk Third Party Middleware 
const {loadContact, findContact, addContact, cekDuplikat} = require('./utils/contacts')
const { body, validationResult, check } = require('express-validator')

const session = require('express-session')

const cookie = require('cookie-parser')

const flash = require('connect-flash')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

// Express menggunakan view engine EJS // Termasuk Third Party Middleware
app.set('view engine', 'ejs')
app.use(expressLayouts); 

// Built in Middleware Agar Kita Dapat Permisi Mengakses Asset dalam Code 
app.use(express.static('public'))


// Midleware untuk memparsing data kejson, merupakan built in middleware
app.use(express.urlencoded({extended: true}))

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


// Konfiguarsi Flash
app.use(cookieParser('secret'))
app.use(session({
  cookie: {maxAge: 6000},
  secret: 'secret',
  resave: true,
  saveUninitialized: true
})) 
app.use(flash())



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
    msg: req.flash('msg')
  })
})


// Halaman Form Tambah Data COntact
app.get('/contact/add', (req, res) => {
  // Menggunakan View Engine ejs
  
  res.render('add-contact', {
    title: 'From Tambah Data Contact',
    layout: 'layouts/main-layout',
    // contact,
  })
})

// Proses Menambahkan  Data Contact
app.post('/contact', [
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value)
    if (duplikat){
      throw new Error('Nama kontak sudah digunakan')
    }
    return true
  }),
  check('email', 'Email Tidak Valid').isEmail(),
  check('nohp', 'No HP Tidak Valid').isMobilePhone('id-ID')

], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){

    // return res.status(400).json({errors: errors.array()})

    res.render('add-contact', {
      title: 'Form Tambah Data Contact',
      layout: 'layouts/main-layout',
      errors: errors.array(),
    })

  } else {
    addContact(req.body)

    // Mengirimkan Flash Message
    req.flash('msg', 'Data Contact Berhasil Ditambahkan')
    res.redirect('./contact')
  }


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

// app.get('/json', (req, res) => {
//   res.json({
//     nama: 'Cornelia Vanisa',
//     email: 'cornelia@gmail.com',
//     number: '0811351660865'
//   })
// })


// app.get('/indexsendfile', (req, res) => {
//   res.sendFile('./index.html', {root: __dirname,  })
// })


app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found For You')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})