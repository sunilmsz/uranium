const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const batchController = require('../controller/batchController')

router.post('/create_batch',batchController.createBatch)
router.get("/batches",batchController.getBatches)

const developerController = require("../controller/developerController")
router.post('/create_developer',developerController.create)
router.get("/scholarship-developers",developerController.getScholarshipDeveloper)
router.get("/developers",developerController.getDeveloperByPP)
router.get('/get_all_developers',developerController.getAllDevelopers)

module.exports = router;
// adding this comment for no reason