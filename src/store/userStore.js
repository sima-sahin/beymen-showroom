import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(persist(
  (set, get) => ({
    users: [], // Kullanıcı bilgilerini saklayan array
    currentUser: null, // Mevcut oturum açan kullanıcı

    signUp: (userData) => {
      const { users } = get();
      const userExists = users.some((user) => user.email === userData.email);
      if (userExists) {
        alert("Bu e-posta ile zaten bir hesap var. Lütfen giriş yapın.");
        return;
      }
      set({ users: [...users, userData] });
    },

    logIn: (email, password) => {
      const { users } = get();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        alert("E-posta veya şifre hatalı. Lütfen tekrar deneyin.");
        return;
      }
      set({ currentUser: user });
    },

    logOut: () => set({ currentUser: null }),
  }),
  {
    name: "auth-storage",
    getStorage: () => localStorage,
  }
)
);
  
  export default useAuthStore;