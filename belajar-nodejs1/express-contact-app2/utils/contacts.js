// Core Module
  // FIle System
    const fs = require('node:fs');
    const { resolve } = require('node:path');

  //Membuat Folder Jika Belum Ada
    const dirPath = './data'
    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath)
    }

  //Membuat File JSON Jika Belum Ada
    const dataPath = './data/contacts.json';
    if(!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath, '[]', 'utf-8')
    }

    // Fungsi Load Contact
    const loadContact = () => {
      const readFile = fs.readFileSync('data/contacts.json', 'utf8')
      const contacts = JSON.parse(readFile); // JSON.parse
      return contacts
    }

    // Cari Contact berdasarkan Nama
    const findContact = (nama) => {
      const contacts = loadContact();
      const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
      return contact

    }

    // Menuliskan / Menimpa File contact.js dengan data yang baru
    const saveContacts = (contacts) => {
      fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    }

    // menambahkan data contact baru 
    const addContact = (contact) => {
      const contacts = loadContact()
      contacts.push(contact)
      saveContacts(contacts)
    }


    module.exports = {loadContact, findContact, addContact}