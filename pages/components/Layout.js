import NavTabs from "./NavTabs.js"

export default function Layout({ children }){
    return(
        <>
        <NavTabs/>
        {children }
        </>
    )
}