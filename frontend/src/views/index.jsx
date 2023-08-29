import { useEffect, useState } from 'react'
import { imageService } from '../services/image.service.js'
import { ImageList } from '../components/image-list.jsx'
import { ImageFilter } from '../components/image-filter.jsx'

export function Index() {
    const [images, setImages] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const images = await imageService.query()
            console.log("images:", images)
            setImages(images)
        } catch (err) {
            console.error(err)
        }
    }

    function onSetFilter(filterToEdit) {
        console.log("filterToEdit:", filterToEdit)
        setFilter(filterToEdit)
    }

    function setFilter(filterToEdit) {
        if (!images) return
        const filteredImages = images.filter(image => image.name || image.artist !== filterToEdit)
        console.log("filteredImages:", filteredImages)
        setImages(filteredImages)
    }

    return (
        <div className="image-index">
            <ImageFilter onSetFilter={onSetFilter} />
            {images ? (
                <ImageList images={images} />
            ) : <h4>Loading...</h4>
            }
        </div>
    )
}