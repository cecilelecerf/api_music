const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router 
    .route('/')
        .get(musicController.listenAllMusics)
        .post(musicController.createAMusic);

router  
    .route('/:id_musique')
        .delete(musicController.deleteAMusic)
        .put(musicController.updateAMusic)
        .get(musicController.listenMusic);

module.exports = router;