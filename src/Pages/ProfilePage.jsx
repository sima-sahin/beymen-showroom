import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LiaBoxOpenSolid, LiaMapMarkerSolid, LiaUserCircle, LiaClipboardListSolid, LiaSignOutAltSolid } from "react-icons/lia";
import useAuthStore from "../store/userStore";

const ProfilePage = () => {
  const { currentUser, logOut } = useAuthStore();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
  }

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
                onClick={logOut}
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
    </div>
  );
};

export default ProfilePage;
