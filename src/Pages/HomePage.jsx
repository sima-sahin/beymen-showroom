import AllProducts from "../Components/AllProducts";
import Banner from "../Components/Banner";
import HomeCategories from "../Components/HomeCategories";
import newArrivals from "../assets/BANNERS/Home-Heros/new-arrivals-hero.jpg";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner concept="heros"/>

      <div className="w-315 h-full my-30 mx-auto cursor-pointer" onClick={(() => navigate("/en-yeniler"))}>
        <img src={newArrivals} alt="New Arrivals" />
        <div className="text-center">
          <div className="text-2xl mt-4 tracking-wide font-semibold">2025 İlkbahar/Yaz Yeni Gelenler</div>
          <p onClick={() => navigate("/en-yeniler")} className="mt-2 underline">Keşfet</p>
        </div>
      </div> 

      <HomeCategories/>
      <AllProducts collection="Aksesuar" />
      

    </>
  )
}

export default HomePage;
