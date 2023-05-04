const { Router } = require('express');
const router = Router();

router.get('/test ', (req,res) =>{
    const data = {
        "name": ""
    }
    res.json()
});

module.exports = router;