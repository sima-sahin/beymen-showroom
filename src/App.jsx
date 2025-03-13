import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CollectionPage from './Pages/CollectionPage';
import DetailsPage from './Pages/DetailsPage';
import CartPage from "./Pages/CartPage";
import FavouritesPage from "./Pages/FavouritesPage";
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import useAuthStore from './store/userStore';
import AddressPage from "./Pages/User/AddressPage";
import OrdersPage from "./Pages/User/OrdersPage";
import UserInfoPage from "./Pages/User/UserInfoPage";
import RebornFormPage from "./Pages/User/RebornFormPage";
import ProductQuestionsPage from "./Pages/User/ProductQuestionsPage";


function App() {

  const { currentUser } = useAuthStore();
  
//   useEffect(() => {
//     localStorage.removeItem("cart-storage");
//     console.log("LocalStorage temizlendi!");
//   }, []);

  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/giyim" element={<CollectionPage collection="Giyim" />} />
        <Route path="/canta" element={<CollectionPage collection="Çanta" />} />
        <Route path="/ayakkabi" element={<CollectionPage collection="Ayakkabı" />} />
        <Route path="/aksesuar" element={<CollectionPage collection="Aksesuar" />} />
        <Route path="/cok-satanlar" element={<CollectionPage collection="cok-satanlar" />} />
        <Route path="/en-yeniler" element={<CollectionPage collection="en-yeniler" />} />
        <Route path="/outlet" element={<CollectionPage collection="outlet" />} />
        <Route path="/reborn" element={<CollectionPage collection="Reborn" />} />
        <Route path="/reborn-bags" element={<CollectionPage collection="reborn-bags" />} />
        <Route path="/reborn-shoes" element={<CollectionPage collection="reborn-shoes" />} />
        <Route path="/prada" element={<CollectionPage collection="prada" />} />
        <Route path="/off-white" element={<CollectionPage collection="off-white" />} />
        <Route path="/valentino-garavani" element={<CollectionPage collection="valentino-garavani" />} />
        <Route path="/miu-miu" element={<CollectionPage collection="miu-miu" />} />
        <Route path="/bottega-veneta" element={<CollectionPage collection="bottega-veneta" />} />

        <Route path="/elbise" element={<CollectionPage collection="Elbise" />} />
        <Route path="/pantolon" element={<CollectionPage collection="Pantolon" />} />
        <Route path="/ceket" element={<CollectionPage collection="Ceket" />} />
        <Route path="/bluz" element={<CollectionPage collection="Bluz" />} />
        <Route path="/body" element={<CollectionPage collection="Body" />} />
        <Route path="/gömlek" element={<CollectionPage collection="Gömlek" />} />
        <Route path="/çanta" element={<CollectionPage collection="Çanta" />} />
        <Route path="/topuklu-ayakkabı" element={<CollectionPage collection="Topuklu Ayakkabı"/>} />
        <Route path="/çizme" element={<CollectionPage collection="Çizme" />} />
        <Route path="/bot" element={<CollectionPage collection="Bot" />} />
        <Route path="/küpe" element={<CollectionPage collection="Küpe" />} />
        <Route path="/gözlük" element={<CollectionPage collection="Gözlük" />} />
        <Route path="/kemer" element={<CollectionPage collection="Kemer" />} />
        <Route path="/kolye" element={<CollectionPage collection="Kolye" />} />
        <Route path="/cüzdan" element={<CollectionPage collection="Cüzdan" />} />

        <Route path="/sepet" element={<CartPage />} />
        <Route path="/favoriler" element={<FavouritesPage />} />
        <Route path="/kaydol" element={<SignUpPage />} />
        <Route path="/giris-yap" element={<LogInPage />} />

        <Route path="/hesabim" element={currentUser ? <ProfilePage /> : <Navigate to="/giris-yap" />} >
          <Route path="siparislerim" element={<OrdersPage />} />
          <Route path="adres-bilgilerim" element={<AddressPage />} />
          <Route path="uyelik-bilgilerim" element={<UserInfoPage />} />
          <Route path="reborn-basvuru" element={<RebornFormPage />} />
          <Route path="urun-sorularim" element={<ProductQuestionsPage />} />
        </Route>

        <Route path="/:slug" element={<DetailsPage/>} />

      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
    
  )
}

export default App;
