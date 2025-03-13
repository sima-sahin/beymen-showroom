import { create } from "zustand";

const useAuthStore = create((set) => ({
    users: [], // Kullanıcı bilgilerini saklayan array
    currentUser: null, // Mevcut oturum açan kullanıcı
  
    signUp: (userData) =>
      set((state) => {
        const userExists = state.users.some(
          (user) => user.email === userData.email
        );
        if (userExists) {
          alert("Bu e-posta ile zaten bir hesap var. Lütfen giriş yapın.");
          return state;
        }
        return { users: [...state.users, userData] };
      }),
  
    logIn: (email, password) =>
      set((state) => {
        const user = state.users.find(
          (user) => user.email === email && user.password === password
        );
        if (!user) {
          alert("E-posta veya şifre hatalı. Lütfen tekrar deneyin.");
          return { currentUser: null };
        }
        return { currentUser: user };
      }),
  
    logOut: () => set({ currentUser: null }),
  }));
  
  export default useAuthStore;