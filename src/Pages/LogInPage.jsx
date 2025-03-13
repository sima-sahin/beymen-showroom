import { useNavigate } from "react-router-dom";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuthStore from "../store/userStore";
import { useState } from "react";

const LogInPage = () => {
    const { logIn, currentUser } = useAuthStore();
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        logIn(email, password);

        if (currentUser) {
            alert(`Hoş geldin, ${currentUser.name}!`);
            navigate("/");
          } else {
            alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
          }
    };

  return (
    <div className="flex justify-center items-center my-16">
        <div className="flex w-3/4">

        {/* GİRİŞ YAP */}
        <div className="bg-zinc-100 p-10 w-1/2 mr-4">
            <h2 className="text-lg mb-6 border-b border-zinc-200 pb-2">GİRİŞ YAP</h2>
            
            <form action="submit" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-xs mb-1">E-POSTA ADRESİNİZ *</label>
                    <input
                    type="email"
                    placeholder="Lütfen e-posta adresinizi yazınız"
                    className="w-full border px-3 py-2 text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-xs mb-1">ŞİFRENİZ *</label>
                    <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Lütfen şifrenizi yazınız"
                        className="w-full border px-3 py-2 text-sm"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="absolute right-2 top-2 text-zinc-500" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                    </button>
                    </div>
                </div>

                <div className="flex items-center justify-between my-4">
                    <div className="flex">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Beni Hatırla</span>
                    </div>
                    <div className="">
                        <a href="#" className="text-xs underline">Şifremi Unuttum</a>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                    <button type="submit" className="bg-black text-white py-3 px-6 text-sm w-full font-bold tracking-wider mt-2 cursor-pointer">GİRİŞ YAP</button>
                </div>

            </form>
        </div>

        {/* ÜYE OL */}
        <div className="bg-zinc-100 p-8 w-1/2 ml-4">
            <h2 className="text-lg mb-6 border-b border-zinc-200 pb-2">ÜYE OL</h2>
            <p className="text-sm mb-4">
                Beymen.com'a üye olarak birçok avantajdan faydalanabilirsiniz. Öne çıkan avantajlar;
            </p>
            <ul className="text-sm space-y-2 px-4">
                <li className="flex items-center"><TfiAnnouncement className="text-xl mr-2"/> Kampanyalardan öncelikli olarak haberdar olabilirsiniz.</li>
                <li className="flex items-center"><TbDeviceMobileCheck className="text-2xl mr-2"/> Beymen mobil uygulamaları ile alışveriş keyfinize devam edebilirsiniz.</li>
                <li className="flex items-center"><FaRegCreditCard className="text-xl mr-2"/> The One Card'ınızı kayıt edebilir ve puanlarınızı kullanabilirsiniz.</li>
            </ul>
            <button className="w-full border py-3 mt-10 text-sm font-bold tracking-wider cursor-pointer" onClick={() => navigate("/kaydol")}>ÜYE OL</button>
        </div>

        </div>
    </div>
)
}

export default LogInPage;
