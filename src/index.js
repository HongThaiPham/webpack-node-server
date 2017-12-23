import express from 'express'
const app = express()
import config from './config'

app.get('/', (req, res) => {
    res.send('hello world bla bla bla')
})

app.listen(config.PORT)

