require('dotenv').config()
const express = require('express')
const router = express.Router()
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const db = require('../../models')
const { route } = require('./users')
// const requiresToken = require('../requiresToken')

// List all inventory
router.get('/', async (req,res)=>{
    try {
        const listInventory = await db.Inventory.find({})
        res.json(listInventory)
    } catch (error) {
        console.log(error)
    }
} )
//route to get one specific medicine (justin)
router.get('/:id', async (req,res)=>{
    try {
        const foundMedicine = await db.Inventory.findById(req.params.id)
        res.json(foundMedicine)
    } catch (error) {
        console.log(error)
    }
} )


// Search inventory
router.post('/search', async (req, res) => {
  try {
    const foundInventory = await db.Inventory.find({
      genericName: req.body.genericName
    })

    res.json(foundInventory)
  } catch (error) {
    console.log(error)
  }
})

// Add to inventory
router.post('/', async (req, res) => {
  try {
    const inventoryCheck = await db.Inventory.findOne({
      genericName: req.body.genericName
    })

    if (inventoryCheck) {
      res.json({ msg: `${req.body.genericName} already exists.` })
    } else {
      const inventoryCreated = await db.Inventory.create(req.body)
      await inventoryCreated.save()
      res.json(inventoryCreated)
    }

    // if(inventoryCheck) return res.status(409).json({ msg: 'Email already in use.'})
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: `An error occured.${error}` })
  }
})

// update inventory
router.put('/:id', async(req,res)=> {
    try {
        const inventoryUpdated = await db.Inventory.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(inventoryUpdated)
    } catch (error) {
        console.log(error)        
    }
})

module.exports = router
