const router = require('express').Router();

// authen api

router.post('/signup', (req, res) => {
    res.send('Hello world')
})

router.get('/login',(req,res)=>{
    res.send({sigin:'hello signin'})
})

module.exports = router