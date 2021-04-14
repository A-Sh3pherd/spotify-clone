const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
//MiddleWares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//Routes
const loginRoute = require('./routes/login')
const refreshRoute = require('./routes/refresh')
const lyricsRoute = require('./routes/lyrics')
//Server
app.post('/login', loginRoute)

app.post('/refresh', refreshRoute)

app.get('/lyrics', lyricsRoute)


app.listen(3005, () => {
    console.log('Listening on port 3005')
})