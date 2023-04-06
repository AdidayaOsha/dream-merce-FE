// CORE
import { create } from 'zustand';

// TYPE
import type User from '@/interfaces/UserInterface';

type AuthStore = {
   isLoggedIn: boolean;
   user: User | undefined;
   login: (user: User) => void;
   logout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
   isLoggedIn: false,
   user: undefined,
   login: (user: User) => set((state) => ({ ...state, isLoggedIn: true, user })),
   logout: () => set((state) => ({ ...state, isLoggedIn: false, user: undefined })),
}));

export default useAuthStore;
