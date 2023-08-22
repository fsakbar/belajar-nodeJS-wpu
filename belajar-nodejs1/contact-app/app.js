// Core Module
  // FIle System
    // import * as fs from 'node:fs';
    const fs = require('node:fs')
    console.log(fs)



  // Readline
    const readline = require('node:readline');
    const { buffer } = require('stream/consumers');
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});

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

    rl.question('What is your name? ', (name)=> {
        rl.question('What is your Number? ', (number)=> {
        const contact = {name: name, number: number}
        const readFile = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(readFile);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
        console.log(`Thank For Your Feedback. Name: ${name}, Number: ${number}`)
        rl.close();
        })
    })




