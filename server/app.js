import app from './server'

app.listen(3000, (err) => {
  if(err) {
    console.log('CAnt create server',err)
  }
  console.log(`App running on http://localhost:${3000}`)
})