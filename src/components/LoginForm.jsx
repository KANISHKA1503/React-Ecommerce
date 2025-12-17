import {useState,useRef} from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
const LoginForm=()=>
{   const [userName,setUserName]=useState('')
   const [email,setemail]=useState('')
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const handleNameChange=(e)=>
    {   
        setUserName(e.target.value)
    }
    const handleemailChange=(e)=>
    {   
        setemail(e.target.value)
    }
    console.log(userName)
    const handleSubmit=async(e)=>
    {
        e.preventDefault()
       console.log(userName,passwordRef.current.value)
     const {data}=await axios.post("http://localhost:3000/auth/login",
       {
        email:email,
        password:passwordRef.current.value
       })
       console.log(" => ",data)
       toast.success(data.message)
        sessionStorage.setItem("isLoggedIn","true")
         sessionStorage.setItem("token",data.token)
         if(email=="admin@gmail.com")
        {
           sessionStorage.setItem("role","admin")
           navigate('/admin')
        }else
        {
          sessionStorage.setItem("role","user")
           navigate('/')}
       }
        
    console.log(passwordRef)
    return(
       <>
 <div className="flex justify-center items-center min-h-screen bg-amber-50">

  <div className="bg-[url('https://i.pinimg.com/736x/fb/01/b8/fb01b8ce5816f43eef828f4f5d9141ef.jpg')] 
                  bg-cover bg-center bg-no-repeat 
                  rounded-xl shadow-xl 
                  w-[380px] h-[520px] p-6 flex justify-center">

    <form className="flex flex-col justify-start bg-white/40 backdrop-white/40 w-full h-full rounded-xl p-6">
      
      <h1 className="font-bold mb-4 mt-6 text-2xl text-center">Login Form</h1>

      <input
        type="text"
        id="name"
        placeholder="UserName"
        value={userName}
        onChange={handleNameChange}
        className="border shadow-md p-3 mx-3 mb-3 rounded-md bg-white"
      />

      <input
        type="password"
        id="password"
        placeholder="Password"
        ref={passwordRef}
        className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
      />
      
      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={handleemailChange}
        className="border shadow-md p-3 mx-3 mb-3 rounded-md bg-white"
      />

      <input
        type="submit"
        value="login"
        onClick={handleSubmit}
        className="bg-blue-300 text-black p-3 rounded-md w-[120px] mx-auto cursor-pointer hover:bg-blue-400"
      />
    </form>

  </div>
</div>

</>

        
    )
}
export default LoginForm;