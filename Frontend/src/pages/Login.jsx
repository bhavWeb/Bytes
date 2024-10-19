import Logo from '../images/logo.png'
import apple from '../images/apple.png'
import GIcon from '../images/google.png'
import meta from '../images/facebook.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import apiRequest from '../lib/apiRequest.js'

const Login = () => {

  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [error , setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target)

    const email = formData.get("email")
    const password = formData.get("password")

    // Check if email or password is empty
    if (!email || !password) {
      alert("Please enter both email and password.");
    return; 
    }


    try{
      const res = await apiRequest.post('/login',{
        email,
        password
      });


      if (res.status !== 200 && res.status !== 201) {
        alert(`Login failed: ${res.statusText}`);
      } else {
        alert("Login Successful")
        navigate('/landingpage')
      }
    }
    catch(err){
      setError(error.response.data.message)
    }
  }

  return (
    <div className='signup-container bg-white h-screen'>

        <img src={Logo} alt="Logo" className="h-56 w-56  mb-0 mx-auto"/>

        <p className=' text-sm mt-3 p-0 mb-2'>Serving Convenience One Click at a Time</p>
        <p className=' text-sm mt-3 p-0 mb-2'>Login With Your Credentials</p>


        <div className='button-container flex flex-col items-center mt-4'>

        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center">
        {/* <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900">+91</label> */}

        <div className="relative w-full">
            <input name='email' id='email-input' type="text" placeholder="Enter email Id" className=" custom-input block p-2.5 w-full mb-2  text-sm text-gray-900 rounded-full  border-1 border-gray-300 focus:outline-none"  />
            <input name='password' id='password-input' type="password" placeholder="Enter Password" className=" custom-input block p-2.5 w-full mb-2  text-sm text-gray-900 rounded-full  border-1 border-gray-300 focus:outline-none"  />
            </div>
        
        {/* <div className="relative w-full">
            <input id='password-input' type="text" placeholder="Enter Password" className=" custom-input block p-2.5 w-full mb-6  text-sm text-gray-900 rounded-full  border-1 border-gray-300 focus:outline-none"  />
        </div> */}
    </div>
    <button type='submit' className='flex items-center justify-center w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme'>
  <p className='font-custom font-medium text-lg'>Next</p>
</button>
    {/* <button type="submit" className="Next-button font-custom font-medium  text-lg w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme">Next</button> */}
</form>

        
        </div>

        <p className='mt-8 mb-6 '>or</p>

        <div className='social-icons flex justify-center'>

            <button type='submit' className='w-7 h-7  mr-6 ml-0'>
            <img src={apple} placeholder='appleIcon' className='w-7 h-7 '></img>
            </button>

            <button type='submit' className='w-7 h-7 mr-6 ml-6'>
            <img src={GIcon} placeholder='GoogleIcon' className='w-7 h-7  '></img>
            </button>

            <button type='submit' className='w-7 h-7 mr-0 ml-6 '>
            <img src={meta} placeholder='metaIcon' className='w-7 h-7 '></img>
            </button>

        </div>

        <p className='mt-8 mb-2 w-52 mx-auto text-xs font-semibold'>By singing up, you agree to our  </p>

        <div className='mx-auto mt-2'>
            <Link className=' mx-4 text-xs font-medium text-mainTheme underline'>Terms Of Service</Link>
            <Link className=' mx-4 text-xs font-medium  text-mainTheme underline'>Privacy Policy</Link>
        </div>

    </div>
  )
}
export default Login