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

router.get('/:number', (req, res, next) => {
  console.log('THIS', req.params.number, typeof req.params.number)
  let obj = {};
  Day.findOne({
    where: {
      number: +req.params.number
    }
  })
  .then((day) => {obj.day = day;
      return  Promise.all([day.getRestaurants(), day.getActivities()])
    })
  .then((result)=>{
    obj.restaurants = result[0];
    obj.activities = result[1];
    return res.json(obj)
  })
})

router.post('/', (req, res, next) => {
  Day.findAndCountAll()
  .then(function(result) {
    return result.count
  })
  .then(function(count){
    return Day.create({
      number: count + 1
    })
  })
  .then((day) => {
    res.json(day)
    //attractionsModule.loadEnhancedAttractions('days', [day])
  })
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


