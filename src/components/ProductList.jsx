import { Name } from "selenium-webdriver/lib/command"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"
const ProductList = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/products")
            const data = await response.json()
            setProduct(data)
        }
        fetchData()
    }, [])
    return (
        <>

            {products.map((product) => {
                return (
                    <ProductCard id={product.id} name={product.name} imageurl={product.imageurl} sellingPrice={product.sellingPrice} originalPrice={product.originalPrice} category={product.category} />
                )
            })}
        </>
    )
}
export default ProductList