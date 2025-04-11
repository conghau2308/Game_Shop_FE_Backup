import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const useAuthStore = create(
    persist(
        (set) => ({
            profile: null,
            isLogin: false,
            token: null,

            setToken: (token, profile) => {
                set({ token, profile, isLogin: true });
            },

            removeToken: () => {
                set({ token: null, profile: null, isLogin: false });
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export { useAuthStore };