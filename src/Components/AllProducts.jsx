import database from "../store/database.js";
import Product from "./Product.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import { LuArrowDownAZ } from "react-icons/lu";


const AllProducts = ({ collection }) => {
    const navigate = useNavigate();

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect (() => {
      if(collection == "en-yeniler"){
        setFilteredItems([...database.filter((value) => value.isNew == true)]);
      } 
      else if(collection == "cok-satanlar"){
        setFilteredItems([...database.filter((value) => value.isBestSeller == true)]);
      } 
      else if(collection == "outlet"){
        setFilteredItems([...database.filter((value) => value.discountRate >= 10)])
      }
      else if(collection == "reborn-bags"){
        setFilteredItems([...database.filter((value) => value.collection === "Reborn" && (value.category === "Çanta" || value.category === "Cüzdan"))])
      }
      else if(collection == "reborn-shoes"){
        setFilteredItems([...database.filter((value) => value.collection === "Reborn" && (value.category === "Topuklu Ayakkabı" ||
          value.category === "Çizme" ||
          value.category === "Bot"))])
      }
      else if(collection == "prada"){
        setFilteredItems([...database.filter((value) => value.brand === "Prada")])
      }
      else if(collection == "off-white"){
        setFilteredItems([...database.filter((value) => value.brand === "Off White")])
      }
      else if(collection == "valentino-garavani"){
        setFilteredItems([...database.filter((value) => value.brand === "Valentino Garavani")])
      }
      else if(collection == "miu-miu"){
        setFilteredItems([...database.filter((value) => value.brand === "Miu Miu")])
      }
      else if(collection == "bottega-veneta"){
        setFilteredItems([...database.filter((value) => value.brand === "Bottega Veneta")])
      }
      else if(collection == "Elbise"){
        setFilteredItems([...database.filter((value) => value.category === "Elbise")])
      }
      else if(collection == "Pantolon"){
        setFilteredItems([...database.filter((value) => value.category === "Pantolon")])
      }
      else if(collection == "Ceket"){
        setFilteredItems([...database.filter((value) => value.category === "Ceket")])
      }
      else if(collection == "Çanta"){
        setFilteredItems([...database.filter((value) => value.category === "Çanta")])
      }
      else if(collection == "Gömlek"){
        setFilteredItems([...database.filter((value) => value.category === "Gömlek")])
      }
      else if(collection == "Bluz"){
        setFilteredItems([...database.filter((value) => value.category === "Bluz")])
      }
      else if(collection == "Body"){
        setFilteredItems([...database.filter((value) => value.category === "Body")])
      }
      else if(collection == "Cüzdan"){
        setFilteredItems([...database.filter((value) => value.category === "Cüzdan")])
      }
      else if(collection == "Kolye"){
        setFilteredItems([...database.filter((value) => value.category === "Kolye")])
      }
      else if(collection == "Küpe"){
        setFilteredItems([...database.filter((value) => value.category === "Küpe")])
      }
      else if(collection == "Kemer"){
        setFilteredItems([...database.filter((value) => value.category === "Kemer")])
      }
      else if(collection == "Topuklu Ayakkabı"){
        setFilteredItems([...database.filter((value) => value.category === "Topuklu Ayakkabı")])
      }
      else if(collection == "Çizme"){
        setFilteredItems([...database.filter((value) => value.category === "Çizme")])
      }
      else if(collection == "Bot"){
        setFilteredItems([...database.filter((value) => value.category === "Bot")])
      }
      else if(collection == "Gözlük"){
        setFilteredItems([...database.filter((value) => value.category === "Gözlük")])
      }
      else {
        setFilteredItems([...database.filter((value) => value.collection === collection)])
      }
    }, [collection])

  return (
    <>
    <div className="flex items-center justify-between border-b border-zinc-300 pb-2 mb-8 px-6 mt-10">

      <div className="flex">
      <button className="flex items-center justify-between py-3 px-4 bg-black text-white w-40 cursor-pointer font-semibold">
          <div><LuArrowDownWideNarrow className="text-lg"/></div>
          <div className="text-sm">FİLTRELER</div>
          <div><IoIosArrowDown className="text-lg"/></div>
        </button>
      </div>


      <div className="flex flex-col">
        <div className="flex items-center justify-center font-semibold tracking-wide">
          {filteredItems.length > 0 && (
            <>
              <span className="text-xl">{filteredItems[0]?.category || collection}</span>
              <span className="ml-1 text-sm">({filteredItems.length} Ürün)</span>
            </>
          )}
        </div>
        
        <div className="flex">
          <div className="flex items-center justify-center mt-1 text-black gap-x-1 tracking-wide">
            <div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate("/")}>Ana Sayfa</div>
            <div>/</div>
            <div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate(`/${collection}`)}>{collection}</div>
            <div>/</div>
            {filteredItems.length > 0 && (
              <div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate(`/${filteredItems[0]?.category || collection}`)}>
                {filteredItems[0]?.category || collection}
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="flex">
        <button className="flex items-center justify-between py-3 px-4 bg-black text-white w-40 cursor-pointer font-semibold">
          <div><LuArrowDownAZ className="text-lg"/></div>
          <div className="text-sm">SIRALA</div>
          <div><IoIosArrowDown className="text-lg"/></div>
        </button>
      </div>

    </div>
      <div className="container mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-20">
          {filteredItems.map((value) => {
            return <Product key={value.id} value={value} />
          })}
        </div>
      </div>
    </>
  )
}

export default AllProducts;
