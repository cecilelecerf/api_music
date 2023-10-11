const express = require("express");
const router = express.Router();
const voteController = require('../controllers/voteController');

router
    .route("/musiques/:id_musique/votes")
        .get(voteController.listenAllVotes)
        .post(voteController.createAVote);

router
    .route("/votes/:id_vote")
        .get(voteController.listenAVote)
        .put(voteController.updateAVote)
        .delete(voteController.deleteAVote);

router
    .route("/musiques/:id_musique/result")
        .get(voteController.resultVote);
module.exports = router;