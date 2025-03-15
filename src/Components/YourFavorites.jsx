import useCartStore from "../store/cartStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const YourFavorites = () => {
    const { wishlist, moveToCart, removeFromWishlist } = useCartStore();

    const latestWishlistItems = [...wishlist].reverse().slice(0, 5);

    const navigate = useNavigate();

     const [selectedSize, setSelectedSize] = useState("");
    
      const handleSizeChange = (newSize) => {
        setSelectedSize(newSize);
      };
    
      const handleAddToCart = (product) => {
        moveToCart(product, selectedSize);
      };

  return (

    <div className="mt-14 w-full">
    <h2 className="mb-6 ml-2 border-b-3 border-black w-40 flex justify-center pb-4 cursor-pointer tracking-wider" onClick={() => navigate("/favoriler")}>FAVORİ LİSTENİZ</h2>
    {latestWishlistItems.map((item) => {
        const isDiscount = item.discountRate >= 10 ? true : false;
        const discountedPrice = isDiscount ? ((item.price / 100) * (100 - item.discountRate)) : item.price;

        return (

            <div className="border border-zinc-200 flex flex-row relative px-2 py-2 h-50" key={item.id}>
                <div className="flex">
                    <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-full h-35 object-cover cursor-pointer my-auto"
                        onClick={() => navigate(`/${item.slug}`)}
                    />
                </div>

                <div className="flex flex-col my-auto ml-4">
                    <p className="text-sm font-semibold tracking-wide">{item.brand.toUpperCase()}</p>
                    <p className="text-xs text-zinc-600 mt-1">{item.name}</p>
                    
                    <div className="flex my-4">
                        <p className="text-sm mr-4 font-semibold">Renk: </p>
                        <p className="text-sm text-zinc-600">{item.color}</p>
                    </div>

                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-semibold mb-1 mr-2">
                        Beden:
                        </label>
                        <div className="relative inline-block w-34">
                        <select
                            className="w-full border px-1 py-1 text-sm text-zinc-600 appearance-none focus:outline-none"
                            value={item.size.length == 0 ? "Standart Beden" : selectedSize || item.size[0]  }
                            onChange={(e) => handleSizeChange(e.target.value)}>
                            {item.size.length > 0 ? item.size.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                            )) : 
                            <option>Standart Beden</option>
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                            ▼
                        </div>
                        </div>
                    </div>
                
                </div>

                <div className="absolute top-4 right-4 gap-y-4 text-right">
                    <p className="text-red-600 underline text-sm cursor-pointer hover:text-red-500" onClick={() => removeFromWishlist(item.id)}>Sil</p>

                    <div className="mt-10 flex justify-between items-end">
                        {isDiscount 
                        ? 
                        <div className="flex flex-row gap-x-2">
                        <div className="flex items-center ">
                            <div className="flex items-center px-1 bg-red-600 text-white h-8">-%{item.discountRate}</div>
                        </div>

                        <div className="flex flex-col text-left">
                            <span className="text-zinc-500 line-through text-sm">
                            {item.price.toLocaleString()} TL
                            </span>
                            <span className=" font-semibold">{discountedPrice.toLocaleString()} TL</span>
                        </div>
                        
                        </div> 
                        : 
                        <div className="">
                        <span className="font-semibold">{item.price.toLocaleString()} TL</span>
                        </div>
                        }
                    </div>
                </div>

                <div className="absolute top-38 right-4 gap-y-4 text-right">
                    <button className="border-b-2 pb-1 text-sm hover:text-red-500 cursor-pointer" onClick={() => handleAddToCart(item)}>SEPETE EKLE</button>
                </div>

            </div>
        )
    })}

    </div>
  )
}

export default YourFavorites;
