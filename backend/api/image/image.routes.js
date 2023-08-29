import express from 'express'
import { getImageById, getImages, getImagesByAuthor } from './image.controller.js'
const router = express.Router()

// router.get('/', getImages)
router.get('/', getImages)
router.get('/:id', getImageById)
router.get('/author/:name', getImagesByAuthor)

export const imageRoutes = router