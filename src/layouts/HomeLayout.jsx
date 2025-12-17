import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
const HomeLayout=()=>
{
return(
    <div>
    <Header/>
    <div className="flex flex-wrap mt-20 justify-center">
    <Outlet/>
    </div>
    <Footer/>
    </div>
)
}
export default HomeLayout