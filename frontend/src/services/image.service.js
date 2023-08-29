import { httpService } from './http.service.js'

const BASE_URL = 'image/'

export const imageService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy) {
    let images = await httpService.get(BASE_URL)
    if (filterBy) {
        const regExp = new RegExp(filterBy, 'i')
        images = images.filter(image => regExp.test(image.name) || regExp.test(image.artist))
    }
    return images
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