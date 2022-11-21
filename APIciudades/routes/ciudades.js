const express = require('express')
const router = express.Router()
const Ciudad = require('../models/ciudad')

module.exports = router

router.get('/', async (req, res) => {
    try{
        const ciudades = await Ciudad.find()
        res.json(ciudades)
    }catch(error){
        res.status(500).json({ mensaje: error.mensaje})
    }
})

router.get('/:id', getCiudad, (req, res) => {
    res.json(res.ciudad.nombre)
})

router.post('/', async (req, res) => {
    const ciudad = new Ciudad({
        nombre: req.body.nombre,
        provincia: req.body.provincia,
        habitantes: req.body.habitantes,
        extension: req.body.extension
    })
    try{
        const nuevaCiudad = await ciudad.save();
        res.status(201).json(nuevaCiudad)
    }catch(error){
        res.status(400).json({ mensaje: error.mensaje })
    }
})

router.patch('/:id', getCiudad, async (req, res) => {
    if(req.body.nombre != null){
        res.ciudad.nombre = req.body.nombre
    }
    if(req.body.provincia != null){
        res.ciudad.provincia = req.body.provincia
    }
    try{
        const ciudadModif = await res.ciudad.save()
    }catch(error){
        res.status(400).json({ mensaje: error.mensaje })
    }
})

router.delete('/:id', getCiudad, async (req, res) => {
    try{
        await res.ciudad.remove()
        res.json({ mensaje: 'Ciudad eliminada' })
    }catch(error){
        res.status(500).json({ mensaje: error.mensaje })
    }
})

async function getCiudad(req, res, next){
    let ciudad
    try{
        ciudad = await Ciudad.findById(req.params.id)
        if(ciudad == null){
            return res.status(404).json({ mensaje: 'No se pudo encontrar la ciudad'})
        }
    }catch(error){
        return res.status(500).json({ mensaje: error.mensaje })
    }

    res.ciudad = ciudad
    next()
}

module.exports = router