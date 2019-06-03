'use strict'

const app = require('./server')
const port = process.env.PORT || 3000;
const {db} = require('./server/db')



db.sync({force: true}) // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(port, function() {
      console.log('server is listening')
    })
  })
