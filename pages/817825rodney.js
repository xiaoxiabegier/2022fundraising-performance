import south817825 from "../public/817825 south.jpeg"
import floor817825 from "../public/817825 floor.jpeg"
import west817825 from "../public/817825 west.jpeg"
import east817825 from "../public/817825 east.jpeg"
import north817825 from "../public/817825 north.jpeg"
import Image from "next/image";
import {getMaterialsData, getInitialState} from "./api/dataFetching.mjs";
import Mt from "./Mt";


export async function getStaticProps(){
    const data = await getMaterialsData("817 Rodney Dr")
    let primaryColumnVisibilityModel = await getInitialState("ColumnVisibilityModel")

    let initialPrimaryGridState = await getInitialState("APIStateExport")
    initialPrimaryGridState.columns.columnVisibilityModel = primaryColumnVisibilityModel
    initialPrimaryGridState.preferencePanel.open = false
    return{
        props: {data, initialPrimaryGridState}
    }
}

export default function Home(props) {
    let images = [south817825, floor817825, west817825, east817825, north817825]
    const css = { width: '100%', height: 'auto' }
    let imageFeedElements = []
    for(let elem in images) {
        imageFeedElements.push(<Image priority={true} alt={images[elem]} src={images[elem]} sizes="100vw" style={css} />)
    }
    return(
        <div>
            {imageFeedElements}
            <Mt data = {props.data} initialPrimaryGridState={props.initialPrimaryGridState} />

        </div>)
}