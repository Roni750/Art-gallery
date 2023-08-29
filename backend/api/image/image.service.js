import mongodb from 'mongodb'
import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
const { ObjectId } = mongodb

async function getById(imageId) {
    try {
        const collection = await dbService.getCollection('images')
        const idToScan = new ObjectId(imageId)
        const image = await collection.findOne({ _id: idToScan })
        return image
    } catch (err) {
        console.error(`Error while finding image ${imageId}`, err)
        throw err
    }
}

async function query(filterBy) {
    try {
        const collection = await dbService.getCollection('images')
        const images = await collection.find().toArray()
        return images
    } catch (err) {
        logger.error('cannot find images', err)
        throw err
    }
}

async function queryByAuthor(author) {
    try {
        const collection = await dbService.getCollection('image')
        const images = await collection.find({ author: { $regex: author, $options: 'i' } }).toArray()
        return images
    } catch (err) {
        logger.error('cannot find images', err)
        throw err
    }
}

export const imageService = {
    getById,
    query,
    queryByAuthor
}