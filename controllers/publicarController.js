const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { publicar } = require('../models')
const dbQueries = require('../utils/dbQueries')
const publicarController = module.exports
const log = logger.getLogger('publicarController')


publicarController.contarPublicar = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`contarPublicar ${JSON.stringify(where)} `)
  const publicar = (await (dbQueries.select('publicar', where))).length
 // console.log("conteo: "+publicar)
  res.json(publicar)
}

publicarController.listPublicar = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`listPublicar ${JSON.stringify(where)} `)
  const publicar = await dbQueries.select('publicar', where)
  res.json(publicar)
}

publicarController.createPublicar = async (req, res) => {
  const { body } = req
  log.info(`createPublicar body=${JSON.stringify(body)} `)
  const errors = isValid(body, publicar.publicarSchema)
  if (errors.length) {
    log.error(`createPublicar invalid body `)
    res.status(BAD_REQUEST).json({ error: errors })
  } else {
    const newItem = await dbQueries.insert('publicar', body)
    log.info(`revision created with id=${newItem[0].id}`);
    res.status(201).json(newItem)
  }
}

publicarController.deletePublicar = async (req, res) => {
  const { id } = req.query
  log.info(`deletePublicar id=${id} `)
  const del = await dbQueries.delete('publicar', id)
  res.json(del)
}

publicarController.updatePublicar = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updatePublicar id=${id} body=${JSON.stringify(body)}`)

  const errors = isValid(body, publicar.publicarSchemaUpdate)
  if (errors.length) {
    log.error(`updatePublicar invalid body `)
    res.status(400).json({ error: errors })
  }

  const upd = await dbQueries.update('publicar', id, body)
  res.json(upd)
}
