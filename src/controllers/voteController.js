const Vote = require("../models/voteModel");
const Music = require("../models/musicModel");
const nullifiable = () => {
    res.status(404);
    res.json({message: "Not found a vote with this id"})
    res.end();
}

exports.listenAllVotes = async (req,res) => {
    try{
        const votes = await Vote.find({music_id: req.params.id_music});
        res.status(200);
        res.json(votes);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.createAVote = async (req,res) => {
    try{
        const music = await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id : req.params.id_music});
        // console.log(typeof(req.body.level));
        // console.log(music.created_at);
        // let date = new Date.toISOString();
        // date = date.toISOString();
        // const number = parseInt(req.body.level)
        // console.log(typeof(req.body.level));
        // console.log(number);
        // console.log(Number.isInteger(req.body.level));
        // console.log(Date.now.toISOString());
        try{
            const vote = await newVote.save();
            res.status(201);
            res.json(vote);
        } catch (error) {
            res.status(500);
            res.json({message : "Error server (db)"});
            console.log(error);
        }
        
    } catch (error){
        res.status(500);
        res.json({message : "Error server (music_id)"});
        console.log(error);
    }
}

exports.listenAVote = async (req,res) => {
    try{
        const vote = await Vote.findById(req.params.id_vote);
        if(vote===null)
            nullifiable();
        res.status(200);
        res.json(Music.findById(vote.music_id));
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.updateAVote = async (req,res) => {
    try{
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new : true});
        if(vote===null)
            nullifiable();
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.deleteAVote = async (req,res) => {
    try{
        const vote = await Vote.findByIdAndDelete(req.params.id_vote);
        if(vote===null)
            nullifiable();
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}


exports.resultVote = async (req,res) => {
    try{
        const result = await Vote.find({music_id : req.params.id_music});
        const number = result.length
        res.status(200);
        res.json({message : number});
    }catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

