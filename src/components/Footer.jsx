import inslogo from '../assets/iglogo.png'
const Footer=()=>
{
    return (
     <>
     <footer className="bg-amber-950 text-white w-full mt-100 p-3 flex justify-around flex flex-row mb-0">
<p className="flex justify-center items-center">Contact Us @t toyheaven@gmail.com</p>
<p className="flex justify-center items-center">Free delivery for items on cart above Rs.999</p>
<div className="flex justify-even gap-3">
    <img src={inslogo} className="w-20 h-20 flex "></img>

</div>
<p className="flex justify-center items-center">Visit Us @ www.ToyHeaven.com</p>
<p className="flex justify-center items-center">Free returns within 30 days</p>
</footer>
     </>
    )
}
export default Footer;