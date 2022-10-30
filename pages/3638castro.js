import south3638 from "../public/3638 south.jpeg"
import floor3638 from "../public/3638 floor.jpeg"
import west3638 from "../public/3638 west.jpeg"
import east3638 from "../public/3638 east.jpeg"
import north3638 from "../public/3638 north.jpeg"
import Image from "next/image";
import {getMaterialsData} from "./api/dataFetching.mjs";
import Mt from "./Mt";

export async function getStaticProps(){
    const data = await getMaterialsData("36 Castro St")
    return{
        props: {data}
    }
}


export default function Home(props) {
    let images = [south3638, floor3638, west3638, east3638, north3638]
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