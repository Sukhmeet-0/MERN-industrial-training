import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import {Outlet} from 'react-router-dom'
const PublicLayout=()=>{
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export  default PublicLayout