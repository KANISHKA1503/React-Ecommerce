import { Link } from "react-router"
import ProductForm from "./ProductForm"

const Admin=()=>{
    return(
        <div className="flex justify-center items-center">
      <Link to="add-products" className="text-black bg-amber-100 border m-3 p-4 rounded-xl shadow-lg">
        Add Product
      </Link>
    </div>
    )
}
export default Admin