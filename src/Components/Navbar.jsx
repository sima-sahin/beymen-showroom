import { Link, useNavigate } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import BeymenLogo from "../assets/BANNERS/beymen-logo-dot-blue.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import CategoriesNav from "./CategoriesNav";
import { useCartCount, useWishlistCount } from "../store/cartStore";
import useAuthStore from "../store/userStore";


const Navbar = () => {

    const { currentUser } = useAuthStore();
    const navigate = useNavigate();
    const cartCount = useCartCount();
    const wishlistCount = useWishlistCount();


  return (
    <header className="border-b border-zinc-200">

        <div className="w-full py-2 bg-white border-b border-zinc-200 px-4">
            <nav className="flex space-x-7 text-xs justify-end mr-4">
                <Link to="/" className="custom-link-top">Repair</Link>
                <Link to="/" className="custom-link-top">Sipariş Takibi</Link>
                <Link to="/" className="custom-link-top">Kampanyalar</Link>
                <Link to="/" className="custom-link-top">The One</Link>
                <Link to="/" className="custom-link-top">Servisler</Link>
                <Link to="/" className="custom-link-top flex items-center"><CiGlobe /> TR</Link>
            </nav>
        </div>

        <div className="navbar bg-white border-b border-zinc-200 px-4 text-black py-4">
            <div className="navbar-start ml-6 cursor-pointer">
            <img src={BeymenLogo} alt="Beymen" onClick={()=>navigate("/")}/>
            </div>

            <div className="navbar-center hidden md:flex">
                <div className="form-control relative">
                <IoSearchSharp className="text-xl top-3 right-4 absolute text-zinc-600"/>
                <input
                    type="text"
                    placeholder="Ürün, Marka Arayın"
                    className="border border-zinc-400 p-3 outline-none w- md:w-96 text-sm"
                />
                </div>
            </div>

            <div className="navbar-end space-x-10 text-sm mr-3">
                <Link to={currentUser ? "/hesabim" : "/giris-yap"}>
                    <div className="flex flex-col items-center">
                    <RxPerson className="text-2xl mb-1" />
                    <span className="text-xs text-zinc-600">Hesabım</span>
                    </div>
                </Link>
                <Link to="/favoriler">
                    <div className="relative flex flex-col items-center">
                        <IoIosHeartEmpty className="text-2xl mb-1" />
                        <span className="text-xs text-zinc-600">Favorilerim</span>
                        {wishlistCount > 0 && (
                            <div className="absolute -top-1 right-2 bg-black text-white text-xs rounded-full px-1">
                            {wishlistCount}
                            </div>
                        )}
                    </div>
                </Link>
                <Link to="/sepet">
                    <div className="relative flex flex-col items-center">
                        <HiOutlineShoppingBag className="text-2xl mb-1" />
                        <span className="text-xs text-zinc-600">Sepetim</span>
                        {cartCount > 0 && (
                            <div className="absolute -top-1 right-1 bg-black text-white text-xs rounded-full px-1">
                            {cartCount}
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>

        <div className="bg-white">
            <CategoriesNav />
        </div>
    </header>
  )
}

export default Navbar;
