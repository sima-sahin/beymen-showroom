

const PaymentDetails = () => {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      {/* Özel Kuponlar */}
      <button className="w-full flex justify-between items-center border border-black p-3 rounded-md">
        <span className="flex items-center space-x-2">
          🎟️ <span>Size Özel Kuponları Görüntüleyin</span>
        </span>
        <span>➜</span>
      </button>

      {/* İade Yükleme Kartı */}
      <button disabled className="w-full flex justify-start items-center bg-gray-100 text-gray-400 cursor-not-allowed p-3 rounded-md">
        💳 <span className="ml-2">İade Yükleme Kartını Kullan</span>
      </button>

      {/* Gift Card Kullan */}
      <button disabled className="w-full flex justify-start items-center bg-gray-100 text-gray-400 cursor-not-allowed p-3 rounded-md">
        🎁 <span className="ml-2">Treasure / Gift Card’ını Kullan</span>
      </button>

      {/* Bilgilendirme Metni */}
      <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-md">
        <p className="text-gray-600 text-sm flex items-start">
          ℹ️ <span className="ml-2">
            Yasa gereği; işbirliği yaptığımız iş ortaklarımız tarafından satışı yapılan ürünlerde,
            İade Yükleme Kartı ve Treasure Card/Hediye Kartı kullanılamamaktadır. Anlayışınız için teşekkür ederiz.
          </span>
        </p>
      </div>

      {/* Kolay İade */}
      <div className="p-4 flex items-center bg-black text-white rounded-lg">
        📦 <span className="ml-2">Kolay İade - Aldığınız ürünleri kolayca iade edebilirsiniz.</span>
      </div>
    </div>
  )
}

export default PaymentDetails
