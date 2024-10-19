import { Link } from 'react-router-dom'
import home from '../images/home.png'
import heart from '../images/like.png'
import list from '../images/order1.png'
import shopping from '../images/shopping.png'

const Footer = () => {
  return (
    <div className="landing-page-footer bg-white flex justify-around items-center bottom-0 w-footer-width  border-t-2 h-12">

    <Link to='/landingpage' className="w-6 h-6 mx-auto">
        <img src={home} alt="home" className=""/>
    </Link>
    <Link to='' className="w-6 h-6 mx-auto">
        <img src={list} alt="list" className=""/>
    </Link>
    <Link to='' className="w-6 h-6 mx-auto">
        <img src={heart} alt="favs" className=""/>
    </Link>
    <Link to='' className="w-6 h-6 mx-auto">
        <img src={shopping} alt="cart" className=""/>
    </Link>
    </div>
  )
}
export default Footer