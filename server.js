import express from 'express'
import { PORT } from './config/general.js'
import { authRouter } from './routes/auth.js'

const app = express()

app.use(express.json())

app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
