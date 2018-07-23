const express = require('express')
const app = express()
const {
    getIPAddress,
    getLanguage,
    getUserAgent
} = require('./lib/parser')

// Middleware
app.set('view engine', 'pug')

// / - Home
app.get('/', (req, res) => res.send('Hello World!'))

// / - API
app.get('/api/whoami', function(req, res) {
    let ip = getIPAddress(req)
    let language = getLanguage(req)
    let os = getUserAgent(req)
    
    res.json({
        ipaddress: ip,
        language: language,
        software: os
    })
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))