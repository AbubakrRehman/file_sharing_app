const express = require('express');
const router = express.Router();
const File = require("../models/files.js")



router.get("/file/:uuid", async (req, res) => {
    try {
        const data = await File.findOne({ uuid: req.params.uuid });
        if (!data)
            res.status(404).send("link has been expired!!");
        res.json({
            file: {
                filename: data.filename,
                filesize: data.size,
                download_link: `http://localhost:4040/file/download/${data.uuid}`
            }
        });
    } catch (err) {
        res.status(500).send("Something went wrong");
    }



});


router.get("/file/download/:uuid",async (req,res)=>{
    try {
        const data = await File.findOne({ uuid: req.params.uuid });
        if (!data)
            res.status(404).send("link has been expired!!");
        res.download(`${__dirname}/../${data.path}`);
        //res.send("hello!!");
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});

module.exports=router;