import BeymenLogo from "../assets/BANNERS/beymen-logo-dot-white.png"
import { FiTruck, FiShoppingBag, FiRotateCw } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="flex flex-row items-center">
                <div className="flex flex-col text-center bg-black p-7 rounded-full"><FiTruck className="text-2xl text-white" /></div>
                <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold">ÜCRETSİZ KARGO</h3>
                <p className="text-sm mt-2">
                    1500 TL ve üzeri alışverişlerinizde kargo ücretsiz! <br />
                    The One üyelerine ait limitsiz ücretsiz kargo ayrıcalığı.
                </p>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="flex flex-col text-center bg-black p-7 rounded-full"><FiShoppingBag className="text-2xl text-white" /></div>
                <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold">MAĞAZADAN TESLİM</h3>
                <p className="text-sm mt-2">
                    Online olarak satın aldığınız ürünleri mağazalarımızdan teslim alabilirsiniz.
                </p>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="flex flex-col text-center bg-black p-7 rounded-full"><FiRotateCw className="text-2xl text-white" /></div>
                <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold">KOLAY İADE</h3>
                <p className="text-sm mt-2">
                    Beymen.com'dan satın aldığınız ürünleri kolayca iade edebilirsiniz.
                </p>
                </div>
            </div>

        </div>
        </div>

        <footer className="bg-neutral text-neutral-content mt-8">
            <div className="container mx-auto pt-16 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                <h2 className="font-bold mb-3">BEYMEN HAKKINDA</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="custom-link">Markalar</a></li>
                    <li><a href="#" className="custom-link">Koşulsuz Müşteri Mutluluğu</a></li>
                    <li><a href="#" className="custom-link">The One Card</a></li>
                    <li><a href="#" className="custom-link">Kurumsal Satış</a></li>
                    <li><a href="#" className="custom-link">İletişim</a></li>
                    <li><a href="#" className="custom-link">About Beymen</a></li>
                </ul>
                </div>

                <div>
                <h2 className="font-bold mb-3">MÜŞTERİ HIZMETLERİ</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="custom-link">Bize Sorun</a></li>
                    <li><a href="#" className="custom-link">Sıkça Sorulan Sorular</a></li>
                    <li><a href="#" className="custom-link">İşlem Rehberi</a></li>
                    <li><a href="#" className="custom-link">Mağazadan Teslim</a></li>
                    <li><a href="#" className="custom-link">Üyelik Sözleşmesi</a></li>
                    <li><a href="#" className="custom-link">İade Şartları</a></li>
                </ul>
                </div>

                <div>
                <h2 className="font-bold mb-3">HESABIM</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="custom-link">Siparişlerim</a></li>
                    <li><a href="#" className="custom-link">Favorilerim</a></li>
                    <li><a href="#" className="custom-link">Mağazalar</a></li>
                    <li><a href="#" className="custom-link">Beymen Blog</a></li>
                    <li><a href="#" className="custom-link">Beymen Magazine</a></li>
                </ul>
                </div>

                <div>
                <h2 className="font-bold mb-3">ÖZEL SAYFALAR</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="custom-link">Anneler Günü</a></li>
                    <li><a href="#" className="custom-link">Babalar Günü</a></li>
                    <li><a href="#" className="custom-link">Yeni Yıl</a></li>
                    <li><a href="#" className="custom-link">Düğün Elbiseleri</a></li>
                </ul>
                </div>

                <div>
                <img src={BeymenLogo} alt="Beymen" className="mb-4 cursor-pointer"/>
                <p className="mb-2 text-sm">BİZİ TAKIP EDİN</p>
                <div className="flex space-x-3 mb-6">
                    <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-200">
                    <FaFacebookF className="text-black"/>
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-200">
                    <FaTwitter className="text-black"/>
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-200">
                    <FaInstagram className="text-black"/>
                    </a>
                </div>
                <p className="mb-1 text-sm">UYGULAMALARIMIZI İNDİRİN</p>
                <div className="flex space-x-2 mb-4">
                    <FaAppStore className="cursor-pointer hover:border border-white px-10 py-4 text-white text-3xl"/>
                    <IoLogoGooglePlaystore className="cursor-pointer hover:border border-white px-10 py-4 text-white text-3xl"/>
                </div>
                <img
                    src="https://via.placeholder.com/80x80?text=QR"
                    alt="QR Kodu"
                    className="mb-4"
                />
                <a href="#" className="link link-hover text-sm underline custom-link">
                    Çerez Politikası
                </a>
                </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
                <p className="text-sm">
                © 2025 Beymen, Tüm Hakları Saklıdır
                </p>
                <a href="#" className="text-sm mt-2 md:mt-0 link link-hover underline custom-link">
                Canlı Destek
                </a>
            </div>
        </div>
    </footer>
</>
  )
}

export default Footer;
