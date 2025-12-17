import ProductCard from "./ProductCard"
import { Link } from "react-router"
const TopProducts=()=>
{
const products=[
   {
    name: "Groot",
    imageurl: "https://i.pinimg.com/736x/d6/db/83/d6db839788897607e21dd71b50b4542f.jpg",
    sellingPrice: 1000,
    originalPrice: 1300,
    catogery: "crochet toy"
}
    , { 
        name:"Squirrel",
        imageurl:"https://i.pinimg.com/736x/1d/2a/ca/1d2aca4eb6a68667a664bac4889902e9.jpg",
        sellingPrice:900,
        originalPrice:1100,
        catogery:"soft toy"
    },
{
    name: "Captain America",
    imageurl: "https://i.pinimg.com/736x/bf/83/85/bf8385e570d21b55cafe1a1867a3f68c.jpg",
    sellingPrice: 850,
    originalPrice: 1000,
    catogery: "crochet toy"
}
]
return(
    <>
    {products.map((product)=>
    {
       return(
        <Link to={`/products/${product.name}`}>
        <ProductCard name={product.name} imageurl={product.imageurl} sellingPrice={product.sellingPrice} originalPrice={product.originalPrice}/>
       </Link>
    )
    })}
    </>
)
}
export default TopProducts