import { create } from "zustand"
import { CURRENT_USER } from './../lib/fake.js'

export const useAuthStore = create((set, get) => ({

    authUser: null,
    loading: false,

    check: () => {
        set({ authUser: CURRENT_USER });
    }
}))