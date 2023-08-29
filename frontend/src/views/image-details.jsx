import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imageService } from "../services/image.service"

export function ImageDetails() {
    const params = useParams()
    const [image, setImage] = useState(null)

    useEffect(() => {
        loadImage()
    }, [])

    async function loadImage() {
        const image = await imageService.getById(params.imageId)
        console.log("image:", image)
        setImage(image)
    }

    return (
        <div className="image-container">
            <div className="image-details">
                {image ?
                    <>
                        <div className="header">
                            <h2>{image.name}</h2>
                            <span className="author">By {image.artist}</span>
                        </div>
                        <div className="image-chat-container">
                            <img className="image" src={`/${image.name}.jpg`} />
                            <div className="chat">
                                <div className="chat-header">
                                    <span>Chat</span>
                                </div>
                                <div className="controls-area">
                                    <input type="text" placeholder="Type your message here" />
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </>
                    : <h4>Loading...</h4>}
            </div>
        </div>
    )
}