const Music = require('../models/musicModel');
const nullifiable = () => {
    res.status(404);
    res.json({message: "Not found a comment with this id"})
    res.end();
}

exports.listenAllMusics = async (req,res) => {
    try{
        const musics = await Music.find({});
        res.status(200);
        res.json(musics);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : "Error server."});
    }
};

exports.createAMusic =  async(req, res) => {
    const newMusic = new Music(req.body);
    try{
        const music = await newMusic.save();

        res.status(201);
        res.json(music);
    } catch(error) {
        res.status(500);
        console.log(error);
        res.json({message : `Error server.`});
    }
}

// req.params.id_params
exports.listenMusic = async (req,res) => {
    try{
        const music = await Music.findById(req.params.id_music);
        if(music===null)
            nullifiable();
        res.status(200);
        res.json(music);
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }
}

exports.updateAMusic = async(req, res) => {
    try{
        const music = await Music.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
        if(music===null)
            nullifiable();
        res.status(200);
        res.json(music);
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }   
}

exports.deleteAMusic = async(req, res) => {
    try{
        await Music.findByIdAndDelete(req.params.id_music);
        res.status(204);
        res.json({message : 'Article supprimé'});
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }
}


