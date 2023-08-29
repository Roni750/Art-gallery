import { ImagePreview } from "./image-preview";

export function ImageList({ images }) {

    return (
        <>
            <ul className="image-list clean-list">
                {images && images.map(image =>
                    <li key={image._id}>
                        <ImagePreview image={image} />
                    </li>
                )}
            </ul>
        </>
    )
}