const dotenv = require('dotenv')
dotenv.config()
//keep this at the top of the index.js

const express = require('express')
const port = process.env.PORT || 4000
const cors = require('cors')


console.log('web 38 rocks')
console.log(__dirname)
console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.PORT)
console.log(process.env.ALWAYS)

const app = express()
app.use(cors())

//api, routers
app.use('/api/*', (_, res) => {
  res.json({ date: 'web 38 rocks'})
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})