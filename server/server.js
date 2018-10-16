import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'
import { } from 'dotenv/config'
import '@babel/polyfill'

import router from './routes/apiRoutes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser({extended: false}))

app.use('/', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

export default app;