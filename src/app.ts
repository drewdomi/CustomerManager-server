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
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  }),
)
app.use(routes)

app.listen(port, () => {
  console.log('API running on port ' + port)
})
