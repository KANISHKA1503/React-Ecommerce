import {useState} from "react"
import { useNavigate } from "react-router"
import axios from "axios"
const ProductForm=()=>
{
    const [userName,setUserName]=useState('')
    const[imageurl,setImageurl]=useState('')
    const [sellingPrice, setSellingPrice] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const navigate=useNavigate()
    const handleNameChange=(e)=>
    {   
        setUserName(e.target.value)
    }
    const handleUrlChange = (e) => {
    setImageurl(e.target.value);
};
const handleSellingPriceChange = (e) => {
    setSellingPrice(e.target.value);
};
const handleOriginalPriceChange = (e) => {
    setOriginalPrice(e.target.value);
};
const handleCategoryChange = (e) => {
    setCategory(e.target.value);
};
const handleIdChange = (e) => {
    setId(e.target.value);
};

    
    const handleSubmit=async(e)=>
    {    
        e.preventDefault()
       const newProduct={
        id:id,
        name:userName,
        imageurl:imageurl,
        sellingPrice:sellingPrice,
        originalPrice:originalPrice,
        category:category
       }
       
       await axios.post('http://localhost:3000/products',newProduct)
        toast.success("Product added successfully!");
navigate("/products");


        
    }       
        
    
return(
    <>
     <div className="flex justify-center items-center min-h-screen">

  <div className="bg-[url('https://i.pinimg.com/736x/b8/97/62/b897626a0f57c6e10db7580b0db2f4e1.jpg')] 
                  bg-cover bg-center bg-no-repeat 
                  rounded-xl shadow-xl 
                  w-[380px] h-[600px] p-6 flex justify-center">

    <form className="flex flex-col justify-start bg-white/40 backdrop-white/40 w-full h-full rounded-xl p-6">
      
      <h1 className="font-bold mb-4 mt-4 text-2xl text-center">Product Form</h1>

      <input
        type="text"
        id="name"
        placeholder="Product Name"
        value={userName}
        onChange={handleNameChange}
        className="border shadow-md p-3 mx-3 mb-3 rounded-md bg-white"
      />

      <input
        type="url" 
        id="imageurl" 
       value={imageurl} 
       placeholder="Image link"
       onChange={handleUrlChange}
        className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
      />
      
<input
  type="number"
  id="originalPrice"
  value={originalPrice}
  placeholder="Original price"
  onChange={handleOriginalPriceChange}
  min="0"
  className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
/>
<input
  type="number"
  id="sellingPrice"
  value={sellingPrice}
  placeholder="Selling price"
  onChange={handleSellingPriceChange}
  className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
  min="0"
/>

<input
  type="text"
  id="category"
  value={category}
  placeholder="Category"
  onChange={handleCategoryChange}
  className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
/>
<input
  type="text"
  id="id"
  value={id}
  placeholder="Product Id"
  onChange={handleIdChange}
  className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
/>
 <input
        type="submit"
        value="Add"
        onClick={handleSubmit}
        className="bg-blue-300 text-black p-3 rounded-md w-[120px] mx-auto cursor-pointer hover:bg-blue-400"
      />
    </form>

  </div>
</div>

</>   
    
)
}
export default ProductForm;