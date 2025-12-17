import { Outlet } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"
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