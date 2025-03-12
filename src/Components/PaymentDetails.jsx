import { RiCoupon4Line } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";

const PaymentDetails = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Özel Kuponlar */}
      <button className="w-full flex justify-between items-center border border-black p-3">
        <span className="flex items-center space-x-2">
          <RiCoupon4Line className="text-3xl"/>
          <span>Size Özel Kuponları Görüntüleyin</span>
        </span>
        <IoIosArrowForward />
      </button>

      {/* İade Yükleme Kartı */}
      <button disabled className="w-full flex justify-start items-center bg-zinc-100 text-zinc-400 cursor-not-allowed p-3 ">
        <CiCreditCard1 className="text-3xl"/>
        <span className="ml-2">İade Yükleme Kartını Kullan</span>
      </button>

      {/* Gift Card Kullan */}
      <button disabled className="w-full flex justify-start items-center bg-zinc-100 text-zinc-400 cursor-not-allowed p-3 ">
        <MdCardGiftcard className="text-3xl"/>
        <span className="ml-2">Treasure / Gift Card’ını Kullan</span>
        <IoIosArrowForward />
      </button>

      {/* Bilgilendirme Metni */}
      <div className="p-4 bg-zinc-50 border-l-4 border-zinc-600 ">
        <p className="text-zinc-600 text-sm flex items-start">
          <div><IoMdInformationCircle className="text-xl"/></div>
          <span className="ml-2 flex">
            Yasa gereği; işbirliği yaptığımız iş ortaklarımız tarafından satışı yapılan ürünlerde,
            İade Yükleme Kartı ve Treasure Card/Hediye Kartı kullanılamamaktadır. Anlayışınız için teşekkür ederiz.
          </span>
          <IoIosArrowForward />
        </p>
      </div>

      {/* Kolay İade */}
      <div className="p-4 flex items-center bg-zinc-50">
        <div className="bg-black text-white p-4 rounded-full flex items-center justify-center">
          <LiaShippingFastSolid className="text-2xl"/>
        </div>
        <span className="ml-2 text-sm">Kolay İade Aldığınız ürünleri kolayca iade edebilirsiniz.</span>
      </div>
    </div>
  )
}

export default PaymentDetails
