  import veg from '../images/vegicon.jpg'
  import like from '../images/heart1.png'
  import CM from '../images/CheeseMaggi.png'
  import star from '../images/star.png'
  import liked from '../images/liked.png'
  import { useRef, useState } from 'react'
  import itemlist from '../data/ItemData'
import { Link } from 'react-router-dom'

  const ItemCard = (item) => {

    const [showFirstImage, setShowFirstImage] = useState(true);
    const toggleImage = (event) => {
    setShowFirstImage(prevState => !prevState);
    event.stopPropagation();
  };  

  const {Name,Price,stars,ratings,img} = item;
      return (
        <Link to='/itempopup' className='relative h-28 w-flexwidth mx-auto flex rounded-2xl bg-itemcustombg mb-4 z-30'>
<div className="h-28 w-flexwidth mx-auto flex rounded-2xl bg-itemcustombg mb-4  ">
          <div className="flex flex-col ml-5 items-center justify-around ">
            <img src={veg} alt="veg"></img>
            <button onClick={toggleImage} className=' z-40 '>
        {showFirstImage ? (
          <img src={like} alt="First Image" />
        ) : (
          <img src={liked} alt="Second Image" />
        )}
      </button>
          </div>
          <div className="flex flex-col justify-around font-display my-auto ml-2 text-left">
            <h2 className=' font-semibold '>{Name}</h2>
            <p className='mb-1 mt-1.5 w-32 font-semibold text-xs'>{Price}</p>
            
            <div className='ratings-in-card flex items-center mt-2.5 '>
            <div className="card-rating  w-8 bg-green-800 rounded-md text-small-9 h-4 justify-around items-center flex font-custom font-bold text-white ">
        <p className='ml-0.5'>{stars}</p>
        <img className="ratings-star-icon h-2 w-2 mr-0.5" src={star} alt="rating"></img>
        </div>
        <p className="text-small-9 w-11 ml-1 text-center  truncate border-dotted border-b-1 border-black border-spacing-3">{ratings}</p>
            </div>
            
            
          </div>
          <div className="flex flex-col flex-grow relative items-center justify-center ">
            <img src={img} className='w-20 h-20 ml-10 mb-3'></img>
            <button className='add-button bottom-0 ml-10 mb-2 w-11 h-6 absolute rounded-lg text-small-11 text-mainTheme font-bold font-custom bg-addbuttonbg border border-mainTheme'
            
            >ADD+</button>
          </div>
      </div>
        </Link>
      
    )
    
  }
  export default ItemCard