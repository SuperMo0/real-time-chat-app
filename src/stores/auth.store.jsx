import { create } from "zustand"
import { CURRENT_USER } from '../lib/fake.js'
import api from '../lib/axios.js'
import { toast } from 'react-toastify';


export const useAuthStore = create((set, get) => ({

    authUser: null,
    isSigningIn: false,
    isChecking: false,
    check: async () => {
        set({ isChecking: true })
        try {
            let res = await api.get('/auth/check');
            set({ authUser: res.data.user })
        } catch (error) {
            let message = error.response.data.message;
        }
        finally {
            set({ isChecking: false });
        }
    },

    login: async (data) => {
        set({ isSigningIn: true })
        try {
            let res = await api.post('/auth/login', data)
            set({ authUser: res.data })
        } catch (error) {
            let message = error.response.data.message;
            toast.error(message);
        }
        finally {
            set({ isSigningIn: false });
        }
    },

    signup: () => {
        api
    },
    logout: () => {
        api
    }

}))