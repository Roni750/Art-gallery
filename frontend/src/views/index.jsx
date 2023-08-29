import { useEffect, useState } from 'react'
import { imageService } from '../services/image.service.js'
import { ImageList } from '../components/image-list.jsx'
import { ImageFilter } from '../components/image-filter.jsx'

export function Index() {
    const [images, setImages] = useState(null)
    const [filterBy, setFilterBy] = useState("")

    useEffect(() => {
        fetchData()
    }, [filterBy])

    async function fetchData() {
        try {
            const images = await imageService.query(filterBy)
            console.log("images:", images)
            setImages(images)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="image-index">
            <ImageFilter setFilterBy={setFilterBy} filterBy={filterBy} />
            {images ? (
                <ImageList images={images} />
            ) : <h4>Loading...</h4>
            }
        </div>
    )
}