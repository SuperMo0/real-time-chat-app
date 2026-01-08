import { create } from "zustand"
import { CURRENT_USER, onlineUsers } from '../lib/fake.js'
import api from '../lib/axios.js'
import { toast } from 'react-toastify';
import { io } from 'socket.io-client'

let z = 0;


export const useAuthStore = create((set, get) => ({

    authUser: null,

    isSigningIn: false,

    isChecking: false,

    socket: null,

    onlineUsers: null,

    check: async () => {
        set({ isChecking: true })

        try {
            let res = await api.get('/auth/check');

            set({ authUser: res.data.user })
        } catch (error) {
            console.log(error);
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
    },

    connectSocket: () => {

        const { authUser } = get();

        if (!authUser) return;

        const socket = io("ws://localhost:3000", {
            reconnectionDelayMax: 10000,
        });

        socket.on('onlineUsers', () => {
            set({ onlineUsers: onlineUsers });
        })

        set({ socket: socket });

        return socket;
    }
}))

