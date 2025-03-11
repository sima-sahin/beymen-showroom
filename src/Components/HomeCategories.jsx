import { useNavigate } from "react-router-dom";

import wear from "../assets/BANNERS/Home-Categories/wear-category.jpg";
import bags from "../assets/BANNERS/Home-Categories/bags-category.jpg";
import shoes from "../assets/BANNERS/Home-Categories/shoes-category.jpg";
import accessories from "../assets/BANNERS/Home-Categories/accessories-1.jpg";
import bestSellers from "../assets/BANNERS/Home-Categories/best-sellers-category.jpg";

const HomeCategories = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate("/giyim")}>
                    <img
                        src={wear}
                        alt="giyim"
                        className="w-full h-[600px] object-cover hover:opacity-90"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Kadın Giyim</h3>
                        <p className="text-sm underline">Keşfet</p>
                    </div>
                </div>
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate("/cok-satanlar")}>
                    <img
                        src={bestSellers}
                        alt="giyim"
                        className="w-full h-[600px] object-cover hover:opacity-90"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">En Çok Satanlar</h3>
                        <p className="text-sm underline">Keşfet</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate("/canta")}>
                    <img
                        src={bags}
                        alt="giyim"
                        className="w-full h-[500px] object-cover hover:opacity-90"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Çanta</h3>
                        <p className="text-sm underline">Keşfet</p>
                    </div>
                </div>
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate("/ayakkabi")}>
                    <img
                        src={shoes}
                        alt="giyim"
                        className="w-full h-[500px] object-cover hover:opacity-90"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Ayakkabı</h3>
                        <p className="text-sm underline">Keşfet</p>
                    </div>
                </div>
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate("/aksesuar")}>
                    <img
                        src={accessories}
                        alt="giyim"
                        className="w-full h-[500px] object-cover hover:opacity-90"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Aksesuar</h3>
                        <p className="text-sm underline">Keşfet</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCategories;

