import { Link } from "react-router-dom";

export function ImagePreview({ image }) {

    return (
        <div className="image-preview">
            {/* <img className="image" src={`/${image.name}.jpg`} /> */}
            <Link to={`/image/${image._id}`}><img className="image" src={`/${image.name}.jpg`} /></Link>
            <div className="image-card">
                <h2 className="title">{image.name}</h2>
                <h2 className="artist">By {image.artist}</h2>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod doloremque perspiciatis dolorum vero fugiat? Ducimus aliquid rerum, voluptate odit accusamus numquam eum soluta alias pariatur sed magni recusandae illo.
                </div>
            </div>
        </div>
    )
}