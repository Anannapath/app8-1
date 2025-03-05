///////////เปิด server  ///////////////
const express = require('express')
const app = express()
const port = 8000

app.get('/',(request,response) => {
    response.send(`
    <!doctype html>
    <html>
    <head>
    <title> Express.js </title>
    </head>
    <body>
    <h3>Welcom to Express.js</h3>
    <b>Express.js Fast, unpinionated, minimalist <br> 
    web framwork for Node.js
    </b>
    </body>
    </html>
    `)
})

app.listen(port, () => console.log('Sever listening on port' + port))
///////////เปิด server http://localhost:8000/ //////////////

/////////// รัน" http://localhost:8000/ " //////////////