import Footer from "../components/Footer"
import veg from '../images/vegicon.png'
import nonveg from '../images/nonveg.png'
import egg from '../images/egg.png'
import backbutton from '../images/backbutton.png'
import { Link } from "react-router-dom"

const Filters = () => {
return (
<div className='signup-container flex flex-col items-center mx-auto w-footer-width bg-lightRed'>
    <div className="flex-col rounded-xl items-center justify-center w-phonewidth h-phoneheight mb-2 mt-2  bg-white ">

    <div className="filter-header flex w-80 ">
    <Link to='/vendor' className="w-12 ">
        <img src={backbutton} alt="back" className="text-left ml-5 mt-10 rounded-2xl"></img>
    </Link>
    
    <h1 className="font-display text-small-21 font-semibold h-7 w-56 my-12 mb-3 mx-auto">Filters and Sorting</h1>
        </div>

    <div className=" w-80 h-12 flex justify-start items-center bg-white mx-auto mb-10"> 
        <h2 className="font-display font-semibold mt-16 mb-6">Filters</h2>
    </div>

    <div className="filter-options w-24 mt-0 mb-0 flex flex-col bg-white ml-7 ">

        
        <button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-between border-1 border-gray-400 rounded-2xl">
        <img src={veg} className=" h-5.5 w-5.5 ml-4"></img>
        <p className="mr-4 font-display text-xs">Veg Only</p>
        </button>

        <button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-between border-1 border-gray-400 rounded-2xl">
        <img src={nonveg} className="h-5 w-5 ml-4.5 "></img>
        <p className="mr-4 font-display text-xs">Non Veg</p>
        </button>

        <button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-between border-1 border-gray-400 rounded-2xl">
        <img src={egg} className="h-5 w-5 ml-4.5"></img>
        <p className="mr-9.5 font-display text-xs">Egg</p>
        </button>

    </div>

    <div className=" w-80 h-12 flex justify-start items-center bg-white mx-auto mb-10"> 
        <h2 className="font-display font-semibold mt-16 mb-6">Sort by</h2>
    </div>

<div className="filter-options w-24 mt-0 mb-16 flex flex-col  bg-white ml-7 ">

        
<button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-center border-1 border-gray-400 rounded-2xl">
<p className=" font-display text-small-10 text-gray-800">Price - High to Low</p>
</button>

<button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-center border-1 border-gray-400 rounded-2xl">
<p className=" font-display text-small-10 text-gray-800">Price - Low to High</p>
</button>

<button className="filter-button ml-8 mb-4 w-28 h-8 flex items-center justify-center border-1 border-gray-400 rounded-2xl">
<p className=" font-display text-small-10 text-gray-800">Ratings - High to Low</p>
</button>

</div>
    
    </div>
    <Footer/>
    </div>
    
)
}
export default Filters