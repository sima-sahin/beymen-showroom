import useCartStore from "../store/cartStore";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";


const Product = ({ value }) => {

  const { addToWishlist, removeFromWishlist, isExistInWishlist, addToCart } = useCartStore();

  const { name, brand, price, image, isNew, discountRate, slug } = value;

  const isInWishlist = isExistInWishlist(value.id);

  const isDiscount = discountRate >= 10 ? true : false;
  const discountedPrice = isDiscount ? (price / 100) * (100 - discountRate) : price;

  return (

    <div className="w-110 bg-white relative overflow-hidden">
        {isNew && (
        <div className="absolute bg-black text-white text-sm py-3 px-5 font-semibold z-20">
          YENİ
        </div>
      )}

      <div className="absolute top-3 right-3 cursor-pointer z-20">
        {isInWishlist ? (
          <IoIosHeart className="text-black text-3xl" onClick={() => removeFromWishlist(value.id)}/>
        ) : (
          <IoIosHeartEmpty className="text-3xl text-black" onClick={() => addToWishlist(value)}/>
        )}
      </div>
      <button className="btn btn-circle btn-outline absolute bottom-42 z-20 right-3">
        <HiOutlineShoppingBag className="text-xl" onClick={() => addToCart(value)}/>
      </button>

      <NavLink to={`/${slug}`}>
      {/* Ürün Görseli */}
      <div className="relative group z-10">
      <img
          src={image[0]}
          alt={name}
          className="w-full object-cover h-full"
        />
       <img
          src={image[1]}
          alt={name}
          className="absolute top-0 left-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none h-full"
        />
     </div>
     </NavLink>
      {/* Kart Gövdesi */}
      <div className="card-body pt-2">
        <div className="card-title mt-2 text-lg tracking-wide">{brand}</div>
        <div className="text-sm text-zinc-500 mt-[-8px]">{name}</div>

        {/* Fiyat Bilgisi */}
        <div className="mt-3 flex justify-between items-end">
          {isDiscount 
          ? 
          <div className="flex flex-row gap-x-2">
            <div className="flex items-center ">
              <div className="flex items-center px-3 bg-black text-white h-10">-%{discountRate}</div>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 line-through mr-2">
                {price} TL
              </span>
              <span className="text-lg font-semibold">{discountedPrice} TL</span>
            </div>
           
          </div> 
          : 
          <div className="mt-4">
            <span className="text-lg font-semibold">{price} TL</span>
          </div>
          }

        </div>
      </div>
     
    </div>
  )
}

export default Product;
