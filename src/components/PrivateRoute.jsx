import { Navigate } from "react-router"
const PrivateRoute=({children})=>
{   const isLoggedIn=sessionStorage.getItem('isLoggedIn')==="true" 
    const role=sessionStorage.getItem('role')==="admin"
    return(
    role? children :<Navigate to='/'/> 
    )
}
export default PrivateRoute