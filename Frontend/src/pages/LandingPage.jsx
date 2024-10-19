import React from "react"
import profileIcon from '../images/person.png'
import cover from '../images/LandingPageCover.png'
import home from '../images/home.png'
import heart from '../images/like.png'
import list from '../images/list.png'
import shopping from '../images/shopping.png'
import CanteenCard from "../components/CanteenCard"
import Footer from "../components/Footer"
import CanteenCardData from '../components/ItemCard'
const LandingPage = () => {
  return (
    <div className="signup-container flex-col items-center justify-center w-mwidth border-x-2 bg-white">
        <div className='landing-page-header flex w-width  items-center mx-auto pt-3 mb-4  justify-around'>
            <div className="w-72 h-12 mt-8 flex flex-col justify-start">
            <h1 className="h-5 w-36 mb-1 font-custom font-bold text-small-17 tracking-widest-b text-left">Hello, Shreya</h1>
            <p className="h-2.5 w-44 font-custom text-xs text-left text-gray-600">What do you want to order today?</p>
            </div>
            <img src={profileIcon} className="h-8 w-8 mt-5 bg-red-100 rounded-full " alt="Profile-Icon"/>
        </div>

        {/* <input placeholder= 'Search "Cold Coffee"' className="focus:outline-none block pl-5 h-10 w-width  mb-6 mt-2 text-sm text-gray-900 placeholder-gray-500 border-none bg-lightRed rounded-full"></input> */}
        <input placeholder= 'Search "Cold Coffee"' className="focus:outline-none block pl-4 h-10 w-width  mb-8 mt-2 mx-auto text-sm text-gray-900 placeholder-gray-600  bg-searchbar rounded-full focus:border-red-200"></input>
        <img src={cover} alt="cover" className="h-72 w-width mx-auto mb-4"></img>

        <div className="flex items-center w-width mx-auto mb-2">
  <div className="flex-grow border-b-2 border-gray-300"></div>
  <div className="px-4 text-gray-600 font-custom tracking-widest-7 text-xs">ALL <br></br>CANTEENS</div>
  <div className="flex-grow border-b-2 border-gray-300"></div>
</div>

    <CanteenCard/>
    {/* <section className="items-list-data">
        {
            CanteenCardData.map((CanteenData)=>{
                return  <CanteenCard {...CanteenData} key={CanteenData.id}/>
            })
        }
        </section> */}
    <Footer/>
    
    </div>
   
  )
}
export default LandingPage