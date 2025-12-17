import { useParams } from "react-router"
import { useEffect,useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
const ProductDetails=()=>{
    const {id}=useParams()
    const[response,setResponse]=useState([])
    useEffect(() => {
  async function fetchProduct() {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setResponse(res.data); 
  }

  fetchProduct();
}, []);

     const handleAddtoCart=((e)=>
         {
             e.preventDefault()
             const newProduct={
             id:response.id,
             name:response.name,
             imageurl:response.imageurl,
             sellingPrice:response.sellingPrice,
             originalPrice:response.originalPrice,
             category:response.category,
             quantity:1
         }
             fetch('http://localhost:3000/cart',
             {method:'POST',
                 headers:{'Content-Type':'application/json;charset=UTF-8',},
                 body:JSON.stringify(newProduct),})
                toast.success("Product Added Successfully")
             })
    return(
        <>
        <div className="w-[200px] bg-amber-100 border  flex flex-wrap p-3 m-10 g-2 rounded-md">
        <div className="flex flex-col justify-start p-2"><img src={response.imageurl} className="w-full h-60 object-cover rounded-md"></img>
        <h1 className=" text-xl font-bold">{response.name}</h1>
        <h1 className=" text-sm">₹{response.sellingPrice}</h1>
        <h1 className=" text-sm"><del>₹{response.originalPrice}</del></h1></div>
         <div className="flex"><button className="px-3 py-1 bg-gray-200 rounded m-2 border" onClick={handleAddtoCart}>Add to Cart</button>
        <button className="px-3 py-1 bg-gray-200 rounded m-2 border">Buy</button></div>
    </div>
        </>
    )
}
export default ProductDetails