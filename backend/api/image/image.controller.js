import { logger } from '../../services/logger.service.js'
import { imageService } from './image.service.js'

export async function getImageById(req, res) {
  try {
    const imageId = req.params.id
    const image = await imageService.getById(imageId)
    if (image) {
      res.json(image)
    }
    else throw new Error('Failed to get image')
  } catch (err) {
    console.error('Failed to get image', err.message)
    res.status(400).send({ error: err.message })
  }
}

export async function getImagesByAuthor(req, res) {
  const author = req.params.name
  try {
    const images = await imageService.queryByAuthor(author)
    if (images.length >= 1) {
      res.json(images)
    }
    else throw new Error(`Failed to get images by ${author}`)
  } catch (err) {
    logger.error(`Failed to get images by ${author}`)
    res.status(400).send({ error: err.message })
  }
}

export async function getBatchImages(req, res) {
  try {
    const amount = req.params.amount
    const images = await imageService.getBatchedImages(amount)
    if (images.length >= 1) {
      res.json(images)
    }
  } catch (err) {
    logger.error('Failed to get batch of images', err)
    res.status(400).send({ error: err.message })
  }

}

export async function getImages(req, res) {
  try {
    logger.debug('Getting Images:')
    const images = await imageService.query()
    res.json(images)
  } catch (err) {
    logger.error('Failed to get images', err)
    res.status(400).send({ err: 'Failed to get images' })
  }
}