import cors from 'cors'
import express from 'express'
import { routes } from './routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  }),
)

app.use(routes)

app.listen(port, () => {
  console.log('API running on port ' + port)
})
