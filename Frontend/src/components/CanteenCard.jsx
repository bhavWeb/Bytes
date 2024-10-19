
//364()x208(h-52)
import Nescafe from '../images/Nescafe.jpg'
import watch from '../images/watch.png'
import { Link } from 'react-router-dom'
const CanteenCard = (CanteenData) => {

  const {Name,foodItems,Stars,Time,img}=CanteenData;

  return (
    <Link to='/vendor' className=' w-cardwidth inline-block h-56 mx-auto mb-10 flex-col rounded-3xl  shadow-2xl '>
      <div className="signup-container w-cardwidth h-56 mx-auto mb-10 mt-4 flex-col rounded-3xl  shadow-2xl">
    <div className="card-image w-full h-2/3 bg-black rounded-3xl">
        <img src={Nescafe} alt='Nescafe' className='w-full h-full rounded-t-3xl'></img>
    </div>

    <div className="card-bottom w-full h-1/3 card-bottom bg-blue-gray-100 px-3 py-2 flex-col justify-between rounded-b-3xl shadow-lg">
    <div className="Nescafe w-full h-6 flex justify-between items-center">
      <h3 className="card-name ml-1 h-8 text-xl font-custom font-bold text-left">Nescafe</h3>
      <div className="card-rating w-12 bg-green-800 rounded-lg text-sm h-5   justify-evenly items-center flex font-custom font-bold text-white ">4.2<p className="  ">&#9733;</p></div>
    </div>

    <div className="card-details flex justify-start ">
      <ul className="card-details-list font-display font-medium flex justify-start text-small-11 ml-1 text-gray-700 ">
        <li className="text-left ml-0 mr-2">Maggi</li>
        <li className="text-left mx-2 list-disc">Coffee</li>
        <li className="text-left mx-2 list-disc">Pasta</li>
        </ul>
    </div>

    <div className='flex justify-start items-center ml-1'>
      <img src={watch} alt='' className='w-3 h-3 mt-1'></img>
      <p className='text-small-9 font-display font-medium mt-1.5 ml-1 text-gray-700'>10 mins.</p>
    </div>
    </div>
    </div>
    </Link>
    
  )
}
export default CanteenCard