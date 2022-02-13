const express = require('express')
const path = require("path");
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const {Survey,Image} = require('../models')

const router = express.Router()

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region:'ap-northeast-2'
})
const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'pida-aws',
        key(req, file, cb){
            cb(null,`diary/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limits:{fileSize:20*1024*1024},
})

router.post('/survey', async (req,res,next)=>{
    try{
        console.log("survey",req.body)
        const item = await Survey.create({
            answer:req.body.answer
        })

        res.status(200).json({id:item.id})
    }catch (err){
        console.error(err)
        next(err)
    }
})



router.post('/upload/image', upload.single('image'), (req,res,next)=>{
    res.send({
        fileName: req.file.location
    });
})

router.post('/image', async (req,res,next)=>{
    try{
        await Image.create({
            key:req.body.key,
            url:req.body.url,
        })

        res.status(200).send("ok")
    }catch (err){
        console.error(err)
        next(err)
    }
})


module.exports = router;
