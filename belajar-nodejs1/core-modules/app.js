// Core Module
  // FIle System
    // import * as fs from 'node:fs';
    const fs = require('node:fs')
    console.log(fs)

  // Fungsi fs mengakses file txt ataumungkin file apapun di dalam folder yang sama (sejauh yang saya tahu)

    // Menuliskan string ke dalam sebuah file (synchnous)
      // jika file sudah ada maka isinya akan ditimpa
      // Menampung Error dapat menggunakan blok try catch
    // try{
    //   // Tidak akan jalan jika Folder tidak ada
    //   fs.writeFileSync('data/test.txt', 'Hello World Secara Synchronous')
    // } catch(e) {
    //   console.log(e)
    // }


    // menuliskan string ke dalam sebuah file (asynchronous)
    // fs.writeFile('data/test2.txt', 'Hello World Secara Asynchronous', (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!')
    // })

    // membaca isi file (synchronous)
    // const data = fs.readFileSync('data/test.txt', 'utf8')
    // console.log(data)
    // const data2 = fs.readFileSync('data/test.txt')
    // console.log(data2.toString())


    // membaca isi file (asynchronous)
    // fs.readFile('data/test2.txt', 'utf8', (err, data) => {
    //   if (err) throw err;
    //   console.log(data)
    // })


  // Readline
  const readline = require('node:readline');
  const { buffer } = require('stream/consumers');
  const rl = readline.createInterface({input: process.stdin, output: process.stdout});

  // Simple Readline File Sebelumnya
  // rl.question('What do you think of Node.js? ', (answer) => {
  //   rl.question('What is your name? ', (name) => {
  //     console.log(`Thank You for your valuable feedback: ${answer} Your Name ${name}`)
  //     fs.writeFile('data/test3.txt', `Thank You for your valuable feedback: ${answer}, Your Name ${name}`, (err) => {
  //       if (err) throw err;
  //       console.log('The file has been saved in test3!')
  //     })
  //     rl.close()
  //   })
  // })

  //With JSON
  rl.question('What is your name? ', (name)=> {
    rl.question('What is your Number? ', (number)=> {
      const contact = {name, number}
      const readFile = fs.readFileSync('data/test4.json', 'utf8')
      const contacts = JSON.parse(readFile);
      contacts.push(contact);
      fs.writeFileSync('data/test4.json', JSON.stringify(contacts))
      console.log(`Thank For Your Feedback. Name: ${name}, Number: ${number}`)
      rl.close();
    })
  })




