const express = require("express");
const router = express.Router();
const voteController = require('../controllers/voteController');

router
    .route("/music/:id_music/votes")
        .get(voteController.listenAllVotes)
        .post(voteController.createAVote);

router
    .route("/votes/:id_vote")
        .get(voteController.listenAVote)
        .put(voteController.updateAVote)
        .delete(voteController.deleteAVote);

router
    .route("/music/:id_music/result")
        .get(voteController.resultVote);
module.exports = router;