const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    res.send('My first ever api!')
})

//problem 1
router.get('/movies',function(req,res){
    let moviesArr = [ 'rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins','The dark knight','The Godfather','Inception','Dune'];
    res.send(moviesArr);
})

// // problem 2 

// router.get('/movies/:indexNumber',function(req,res){
//     moviesArr = [ 'rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins','The dark knight','The Godfather','Inception','Dune'];

//     res.send(moviesArr[req.params.indexNumber]);
// })

//problem 2 & 3

router.get('/movies/:indexNumber',function(req,res){
    let moviesArr = [ 'rang de basnasti', 'the shining', 'lord of the rings', 'bartman begins','The dark knight','The Godfather','Inception','Dune'];
        if(req.params.indexNumber<moviesArr.length)
    res.send(moviesArr[req.params.indexNumber]);
    else 
    res.send("Enter a valid Number");
})

//problem 4
router.get('/films',function(req,res){
 let moviesArr=    [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]

       res.send(moviesArr);
       
})
 
//problem 5
router.get('/films/:filmId',function(req,res){
    let isMatched=false;
    let moviesArr=    [ {
           id: 1,
           name: 'The Shining'
          }, {
           id: 2,
           name: 'Incendies'
          }, {
           id: 3,
           name: 'Rang de Basanti'
          }, {
           id: 4,
           name: 'Finding Nemo'
          }]
            for(let i=0;i<moviesArr.length;i++){
                if(req.params.filmId==moviesArr[i].id)
                {   
                    isMatched=true;
                    res.send(moviesArr[i]);
                }
            }

            if(isMatched==false)
            res.send("No film found with enetered id")

          
          
   })

module.exports = router;
// adding this comment for no reason