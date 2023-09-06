// Core Module
  // FIle System
    const fs = require('node:fs');
    const { resolve } = require('node:path');

  // Validator
    const validator = require('express-validator')

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

    // cek nama yang duplikat
    const cekDuplikat = (nama) => {
      const contacts = loadContact()
      return contacts.find((contact) => contact.nama === nama)
    }

    // menghapus data contact
    const deleteContact = (nama) => {
      const contacts = loadContact()
      const filteredContacts = contacts.filter((contact) => contact.nama !== nama)
      saveContacts(filteredContacts)
    }

    const updateContacts = (contactBaru) => {
      const contacts = loadContact()
      const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama)
      
      delete contactBaru.oldNama
      filteredContacts.push(contactBaru)

      saveContacts(filteredContacts)
    }


    module.exports = {loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts}