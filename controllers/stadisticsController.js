const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { stadistics } = require('../models')
const dbQueries = require('../utils/dbQueries')
const stadisticsController = module.exports
const log = logger.getLogger('stadisticsController')

stadisticsController.listStadistics = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`listStadistics ${JSON.stringify(where)} `)
  const stadistics = await dbQueries.select('stadistics', where)
  res.json(stadistics)
}

stadisticsController.addStadistics = async (req, res) => {
  const { body } = req
  log.info(`addStadistics body=${JSON.stringify(body)} `)
  const errors = isValid(body, stadistics.stadisticsSchema)
  if (errors.length) {
    log.error(`addStadistics invalid body `)
    res.status(BAD_REQUEST).json({ error: errors })
  } else {
    const newItem = await dbQueries.insert('stadistics', body)
    log.info(`statidistics created with id=${newItem[0].id}`);
    res.status(201).json(newItem)
  }
}

stadisticsController.deleteStadistics = async (req, res) => {
  const { id } = req.query
  log.info(`deleteStadistics id=${id} `)
  const del = await dbQueries.delete('stadistics', id)
  res.json(del)
}

stadisticsController.updateStadistics = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateStadistics id=${id} body=${JSON.stringify(body)}`)

  const errors = isValid(body, stadistics.stadisticsSchemaUpdate)
  if (errors.length) {
    log.error(`updateStadistics invalid body `)
    res.status(400).json({ error: errors })
  }

  const upd = await dbQueries.update('stadistics', id, body)
 // res.json(upd)
}
