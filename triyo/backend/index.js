const express = require("express")
const app = express()
const cors = require('cors')
var morgan = require('morgan')
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Contact Form is running ..')
})

app.listen(port, () => {
    console.log(`Contact Form is running on port ${port}`)
})
  
