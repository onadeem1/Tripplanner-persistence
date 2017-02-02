let express = require('express')
let router = express.Router();
let Hotel = require('../../models/hotel')
let Restaurant = require('../../models/restaurant')
let Activity = require('../../models/activity')
let Day = require('../../models/day')
let db = require('../../models/index')

router.get('/', (req, res, next) => {
  Day.findAll()
  .then(days => res.send(days))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
})

router.post('/', (req, res, next) => {
  Day.create({
    number: 5
  })
  .then(day => res.send(day))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  // Day.findById(req.params.id)
  // .then(day => res.send(day))
  // .catch(next)
})

router.delete('/:id', (req, res, next) => {
  // Day.findById(req.params.id)
  // .then(day => res.send(day))
  // .catch(next)
})

module.exports = router


