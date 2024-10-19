import Logo from './images/logo.png'
import apple from './images/apple.png'
import GIcon from './images/google.png'
import meta from './images/facebook.png'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-container bg-white  h-screen  '>

        <img src={Logo} alt="Logo" className="h-56 w-56  mb-0 mx-auto"/>

        <p className=' text-sm mt-6 p-0 mb-10'>Serving Convenience One Click at a Time</p>

        <div className='button-container flex flex-col items-center justify-center mt-4'>

          <Link to='/signup' className='signup-container flex items-center justify-center w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme'>
          <p className='font-custom font-medium text-lg'>Sign Up</p>
          </Link>

          <Link to='/login'className='signin-container flex items-center justify-center w-60 h-14 my-2.5 rounded-full border-1 border-mainTheme text-gray-800 '>
          <p className='font-custom font-medium text-lg'>Sign In</p>
          </Link>

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
export default SignUp