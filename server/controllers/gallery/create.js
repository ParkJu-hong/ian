const { gallery: Gallery } = require('../../models');

module.exports = async (req, res) => {
    // console.log('_gallery : ', await _gallery.create());
    // 지금 create 3번해서 id가 3개까지 만들어짐
    // .create({ column: value, column2: value2, column3: value3});
    // await Gallery.findAll()
    if (req.body === undefined) {
        res.status(404).send('Post could not be created.');
    }
    Gallery.create({
        title: req.body.title,
        comment: req.body.comment,
        pictureUrlOne: req.body.pictureUrlOne,
        pictureUrlTwo: req.body.pictureUrlTwo,
        pictureUrlThree: req.body.pictureUrlThree
    })
    res.status(201).send(`A post has been made.`);
}

/*
    {
        "title": ,
        "comment": ,
        "pictureUrlOne": ,
        "pictureUrlTwo": ,
        "pictureUrlThree":
}
*/