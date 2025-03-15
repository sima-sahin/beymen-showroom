import useCartStore from "../store/cartStore";
import { IoIosHeart } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useWishlistCount } from "../store/cartStore";

const FavouritesPage = () => {
  const { addToCart, removeFromWishlist, wishlist, clearWishlist } = useCartStore();

  const wishlistCount = useWishlistCount();

  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);
  };

  const handleAddToCart = (product) => {
    const sizeToAdd =
      selectedSize || (product.size.length > 0 ? product.size[0] : "Standart Beden");
  
    if (!sizeToAdd) {
      alert("Lütfen bir beden seçin!");
      return;
    }
  
    addToCart({ ...product, selectedSize: sizeToAdd });
  };
  

  const latestWishlistItems = [...wishlist].reverse();


  return (
   <>
    {wishlist.length === 0 ?
    <>
    <div className="mx-auto mt-25 mb-8 text-center text-xl">FAVORİLERİN BOŞ</div>
    <div className="mx-auto mb-30 text-center">
      <button className="bg-black text-white py-3 px-6 cursor-pointer" onClick={() => navigate("/")}>ALIŞVERİŞE BAŞLA</button>
    </div>
    </>
  :
  <div className="container mx-auto">
    <div className="flex items-center justify-between mt-4 pb-2 border-b border-zinc-300 mb-10">
      <h2 className="tracking-wider">FAVORİLERİM ({wishlistCount} Ürün)</h2>
      <button onClick={() => clearWishlist()} className="bg-black text-white px-5 py-2 cursor-pointer">Temizle</button>
    </div>

     <div className="container mr-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
          {latestWishlistItems.map((value) => {
            const isDiscount = value.discountRate >= 10 ? true : false;
            const discountedPrice = isDiscount ? ((value.price / 100) * (100 - value.discountRate)) : value.price;
              return (
                  <div className="w-105 bg-white relative overflow-hidden" key={value.id}>
                          {value.isNew && (
                          <div className="absolute bg-black text-white text-sm py-3 px-5 font-semibold z-20">
                            YENİ
                          </div>
                        )}
                      
                        <div className="absolute top-3 right-3 cursor-pointer z-20">
                          <IoIosHeart className="text-black text-3xl" onClick={() => removeFromWishlist(value.id)}/>
                        </div>
                      
                  
                        <NavLink to={`/${value.slug}`}>
                        {/* Ürün Görseli */}
                        <div className="relative group z-10">
                        <img
                            src={value.image[0]}
                            alt={value.name}
                            className="w-full object-cover h-full"
                          />
                        <img
                            src={value.image[1]}
                            alt={value.name}
                            className="absolute top-0 left-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none h-full"
                          />
                      </div>
                      </NavLink>
                        {/* Kart Gövdesi */}
                        <div className="card-body pt-2">
                          <div className="card-title mt-2 text-lg tracking-wide">{value.brand}</div>
                          <div className="text-sm text-zinc-500 mt-[-8px]">{value.name}</div>
                  
                          {/* Fiyat Bilgisi */}
                          <div className="mt-3 flex justify-between items-end">
                            {isDiscount 
                            ? 
                            <div className="flex flex-row gap-x-2">
                              <div className="flex items-center ">
                                <div className="flex items-center px-3 bg-black text-white h-10">-%{value.discountRate}</div>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-zinc-500 line-through mr-2">
                                  {value.price.toLocaleString()} TL
                                </span>
                                <span className="text-lg font-semibold">{discountedPrice.toLocaleString()} TL</span>
                              </div>
                            
                            </div> 
                            : 
                            <div className="my-6">
                              <span className="text-lg font-semibold">{value.price.toLocaleString()} TL</span>
                            </div>
                            }
                          </div>

                          <div className="gap-y-1 mt-4 px-2">
                            <div>
                            {/* {value.size && value.size.length > 0 && ( */}
                              <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">
                                  Beden Seç:
                                </label>
                                <div className="relative inline-block w-full">
                                  <select
                                    className="w-full border px-3 py-2 text-sm appearance-none focus:outline-none"
                                    value={selectedSize || (value.size.length === 0 ? "Standart Beden" : value.size[0])}
                                    onChange={(e) => handleSizeChange(e.target.value)}>
                                      
                                    {value.size.length > 0 ? value.size.map((s) => (
                                      <option key={s} value={s}>
                                        {s}
                                      </option>
                                    )) : 
                                      <option>Standart Beden</option>
                                    }
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                                    ▼
                                  </div>
                                </div>
                              </div>
                            {/* )} */}
                            </div>
                            
                            <button className="bg-black w-full text-white py-3 font-semibold cursor-pointer" onClick={() => handleAddToCart(value)}>SEPETE EKLE</button>
                          </div>

                        </div>
                      
                      </div>
              )
          })}
        </div>
     </div>
    </div>
  }
  </>
  )
}

export default FavouritesPage;
