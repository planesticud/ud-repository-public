const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { publicarController } = require('../controllers')

const router = express.Router()

router.get(routers.PUBLICAR, wrap(publicarController.listPublicar))

router.post(routers.PUBLICAR, wrap(publicarController.createPublicar))

router.put(routers.PUBLICAR, wrap(publicarController.updatePublicar))

router.delete(routers.PUBLICAR, wrap(publicarController.deletePublicar))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))
  router.get("/test_publicar_ci", wrap(async (req, res) => {
    res.status(OK).json({ message: 'THis a test for publicar ci' })
  }))

module.exports = router