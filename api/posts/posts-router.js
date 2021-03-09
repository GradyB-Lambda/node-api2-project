// implement your posts router here
const Post    = require('./posts-model')
const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
    Post.find()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "The post information could not be retrieved"
            })
        })
})

router.get('/:id', (req,res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({ message: "The post with the spcified ID does not exist"})
        })
})

router.post('/', (req,res) => {
    const { title, contents } = req.body
    Post.insert(req.body)
    .then(post => {
        if(!title || !contents){
            res.status(400).json({
                message: "Please provide title and content for the post"
            })
        } else {
        res.status(201).json(post)
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "There as an error while saving the post to the DB"
        })
    })
})



module.exports = router