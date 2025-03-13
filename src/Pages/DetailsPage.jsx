import { useParams } from "react-router-dom";
import database from "../store/database";
import useCartStore from "../store/cartStore";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import ProductDetailExtra from "../Components/ProductDetailExtra";
import Breadcrumbs from "../Components/Breadcrumbs";
import { useState } from "react";
import { AiOutlineTag } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";

const DetailsPage = () => {
  const { slug } = useParams();
  const selectedItem = database.find((value) => value.slug === slug);

  const { addToCart, addToWishlist, isExistInWishlist, removeFromWishlist } = useCartStore();

  const inWishlist = isExistInWishlist(selectedItem.id);

  const isDiscount = selectedItem.discountRate >= 10 ? true : false;
  const discountedPrice = isDiscount ? (selectedItem.price / 100) * (100 - selectedItem.discountRate) : selectedItem.price;

  const shoeSizes = ["36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"];
  const wearSizes = ["34", "36", "38", "40", "42", "44"];

  const isShoe = selectedItem.collection === "Ayakkabı" ? true : false;
  const isWear = selectedItem.collection === "Giyim" ? true : false;
  const isReborn = selectedItem.collection === "Reborn" ? true : false;

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);
  };

  const handleAddToCart = (product) => {
    const sizeToAdd = selectedSize || (product.size.length > 0 ? product.size[0] : null);
    if (!sizeToAdd && product.size.length > 0) {
      alert("Lütfen bir beden seçin!");
      return;
    }
    addToCart({ ...product, selectedSize: sizeToAdd });
  };

  if (!selectedItem) {
    return <div className="text-center text-red-500">Ürün bulunamadı.</div>;
  }
  


  return (

    <>
    <Breadcrumbs name={selectedItem.name} category={selectedItem.category} collection={selectedItem.collection} />

    <div className="container mx-auto py-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sol Taraf */}
        <div className="w-full md:w-2/3">
          {/* Eğer resim sayısı 2 ise */}
          {selectedItem.image.length === 2 && (
            <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedItem.image.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${selectedItem.name} ${index}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
            {/*  Additional */}
            <div className="grid grid-cols-3 gap-4 col-span-2">
            <img
              src={selectedItem.image[1]}
              alt={`${selectedItem.name} 3`}
              className="w-full h-auto object-cover"
            />
            <img
              src={selectedItem.image[1]}
              alt={`${selectedItem.name} 2`}
              className="w-full h-auto object-cover"
            />
            <img
              src={selectedItem.image[0]}
              alt={`${selectedItem.name} 1`}
              className="w-full h-auto object-cover"
            />
          </div>
          </>
          )}

          {/* Eğer resim sayısı 3 ise */}
          {selectedItem.image.length === 3 && (
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* İlk iki resim yan yana */}
              <img
                src={selectedItem.image[0]}
                alt={`${selectedItem.name} 1`}
                className="w-full h-auto object-cover"
              />
              <img
                src={selectedItem.image[1]}
                alt={`${selectedItem.name} 2`}
                className="w-full h-auto object-cover"
              />

              {/* Üçüncü resim altta tek satır (iki sütunu kaplar) */}
              <div className="grid grid-cols-3 gap-4 col-span-2">
                <img
                  src={selectedItem.image[2]}
                  alt={`${selectedItem.name} 3`}
                  className="w-full h-auto object-cover"
                />
                <img
                  src={selectedItem.image[1]}
                  alt={`${selectedItem.name} 2`}
                  className="w-full h-auto object-cover"
                />
                <img
                  src={selectedItem.image[0]}
                  alt={`${selectedItem.name} 1`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sağ Taraf*/}
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold mb-2 tracking-wide">{selectedItem.brand}</h1>
          <p className="text-lg text-gray-700 mb-4">{selectedItem.name}</p>

          {/* Fiyat */}
          {isDiscount 
          ? 
          <div className="my-6">
            <span className="text-gray-400 line-through mr-2">
              {selectedItem.price} TL
            </span>
            <span className="text-xl font-semibold">{discountedPrice} TL</span>
          </div> 
          : 
          <div className="my-6">
            <span className="text-xl font-semibold">{selectedItem.price} TL</span>
          </div>
          }

          <div className="mb-6">Renk: {selectedItem.color}</div>

          {/* Bedenler */}
          {selectedItem.size.length > 0 && isReborn ?
          <div className="my-8">
          <h3 className="text-md mb-2">Beden: {selectedSize}</h3>
            <button className="px-5 py-3 border text-sm transition-colors text-black border-zinc-400 cursor-pointer hover:bg-gray-100"  
            onClick={() => {handleSizeChange(selectedItem.size[0])}}>
              {selectedItem.size[0]}
            </button>
          </div>
          :
          null
          }

        {isShoe ?
          <div className="my-8">
          <h3 className="text-md mb-2">Beden: {selectedSize}</h3>
          <div className="flex flex-wrap gap-2">
            {shoeSizes.map((size, index) => {
              const isAvailable = selectedItem.size.includes(size);
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (isAvailable) {
                      handleSizeChange(size);
                    }
                  }}
                  disabled={!isAvailable}
                  className={`
                    px-5 py-3 border text-sm transition-colors
                    ${
                      isAvailable
                        ?
                          "text-black border-zinc-400 cursor-pointer hover:bg-gray-100"
                        :
                          "text-gray-400 border-gray-300 cursor-not-allowed"
                    }
                    ${
                      selectedSize === size
                        ?
                          "bg-black text-white"
                        : ""
                    }
                  `}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
           :
           null
          }

        {isWear ?
          <div className="my-8">
          <h3 className="text-md mb-2">Beden: {selectedSize}</h3>
          <div className="flex flex-wrap gap-3">
            {wearSizes.map((size, index) => {
              const isAvailable = selectedItem.size.includes(size);
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (isAvailable) {
                      handleSizeChange(size);
                    }
                  }}
                  disabled={!isAvailable}
                  className={`
                    px-5 py-3 border text-sm transition-colors
                    ${
                      isAvailable
                        ?
                          "text-black border-zinc-400 cursor-pointer hover:bg-gray-100"
                        :
                          "text-gray-400 border-gray-300 cursor-not-allowed"
                    }
                    ${
                      selectedSize === size
                        ?
                          "bg-black text-white"
                        : ""
                    }
                  `}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
           :
           null
          }
          

          {/* Butonlar */}
          <div className="flex items-center gap-x-2 mt-4">
          <button
            className="outline-2 bg-black text-white h-12 w-6/7 mb-2 flex items-center justify-center space-x-2 cursor-pointer"
            onClick={() => handleAddToCart(selectedItem)}
          >
            <HiOutlineShoppingBag className="text-xl" />
            <span className="font-semibold tracking-wide">SEPETE EKLE</span>
          </button>
          <button
            className="outline cursor-pointer h-12 w-1/7 mb-2 flex items-center justify-center space-x-2"
            onClick={() =>
              inWishlist
                ? removeFromWishlist(selectedItem.id)
                : addToWishlist(selectedItem)
            }>
            {inWishlist ? (
                <IoIosHeart className="text-2xl" />
            ) : (
                <IoIosHeartEmpty className="text-2xl" />
            )}
          </button>
          </div>
          

          {/* Ekstra detaylar & butonlar */}
          <ProductDetailExtra
            selectedItem={selectedItem}/>
        </div>
      </div>


      {/* DETAILS */}
     <div className="bg-white pt-4 mt-4">
     <div className=" flex justify-center text-xl tracking-wide font-semibold border-b border-zinc-300 pb-4 mb-6">ÜRÜN ÖZELLİKLERİ</div>

      <div className="mx-auto flex px-18 py-6 tracking-wide justify-between">

        <div className="text-left">
          <p className="font-semibold tracking-wide my-4">Ürün Özellikleri</p>
            {selectedItem.description.map((value, index) => {
          return (
            <p className="text-sm my-1" id={index}>{value}</p>
            )
            })}
          <p className="font-semibold tracking-wide mb-2 mt-8">Yıl - Sezon</p>
          <p className="text-sm my-1">{selectedItem.season}</p>
          <p className="font-semibold tracking-wide mb-2 mt-8">Kumaş ve Bakım</p>
          <p className="text-sm my-1">{selectedItem.fabricCare}</p>
          <p className="font-semibold tracking-wide mb-2 mt-8">Ürün kodu</p>
          <p className="text-sm my-1">{selectedItem.code}</p>
          <div className="flex items-center mb-4 mt-8">
            <div><IoGiftOutline className="text-xl mr-1"/></div>
            <p className="text-sm my-1">Hediye Paketi Yapılır</p>
          </div>
          <p className="text-sm">Bu üründen en fazla 5 adet sipariş verilebilir. 5 adetin üzerindeki siparişleri Beymen iptal etme hakkını saklı tutar.</p>
        </div>

        <div className="flex flex-col">
            <img src={selectedItem.image[0]} alt={selectedItem.name} className="w-100"/>
        </div>

      </div>
     </div>

    </div>
    </>
  )
}

export default DetailsPage;
