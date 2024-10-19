import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import Student from '../images/Student.png'
import Teacher from '../images/Teacher.png'
import Staff from '../images/Staff.png'


const User = () => {
  return (
    <div className='signup-container'>

        <img src={Logo} alt="Logo" className="h-56 w-56 mt-10 mb-0 mx-auto"/>

        <p className=' text-sm mt-6 p-0 mb-10 w-72 mx-auto'>Just a quick question to get you started: are you
        a student, teacher, or staff member?</p>

        <div className='whoareyoubuttons flex flex-col items-center mt-4 mb-32'>

            <Link to='/landingpage' className = 'mb-8'><img src = {Student}></img></Link>

            <Link to='/landingpage' className = 'mb-8'><img src = {Teacher}></img></Link>

            <Link to='/landingpage' className = 'mb-8'><img src = {Staff}></img></Link>
        </div>

    </div>
  )
}
export default User