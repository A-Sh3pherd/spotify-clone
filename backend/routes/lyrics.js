const express = require('express');
const Router = express.Router();
const lyricsFinder = require('lyrics-finder')

Router.get('/lyrics', async (req, res) => {
    const lyrics = (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
    res.json({lyrics})
})

module.exports = Router