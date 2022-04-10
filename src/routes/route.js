const express = require('express');

const router = express.Router();


let data = 
[
    {
    "name" : "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    },
    {
        "name" : "sunil",
        "dob": "1/1/1998",
        "gender": "male",
        "city": "Amritsar",
        "sports": [
        "hockey"
        ]
    },
    {
    "name" : "kartik",
    "dob": "1/8/1999",
    "gender": "male",
    "city": "jaipur",
    "sports": [
    "cricket"
    ]
    }
]    




router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/players', function (req, res) {
    //checking all required parameters are passed or not

    if(req.body.name!==undefined && req.body.dob!==undefined && req.body.gender!==undefined && req.body.city!==undefined &&req.body.sports!==undefined)
    {
        let hasAlready =false;
        for(let i=0;i<data.length;i++)
        {
            if(req.body.name==data[i].name)
            {
                hasAlready=true;
                res.send("Already user exist")
                break;
            }
        }
        if(hasAlready==false)
        {
            let obj ={
                name: req.body.name,
                dob: req.body.dob,
                gender: req.body.gender,
                city:req.body.city,
                sports:[req.body.sports]
            }
            data.push(obj);
            res.send(  { data: data , status: true }  )
        }
    }
    else 
    res.send("Enter all valid details")
});

module.exports = router;
// adding this comment for no reason