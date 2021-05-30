const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')




const port = 3001
const app = express()
const router = express.Router()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api',router)




app.listen(port,()=>{
    console.log("Servidor funcionando en http://localhost:" + port)
})