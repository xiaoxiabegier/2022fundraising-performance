import south539 from "../public/539 south.jpeg"
import floor539 from "../public/539 floor.jpeg"
import west539 from "../public/539 west.jpeg"
import east539 from "../public/539 east.jpeg"
import north539 from "../public/539 north.jpeg"
import Image from "next/future/image";




export default function Home() {
    let images = [south539, floor539, west539, east539, north539]
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