let express = require('express')
let router = express.Router();
let Hotel = require('../../models/hotel')
let Restaurant = require('../../models/restaurant')
let Activity = require('../../models/activity')
let db = require('../../models/index')
let daysRoutes = require('./days.js')

router.get('/hotels', (req, res, next) => {
  Hotel.findAll()
  .then(hotels => res.send(hotels))
  .catch(next)
})

router.get('/restaurants', (req, res, next) => {
  Restaurant.findAll()
  .then(restaurants => res.send(restaurants))
  .catch(next)
})

router.get('/activities', (req, res, next) => {
  Activity.findAll()
  .then(activities => res.send(activities))
  .catch(next)
})

router.use('/days', daysRoutes)

module.exports = router
