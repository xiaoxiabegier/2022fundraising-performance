import south539 from "../public/539 south.jpeg"
import floor539 from "../public/539 floor.jpeg"
import west539 from "../public/539 west.jpeg"
import east539 from "../public/539 east.jpeg"
import north539 from "../public/539 north.jpeg"
import Image from "next/image";
import {getMaterialsData, getInitialState} from "./api/dataFetching.mjs";
import Mt from "./Mt";

export async function getStaticProps(){
    const propertyID = "539 Blossom Way"
    const data = await getMaterialsData(propertyID)
    let primaryColumnVisibilityModel = await getInitialState("ColumnVisibilityModel")

    let initialPrimaryGridState = await getInitialState("APIStateExport")
    initialPrimaryGridState.columns.columnVisibilityModel = primaryColumnVisibilityModel
    initialPrimaryGridState.preferencePanel.open = false
    return{
        props: {data, initialPrimaryGridState, propertyID},
        revalidate: 1
    }
}

export default function Home(props) {

    let images = [south539, floor539, west539, east539, north539]
    const css = { width: '100%', height: 'auto' }
    let imageFeedElements = []
    for(let elem in images) {
        imageFeedElements.push(<Image priority={true} alt={images[elem]} src={images[elem]} sizes="100vw" style={css} />)
    }
    console.log(props.initialPrimaryGridState)
    return(
        <div>

            {imageFeedElements}
            <Mt data = {props.data} initialPrimaryGridState={props.initialPrimaryGridState}  propertyID = {props.propertyID}/>
        </div>)
}