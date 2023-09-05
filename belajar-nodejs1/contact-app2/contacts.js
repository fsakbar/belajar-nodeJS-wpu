// Core Module
  // FIle System
    // import * as fs from 'node:fs';
    const { reject } = require('lodash');
    const fs = require('node:fs');
    const { resolve } = require('node:path');
    // console.log(fs)

  // Readline
    // const readline = require('node:readline');
    // const { buffer } = require('stream/consumers');
    // const rl = readline.createInterface({input: process.stdin, output: process.stdout});

  // Chalk 
    const chalk = require('chalk')

  // Validator
    const validator = require('validator')

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


    const simpanContact = (name, email, number) => {
        const contact = {name: name, email: email, number:number}
        const readFile = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(readFile);

        // Cek Duplikat
        const duplikatname = contacts.find((contact) => contact.name === name)
        const duplikatnumber = contacts.find((contact) => contact.number === number)
        if (duplikatname){
          console.log(chalk.red.inverse.bold('Nama Contact Sudah Terdaptar, Gunakan Nama Lain'))
          return false; // Keluar
        }
        if (duplikatnumber){
          console.log(chalk.red.inverse.bold('Nomor Contact Sudah Terdaptar, Gunakan Nama Lain'))
          return false; // Keluar
        }
        // Cek Email (optional)
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

module.exports = { simpanContact}