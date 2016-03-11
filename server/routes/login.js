var express = require('express');
var router = express.Router();

router.get('/login',function(req,res,next){
    res.render('login', { titulo: 'Login' });
    console.log(req.body.algo);
});

module.exports = router;