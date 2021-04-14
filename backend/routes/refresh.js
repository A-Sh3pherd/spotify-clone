const express = require('express')
const Router = express.Router();
const env = require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');

Router.post('/refresh', (req,res) => {
    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then((data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn
            })
        }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

module.exports = Router