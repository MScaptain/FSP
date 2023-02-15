const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const sequelize = require('./models')
const config = require('./config/config')


require('dotenv').config()
console.log(process.env)

// app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
require('./routes')(app)
console.log('server start')

// sequelize.sync({ force: true }).then(() => {
//     app.listen(config.port, () => {
//       console.log(`Server started on port ${config.port}`);
//     });
//   });
  
app.listen(8000)