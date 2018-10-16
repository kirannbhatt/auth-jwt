import app from './server'
const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
  if(err) {
    console.log('CAnt create server',err)
  }
  console.log(`App running on http://localhost:${PORT}`)
})