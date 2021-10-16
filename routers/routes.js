const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { stadisticsController } = require('../controllers')

const router = express.Router()

router.get(routers.STADISTICS, wrap(stadisticsController.listStadistics))

router.post(routers.STADISTICS, wrap(stadisticsController.addStadistics))

router.put(routers.STADISTICS, wrap(stadisticsController.updateStadistics))

router.delete(routers.STADISTICS, wrap(stadisticsController.deleteStadistics))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))
  router.get("/test_stadistics_ci", wrap(async (req, res) => {
    res.status(OK).json({ message: 'THis a test for stadistics ci' })
  }))

module.exports = router