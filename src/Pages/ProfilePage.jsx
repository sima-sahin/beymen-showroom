import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LiaBoxOpenSolid, LiaMapMarkerSolid, LiaUserCircle, LiaClipboardListSolid, LiaSignOutAltSolid } from "react-icons/lia";
import { useState } from "react";
import useAuthStore from "../store/userStore";

const ProfilePage = () => {
  const { currentUser, logOut } = useAuthStore();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!currentUser) {
    navigate("/login");
  }

  const handleLogout = () => {
    setIsModalOpen(true); // Modalı aç
  };

  const confirmLogout = () => {
    logOut(); // Çıkış yap
    setIsModalOpen(false); // Modalı kapat
  };

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-1/4 bg-white p-8 pl-10">
        <nav className="">

          <div className="border-b border-zinc-200 hover:bg-zinc-100">
            <NavLink
                to="/hesabim/siparislerim"
                className={({ isActive }) =>
                `flex items-center gap-2 pl-6 py-7 border-l-3 ${isActive ? "border-black" : "border-transparent"}`
                }>
                <LiaBoxOpenSolid className="text-3xl" />
                <span>Siparişlerim</span>
            </NavLink>
          </div>

          <div className="border-b border-zinc-200 hover:bg-zinc-100">
            <NavLink
                to="/hesabim/adres-bilgilerim"
                className={({ isActive }) =>
                `flex items-center gap-2 pl-6 py-7 border-l-3 ${isActive ? "border-black" : "border-transparent"} `
                }>
                <LiaMapMarkerSolid className="text-3xl" />
                <span>Adres Bilgilerim</span>
            </NavLink>
          </div>

          <div className="border-b border-zinc-200 hover:bg-zinc-100">
            <NavLink
                to="/hesabim/uyelik-bilgilerim"
                className={({ isActive }) =>
                `flex items-center gap-2 pl-6 py-7 border-l-3 ${isActive ? "border-black" : "border-transparent"}`
                }>
                <LiaUserCircle className="text-3xl" />
                <span>Üyelik Bilgilerim</span>
            </NavLink>
          </div>

          <div className="border-b border-zinc-200 hover:bg-zinc-100">
            <NavLink
                to="/hesabim/reborn-basvuru"
                className={({ isActive }) =>
                `flex items-center gap-2 pl-6 py-7 border-l-3 ${isActive ? "border-black" : "border-transparent"}`
                }>
                <LiaClipboardListSolid className="text-3xl" />
                <span>Reborn Başvuru Formu</span>
            </NavLink>
          </div>

          <div className="border-b border-zinc-200 hover:bg-zinc-100">
            <NavLink
                to="/hesabim/urun-sorularim"
                className={({ isActive }) =>
                `flex items-center gap-2 pl-6 py-7 border-l-3 ${isActive ? "border-black" : "border-transparent"}`
                }>
                <HiOutlineChatBubbleLeftRight className="text-3xl" />
                <span>Ürün Sorularım</span>
            </NavLink>
          </div>

          <div className="border-b border-zinc-200 hover:bg-zinc-100 cursor-pointer">
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 pl-6 py-7 border-l-3 border-transparent hover:bg-zinc-100 w-full text-left cursor-pointer">
                <LiaSignOutAltSolid className="text-3xl"/>
                <span>Çıkış Yap</span>
            </button>
          </div>

        </nav>
      </aside>

      {/* İçerik Alanı */}
      <main className="w-3/4 p-6">
        <Outlet /> {/* SAYFA İÇERİĞİ */}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Çıkış yapmak istediğinize emin misiniz?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 hover:bg-gray-500">
                Vazgeç
              </button>
              <button
                onClick={confirmLogout}
                className="bg-black text-white px-4 py-2 hover:bg-zinc-700">
                Evet, çıkış yap
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default ProfilePage;
