import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const OrdersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 p-8">
      {/* Sepet İkonu */}
      <div className="bg-black p-3">
        <HiOutlineShoppingBag className="text-white text-2xl" />
      </div>

      {/* Başlık */}
      <h2 className="text-lg font-semibold mt-4">HENÜZ SİPARİŞİNİZ BULUNMAMAKTADIR.</h2>
      
      {/* Açıklama */}
      <p className="text-gray-500 text-sm mt-2">
        Birbirinden seçkin binlerce ürünü hemen keşfedin.
      </p>

      {/* Alışverişe Devam Et Butonu */}
      <Link 
        to="/"
        className="mt-8 px-24 py-2 border border-black font-medium hover:bg-black hover:text-white transition-all"
      >
        ALIŞVERİŞE DEVAM ET
      </Link>
    </div>
  )
}

export default OrdersPage;
