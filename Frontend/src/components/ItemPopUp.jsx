import Footer from "../components/Footer"
import backbutton from '../images/backbutton.png'
import { Link } from "react-router-dom"
import golmasalamaggi from '../images/golmasalamaggi.png'
import ratingstar from '../images/ratingstar.png'
import calories from '../images/calories.png'
import timetaken from '../images/timetaken.png'
import { useState } from "react"
import { Textarea } from "@material-tailwind/react"

const Filters = (item) => {

    const {Name,Price,stars,ratings,img} = item;
    const [count,setCount] = useState(0);

    const handleClick =()=>{
        setCount(prevState==prevState--)
    }

return (
<div className='signup-container flex flex-col items-center mx-auto w-footer-width bg-lightRed'>
    <div className="flex-col rounded-xl items-center justify-center w-phonewidth h-phoneheight mt-2 mb-2   bg-white ">

    <div className="filter-header flex items-center mx-auto justify-around w-80 ">
    <Link to='/vendor' className="w-12 h-2 ">
        <img src={backbutton} alt="back" className="text-left mb-12 rounded-2xl"></img>
    </Link>
    
    <h1 className="font-display text-small-21  font-semibold h-7 w-56 mt-14 mb-8 mr-9 ">CheeseMaggi</h1>
        </div>
    
    <div className="item-image flex items-center justify-center mt-4">
        <img src={golmasalamaggi} alt="golmataol" className="mb-3"></img>
    </div>

    <div className="item-count flex justify-center mt-6 mb-7 items-center w-full">
        <button type="button" onClick={()=>{
        setCount(prevState=>prevState>0?prevState-1:prevState);
    }} className=" w-6 h-6  text-center  rounded-full bg-lightRed border-1  border-none text-mainTheme">-</button>
        <p className="itemcount mx-4 text-black">{count}</p>
        <button type="button" onClick={()=>setCount(count+1)} className=" w-6 h-6  text-center  rounded-full bg-vendortimepricing  border-mainTheme text-white">+</button>
    </div>

    <div className="item-price text-center mt-4 font-custom text-small-27 mb-5">
    ₹60
    </div>
    <div className="item-props w-cardwidth h-10 mx-auto flex align-center justify-around">
        <div className="flex justify-center items-center ml-6">
            <img src={ratingstar} alt=""></img>
            <p className="mt-1 ml-2 font-custom font-medium">4.8</p>
        </div>
        <div className="flex justify-center items-center ml-7 ">
        <img src={calories} alt=""></img>
            <p className="ml-2 mt-1 font-custom font-medium">267</p>
        </div>
        <div className="flex justify-center items-center ml-2">
        <img src={timetaken} alt=""></img>
            <p className="ml-2 mt-1 font-custom font-medium">5-10 min</p>
        </div>
    </div>
    <div className="item-description">
    <p className="font-custom text-gray-600 text-left w-cardwidth mx-auto mt-12">&nbsp; Cooking Instructions...</p>
    <textarea className="border-1 w-cardwidth h-36 pl-3 pr-2 pt-2 rounded-xl mt-4 text-gray-600 border-gray-500 focus:outline-none resize-none" />
    </div>

    </div>
    <Footer/>
    </div>
    
)
}

export default Filters