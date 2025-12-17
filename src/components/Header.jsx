import {Link} from "react-router"
const Header=()=>
{
  return(
<>
  <header className="flex justify-between bg-amber-950 w-full p-3 gap-10 flex-wrap">
        <div className="text-white text-xl font-extrabold ">ToyHeaven</div>
        <div className="flex flex-wrap gap-15 justify-even text-white text-md">
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/orders'>Orders</Link>
          
           </div>
<div className="flex gap-4 flex-wrap text-white text-md">
    <Link to='/login'>Login</Link>
</div>
    </header>
</>
  )  
}
export default Header