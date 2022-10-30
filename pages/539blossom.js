import south539 from "../public/539 south.jpeg"
import floor539 from "../public/539 floor.jpeg"
import west539 from "../public/539 west.jpeg"
import east539 from "../public/539 east.jpeg"
import north539 from "../public/539 north.jpeg"
import Image from "next/image";
import {getMaterialsData} from "./api/dataFetching.mjs";
import Mt from "./Mt";

export async function getStaticProps(){
    const data = await getMaterialsData("539 Blossom Way")
    return{
        props: {data}
    }
}


export default function Home(props) {
    let images = [south539, floor539, west539, east539, north539]
    const css = { width: '100%', height: 'auto' }
    let imageFeedElements = []
    for(let elem in images) {
        imageFeedElements.push(<Image priority={true} alt={images[elem]} src={images[elem]} sizes="100vw" style={css} />)
    }
    return(
        <div>
            {imageFeedElements}
            <Mt data = {props.data} />

        </div>)
}