import { useState } from "react";
import useAuthStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const SignUpPage = () => {

  const { signUp } = useAuthStore();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthDate: { day: "", month: "", year: "" },
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
    navigate("/giris-yap");
  };

  return (
    <div className="flex justify-center items-center min-h-screen mb-18 mt-6">
      <div className="bg-white py-8 px-12  w-135 bg-zinc-100">
        <h2 className="text-lg mb-6 border-b border-zinc-200 pb-2">ÜYE OL</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ad */}
          <div className="mb-7">
            <label className="block text-[13px] mb-1">ADINIZ *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#fafafa] text-zinc-500 w-full border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              placeholder="Lütfen adınızı yazınız"
              required
            />
          </div>

          {/* Soyad */}
          <div className="mb-7">
            <label className="block text-[13px] font-medium mb-1">SOYADINIZ *</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="bg-[#fafafa] text-zinc-500 w-full border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              placeholder="Lütfen soyadınızı yazınız"
              required
            />
          </div>

          {/* E-posta */}
          <div className="mb-7">
            <label className="block text-[13px] font-medium mb-1">E-POSTA ADRESİNİZ *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#fafafa] text-zinc-500 w-full border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              placeholder="Lütfen e-posta adresinizi yazınız"
              required
            />
          </div>

          {/* Telefon */}
          <div className="mb-7">
            <label className="block text-[13px] font-medium mb-1">CEP TELEFONUNUZ *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#fafafa] text-zinc-500 w-full border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              placeholder="555-555-55-55"
              required
            />
          </div>

          {/* Doğum Tarihi */}
          <div className="mb-7">
            <label className="block text-[13px] font-medium mb-1">DOĞUM TARİHİNİZ</label>
            <div className="flex space-x-2">
              <select
                name="birthDay"
                value={formData.birthDay}
                onChange={handleChange}
                className="bg-[#fafafa] text-zinc-500 w-1/3 border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              >
                <option>Gün</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                className="bg-[#fafafa] text-zinc-500 w-1/3 border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              >
                <option>Ay</option>
                {["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"].map((month, i) => (
                  <option key={i}>{month}</option>
                ))}
              </select>
              <select
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                className="bg-[#fafafa] text-zinc-500 w-1/3 border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300 text-sm"
              >
                <option>Yıl</option>
                {[...Array(100)].map((_, i) => (
                  <option key={i}>{new Date().getFullYear() - i}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Cinsiyet */}
          <div className="mb-7">
            <label className="block text-[13px] font-medium mb-1">CİNSİYETİNİZ</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Kadın"
                  onChange={handleChange}
                  className="mr-2"
                />
                Kadın
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Erkek"
                  onChange={handleChange}
                  className="mr-2"
                />
                Erkek
              </label>
            </div>
          </div>

          {/* Şifre */}
          <div className="mb-4">
            <label className="block text-[13px] font-medium mb-1">ŞİFRENİZ *</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-[#fafafa] text-zinc-500 w-full border border-zinc-300 p-2 px-4 focus:outline-none focus:ring focus:ring-zinc-300"
                placeholder="Lütfen şifrenizi yazınız"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-black"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
              </button>
            </div>
          </div>

          {/* Buton */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 hover:bg-zinc-700 transition my-4 cursor-pointer">ÜYE OL
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
