import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'

import south3638 from "../public/3638 south.jpeg"
import south817825 from "../public/817825 south.jpeg"
import south539 from "../public/539 south.jpeg"
import south61 from "../public/61 south.jpeg"



export default function Home() {
    let images = [south3638, south817825, south539, south61]
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