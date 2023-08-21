fs.readFile('data/test2.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
})