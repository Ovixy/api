const express = require ('express')
const router = express.Router()
const Item = require('../models/item')

module.exports = router

router.get('/', async (req, res) => {
    try {
        const item = await Item.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get ('/:id', (req, res) => {    
    res.send(req.params.id)
})

router.post ('/', async (req, res) => { 
    const item = new Item ({
        name: req.body.name,
        itemType: req.body.itemType
    })

    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch(err) {
        res.status(400)
    } 
}) 

router.patch ('/:id', (req, res) =>{
})

router.delete ('/:id', (req, res) => {
})
