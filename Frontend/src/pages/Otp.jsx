import Logo from '../images/logo.png'
import apple from '../images/apple.png'
import GIcon from '../images/google.png'
import meta from '../images/facebook.png'
import {Link, useNavigate} from 'react-router-dom'
import { useRef, useState } from 'react'
import apiRequest from '../lib/apiRequest'

const Otp = ()=>{

  const [otp, setOtp] = useState(""); // State to hold the OTP

  const [error, setError] = useState(""); // To handle errors during OTP validation
  const navigate = useNavigate(); // Hook for page redirection

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit input to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {

      if (!otp || otp.trim() === "") {
        setError("Please enter the OTP");
        return; // Stop the execution if OTP is empty
      }
      
      // Send OTP to the backend for verification
      const res = await apiRequest.post('/verify-otp' , {otp});

      if (res.status === 201 || res.status ==200) {
        // On successful OTP verification, redirect to the next page
        alert('OTP Verified Successfully');
        navigate('/landingpage'); // Redirect to the next page after verification
      } else {
        setError('OTP verification failed. Please try again.');
      }
    } catch (err) {
      // Handle error in response
      setError(err.response?.data?.message || 'OTP verification failed.');
    }
  };

  return (
    <div className='signup-container bg-white h-screen'>

        <img src={Logo} alt="Logo" className="h-56 w-56 mb-0 mx-auto"/>

        <p className=' text-sm mt-6 p-0 mb-2'>We have sent the verification code to your email<br/>
        {/* <p className='underline text-blue-400'>+911234567809</p> */}
        </p>

        <div className='button-container flex flex-col items-center mt-4'>

        <form className="max-w-sm mx-auto">

        <input
            type="text"
            value={otp}
            onChange={handleInputChange} 
            maxLength={6} // Limit input to 6 digits
            className="custom-input block p-3 mb-6 w-60 text-center text-sm text-gray-900 rounded-full border border-gray-300 focus:outline-none"
            placeholder="Enter OTP"
          />
        {/* <div className="w-full flex items-center">
        
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
        <input id='phone-input' maxLength={1} type="text" className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full  border-1 border-gray-300 active:border-gray-300 focus:outline-none"  />
     
    </div> */}

        {/* <div className="w-full flex items-center">
            {Array(6).fill(0).map((_, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]} // Assign the ref for each input
                maxLength={1}
                type="text"
                className="custom-input block p-3 mr-1 mb-6 w-10 text-sm text-gray-900 rounded-full border-1 border-gray-300 focus:outline-none"
                onChange={(e) => handleInputChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              />
            ))}
          </div>
           */}


    {/* <Link to='/user' className='flex mx-auto items-center justify-center w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme'>
  <p className='font-custom font-medium text-lg'>Next</p>
</Link> */}
{error && <p style={{ color: 'red' }}>{error}</p>}
<button
  onClick={handleOtpSubmit}
  className='flex mx-auto items-center justify-center w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme'>
  <p className='font-custom font-medium text-lg'>Next</p>
</button>
    {/* <button type="submit" className="Next-button font-custom font-medium  text-lg w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme">Next</button> */}
</form>
        <p>Didn't receive the OTP? <Link className=' text-xs font-normal text-mainTheme underline'>Resend</Link></p>
        </div>

        <p className='mt-4 mb-6 '>or</p>

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
  


export default Otp