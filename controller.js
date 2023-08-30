const Vehicle = require('./model');

// create and save a new note
exports.create = function (req, res) {

    // if(!req.body.title||!req.body.author||!req.body.content) {
    //     return res.status(400).send({
    //         message: "Every field is required"
    //     });
    // }

    const newnote = Vehicle({
        id: 1,
        // author: req.body.author,
        // content: req.body.content
    });
    newnote.save()
        .then(savedItem => {
            console.log('Item saved:', savedItem);
        })
        .catch(error => {
            console.error('Error saving item:', error);
        });
    // newnote.save(function (err, doc) {
    //     if (err) return res.status(400).json(err);
    //     res.status(201).json({
    //         post: true,
    //         note: doc
    //     });
    // });


    // Note.findOne({title: newnote.title},function(err,note){
    //     if(note)return res.status(400).json({message: "same title exists"});

    //     newnote.save(function(err,doc){
    //         if(err) return res.status(400).json(err);
    //         res.status(201).json({
    //             post : true,
    //             note : doc
    //         });
    //     });
    // });
};