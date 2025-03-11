import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";

const ProductDetailExtra = ({ selectedItem }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-4">

    {selectedItem.category === "Topuklu Ayakkabı" ? 
       <div className="flex justify-center my-6 text-zinc-400 items-center" onClick={() => navigate("/topuklu-ayakkabı")}>
       <PiSquaresFour className="text-2xl cursor-pointer mr-1"/>
       <a href="" className="link link-hover text-sm underline inline-block">
        {selectedItem.category}
       </a>
     </div> :
      <div className="flex justify-center my-6 text-zinc-400 items-center" onClick={() => navigate(`/${selectedItem.category}`)}>
      <PiSquaresFour className="text-2xl cursor-pointer mr-1"/>
      <a href="" className="link link-hover text-sm underline inline-block custom-link-top">
       {selectedItem.category}
      </a>
    </div>
    }

    <div className="border border-zinc-300 w-full h-14 flex items-center justify-center my-8">
      <LiaShippingFastSolid className="text-2xl"/>
      <p className="ml-3">Tahmini Kargoya Teslim: <span className="font-bold">13 Mart - 16 Mart</span></p>
    </div>


      {/* Akordiyon yapısı */}
      {/* 1) Ürün Özellikleri */}
      <div className="collapse collapse-arrow border border-zinc-300 rounded-none mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-base text-sm font-semibold pl-8">
          Ürün Özellikleri
        </div>
        <div className="collapse-content text-xs text-gray-700 leading-relaxed">
          <ul className="list-disc pl-4 mb-2">
            {selectedItem.description.map((value) => {
              return <li key={value.id}>{value}</li>
            })}
          </ul>
          <a href="#" className="text-primary underline">
            Devamını Göster
          </a>
        </div>
      </div>

      {/* 2) Hangi Mağazada Var? */}
      <div className="collapse collapse-arrow border border-zinc-300 rounded-none mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-base text-sm font-semibold pl-8">
          Hangi Mağazada Var?
        </div>
        <div className="collapse-content text-xs text-gray-700 leading-relaxed">
          <p>Mağaza ve stok bilgileri burada gösterilebilir.</p>
        </div>
      </div>

      {/* 3) Taksit Seçenekleri */}
      <div className="collapse collapse-arrow border border-zinc-300 rounded-none mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-base text-sm font-semibold pl-8">
          Taksit Seçenekleri
        </div>
        <div className="collapse-content text-xs text-gray-700 leading-relaxed">
          <p>Kredi kartı, taksit bilgileri, faiz oranları vb. burada yer alır.</p>
        </div>
      </div>

      {/* 4) Teslimat ve iade */}
      <div className="collapse collapse-arrow border border-zinc-300 rounded-none mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-base text-sm font-semibold pl-8">
          Teslimat ve İade
        </div>
        <div className="collapse-content text-xs text-gray-700 leading-relaxed">
          <p>Ürünün teslimat süresi, kargo bedeli, iade politikası vb.</p>
        </div>
      </div>

      {/* 5) The One Card */}
      <div className="collapse collapse-arrow border border-zinc-300 rounded-none mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-base text-sm font-semibold pl-8">
          The One Card
        </div>
        <div className="collapse-content text-xs text-gray-700 leading-relaxed">
          <p>The One Card avantajları, kampanyaları, vb.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailExtra;
