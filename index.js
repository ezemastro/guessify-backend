import express from 'express'
import { PORT } from './config.js'

const app = express()

app.use((req, res) => {
  console.log('recivido')
})

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
