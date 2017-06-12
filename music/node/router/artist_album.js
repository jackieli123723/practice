/**
 * Created by Administrator on 2017/6/12 0012.
 */
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const id = req.query.id
    const data = {
        'offset': req.query.offset || 0,
        'total': true,
        'limit': req.query.limit || 30,
        "csrf_token": ""
    }
    createWebAPIRequest(
        'music.163.com',
        `/weapi/artist/albums/${id}`,
        'POST',
        data,
        cookie,
        music_req => res.send(music_req),
        err => res.status(502).send('fetch error')
    )
})

module.exports = router