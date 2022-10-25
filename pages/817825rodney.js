import south817825 from "../public/817825 south.jpeg"
import floor817825 from "../public/817825 floor.jpeg"
import west817825 from "../public/817825 west.jpeg"
import east817825 from "../public/817825 east.jpeg"
import north817825 from "../public/817825 north.jpeg"
import Image from "next/future/image";




export default function Home() {
    let images = [south817825, floor817825, west817825, east817825, north817825]
    const css = { width: '100%', height: 'auto' }
    let imageFeedElements = []
    for(let elem in images) {
        imageFeedElements.push(<Image src={images[elem]} sizes="100vw" style={css} />)
    }
    return(
        <div>
            {imageFeedElements}
        </div>)
}