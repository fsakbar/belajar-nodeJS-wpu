// Core Module
  // FIle System
    // import * as fs from 'node:fs';
    const { reject } = require('lodash');
    const fs = require('node:fs');
    const { resolve } = require('node:path');
    console.log(fs)

  // Readline
    // const readline = require('node:readline');
    // const { buffer } = require('stream/consumers');
    // const rl = readline.createInterface({input: process.stdin, output: process.stdout});

  // Chalk 
    const chalk = require('chalk')

  // Validator
    const validator = require('validator');
    const { argv } = require('node:process');

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

    // rl.question('What is your name? ', (name)=> {
    //     rl.question('What is your Number? ', (number)=> {
    //     const contact = {name: name, number: number}
    //     const readFile = fs.readFileSync('data/contacts.json', 'utf8')
    //     const contacts = JSON.parse(readFile);
    //     contacts.push(contact);
    //     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    //     console.log(`Thank For Your Feedback. Name: ${name}, Number: ${number}`)
    //     rl.close();
    //     })
    // })

    // const tulisPertanyaan = (pertanyaan) => {
    //     return new Promise((resolve, reject) => {
    //         rl.question(pertanyaan, (name) => {
    //             resolve(name)
    //         })
    //     })
    // }

    // const pertanyaan2 = () => {
    //     return new Promise((resolve, reject) => {
    //         rl.question('Masukan Email: ', (nama) => {
    //             resolve(nama)
    //         })
    //     })
    // }

    // Fungsi Load Contact
    const loadContact = () => {
      const readFile = fs.readFileSync('data/contacts.json', 'utf8')
      const contacts = JSON.parse(readFile); // JSON.parse
      return contacts
    }

    const simpanContact = (name, email, number) => {
        // Membuat Object
        const contact = {name: name, email: email, number:number}

        // Load Contact
        const contacts = loadContact()

        // Cek Duplikat
        const duplikatname = contacts.find((contact) => contact.name === name)
        const duplikatnumber = contacts.find((contact) => contact.number === number)

        // Cek Duplikat Menggunakan Pengkondisian
        if (duplikatname){
          console.log(chalk.red.inverse.bold('Nama Contact Sudah Terdaptar, Gunakan Nama Lain'))
          return false; // Keluar
        }
        if (duplikatnumber){
          console.log(chalk.red.inverse.bold('Nomor Contact Sudah Terdaptar, Gunakan Nama Lain'))
          return false; // Keluar
        }
        // Cek Email
        if (email){
          if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email Tidak Sesuai Format'))
            return false // Keluar
          }
        }
        // Cek Nomor
        if(!validator.isMobilePhone(number, ['id-ID'])){
          console.log(chalk.red.inverse.bold('Nomor HP  Tidak Sesuai Format'))
          return false // Keluar
        }
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
        console.log(chalk.green.inverse.bold(`Thank For Your Feedback. Name: ${name}, Email: ${email}, Number: ${number}`))
    }


    const listContacts = () => {
      const contacts = loadContact();
      contacts.forEach((contact, i) => {
        console.log(`${i+1}.${contact.name} - ${contact.number}`)
      })
    }

    const detailContact = (name) => {
      const contacts = loadContact();
      const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())

      if(!contact){
        console.log(chalk.red.inverse.bold('Nama Yang Anda Inputkan Tidak Ada, Gunakan Nama Lain'))
        return false; //Keluar
      }
      console.log(chalk.blueBright.inverse.bold(`Nama: ${contact.name}`))
      console.log(chalk.blueBright.inverse.bold(`No HP: ${contact.number}`))
      if(contact.email){
        console.log(chalk.blueBright.inverse.bold(`No HP: ${contact.email}`))
      }
      console.log(chalk.blueBright.inverse.bold(`No HP: ${contact.number}`))
    }


    // Fungsi Delete
    const deleteContact = (name) => {
      const contacts = loadContact();
      const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase())

      if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold('Nama Yang Anda Inputkan Tidak Ditemukan, Gunakan Nama Lain'))
        return false; //Keluar
      }

      fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
      console.log(chalk.green.inverse.bold( `data ${name} berhasil dihapus`))
    }


module.exports = {simpanContact, listContacts, detailContact, deleteContact}