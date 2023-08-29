import { httpService } from './http.service.js'

const BASE_URL = 'image/'

export const imageService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
}

function query() {
    return httpService.get(BASE_URL)
}

function getById(imageId) {
    console.log("imageId", imageId)
    console.log("BASE_URL + imageId", BASE_URL + imageId)
    return httpService.get(BASE_URL + imageId)
}

function remove(imageId) {
    return httpService.delete(BASE_URL + imageId)
}

function save(image) {
    if (image._id) {
        return httpService.put(BASE_URL, image)
    } else {
        return httpService.post(BASE_URL, image)
    }
}

function getDefaultFilter() {
    return { searchTerm: "" }
}