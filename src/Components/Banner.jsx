import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import rebornBanner from "../assets/BANNERS/Heros/reborn-banner.jpg";
import rebornBags from "../assets/BANNERS/Heros/reborn-bags.jpg";
import rebornShoes from "../assets/BANNERS/Heros/reborn-shoes.jpg";

import outletHero from "../assets/BANNERS/Home-Heros/outlet-hero.jpg";
import discountHero from "../assets/BANNERS/Home-Heros/discount-hero.jpg";
import pradaHero from "../assets/BANNERS/Home-Heros/prada-hero.jpg";
import rebornHero from "../assets/BANNERS/Home-Heros/reborn-hero.jpg";


import offWhite from "../assets/BANNERS/Categories/off-white.jpg";
import miuMiu from "../assets/BANNERS/Categories/miu-miu.jpg";
import bottegaVeneta from "../assets/BANNERS/Categories/bottega-veneta.jpg";
import valentinoGaravani from "../assets/BANNERS/Categories/valentino-garavani.jpg";

const Banner = ({ concept }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const isHeros = concept === "heros" ? true : false;
    const isReborn = (concept === "Reborn" || concept === "reborn-shoes" || concept === "reborn-bags");
    const isGeneralWear = concept === "Giyim" ? true : false;

    const homeHeros = [
          { image: outletHero, slug: "/cok-satanlar" },
          { image: discountHero, slug: "/outlet" },
          { image: pradaHero, slug: "/prada" },
          { image: rebornHero, slug: "/reborn" },
        ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeHeros.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [homeHeros.length]);
   
  return (
    <>
        {isReborn ? 
        <>
          <div className="flex flex-col mb-10">
            <div className="flex flex-row">
                <div onClick={(() => navigate("/reborn"))} className="cursor-pointer w-full mb-2"><img src={rebornBanner} alt="Reborn" /></div>
            </div>
            <div className="flex flex-row">
                <div onClick={(() => navigate("/reborn-bags"))} className="cursor-pointer mt-2 mr-2"><img src={rebornBags} alt="Reborn Bags" /></div>
                <div onClick={(() => navigate("/reborn-shoes"))} className="cursor-pointer mt-2 ml-2"><img src={rebornShoes} alt="Reborn Shoes" /></div>
            </div>
         </div>  
        </> 
        : null}
        

        {isHeros ? 
        <>
            <div className="relative w-full h-full overflow-hidden mb-10 cursor-pointer">
            <img
                src={homeHeros[currentIndex].image}
                alt={`Hero ${currentIndex}`}
                className="w-full h-full object-cover"
                onClick={() => navigate(homeHeros[currentIndex].slug)}/>
            </div>
        </> 
        : null}

        {isGeneralWear ?  
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                <div className="overflow-hidden group">
                <img
                    src={offWhite}
                    alt="Off White"
                    onClick={(() => navigate("/off-white"))}
                    className="w-full h-[500px] object-cover cursor-pointer"/>
                </div>

                <div className="overflow-hidden group">
                <img
                    src={valentinoGaravani}
                    alt="Valentino Garavani"
                    onClick={(() => navigate("/valentino-garavani"))}
                    className="w-full h-[500px] object-cover cursor-pointer"/>
                </div>

                <div className="overflow-hidden group">
                <img
                    src={miuMiu}
                    alt="Miu Miu"
                    onClick={(() => navigate("/miu-miu"))}
                    className="w-full h-[500px] object-cover cursor-pointer"/>
                </div>

                <div className="overflow-hidden group">
                <img
                    src={bottegaVeneta}
                    alt="Bottega Veneta"
                    onClick={(() => navigate("/bottega-veneta"))}
                    className="w-full h-[500px] object-cover cursor-pointer"/>
                </div>

            </div>
        </div>
        : null}
        
    </>
  )
}

export default Banner;
