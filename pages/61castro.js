import south61 from "../public/61 south.jpeg"
import floor61 from "../public/61 floor.jpeg"
import west61 from "../public/61 west.jpeg"
import east61 from "../public/61 east.jpeg"
import north61 from "../public/61 north.jpeg"
import Image from "next/image";


export default function Home() {
    let images = [south61, floor61, west61, east61, north61]
    const css = { width: '100%', height: 'auto' }
    let imageFeedElements = []
    for(let elem in images) {
        imageFeedElements.push(<Image priority={true} alt={images[elem]} src={images[elem]} sizes="100vw" style={css} />)
    }
    return(
        <div>
            {imageFeedElements}
        </div>)
}