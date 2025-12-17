import { toast } from "react-toastify"

const ProductCard=(props)=>
{const{name,imageurl,sellingPrice,originalPrice,id,category}=props
    const handleAddtoCart=((e)=>
    {
        e.preventDefault()
        const newProduct={
        id:id,
        name:name,
        imageurl:imageurl,
        sellingPrice:sellingPrice,
        originalPrice:originalPrice,
        category:category,
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
        <div className="flex flex-col justify-start p-2"><img src={imageurl} className="w-full h-60 object-cover rounded-md"></img>
        <h1 className=" text-xl font-bold">{name}</h1>
        <h1 className=" text-sm">₹{sellingPrice}</h1>
        <h1 className=" text-sm"><del>₹{originalPrice}</del></h1></div>
         <div className="flex"><button className="px-3 py-1 bg-gray-200 rounded m-2 border" onClick={handleAddtoCart}>Add to Cart</button>
        <button className="px-3 py-1 bg-gray-200 rounded m-2 border">Buy</button></div>
    </div>
    </>
)
}
export default ProductCard