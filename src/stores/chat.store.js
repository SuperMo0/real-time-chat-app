import { create } from "zustand"
import api from "../lib/axios.js";
import { toast } from "react-toastify";
import { getFriend } from "../utils/utils.js";
import { useAuthStore } from "./auth.store.jsx";
import { io } from 'socket.io-client'
import { message } from "../lib/fake.js";



export const useChatStore = create((set, get) => ({

    isLoading: false,

    messages: null,

    friends: null,

    chats: null,

    users: null,

    onlineUsers: null,

    selectedFriend: null,

    selectedChat: null,

    requestsByUser: null,

    requestsToUser: null,

    getFriends: async () => {
        try {
            let result = await api.get('/app/friends');
            let friends = result.data.friends;
            set({ friends: friends })
        } catch (error) {
            toast.error("couldn't get your chats please try again later");
        }
    },

    getChats: async () => {
        try {
            let result = await api.get('/app/chats');
            let chats = result.data.chats;

            set({ chats: chats })
        } catch (error) {
            toast.error("couldn't get your chats please try again later");
        }
    },

    getUsers: async () => {
        const result = await api('/app/users');
        const users = result.data.users
        set({ users: users });
    },

    setSelectedChat: (selectedChat) => {
        set({ selectedChat: selectedChat });

        let friend = getFriend(useAuthStore.getState().authUser.id, selectedChat);

        set({ selectedFriend: friend });
    },


    getMessages: async () => {
        const { selectedChat } = get();

        let result = await api.get(`/app/chat/${selectedChat.id}/messages`);

        let messages = result.data.messages;

        set({ messages: messages });
    },



    sendMessage: async (content) => {
        try {
            const { selectedChat } = get();
            const result = await api.post(`app/message/${selectedChat.id}`, { content })

        } catch (error) {
            toast.error("couldn't send message please try again");
            throw error;
        }

    },

    getRequestsByUser: async () => {
        try {
            const result = await api.get('/app/requests/by');
            const requestsBy = result.data.requestsBy;
            set({ requestsByUser: requestsBy });
        } catch (error) {
            console.log(error);
        }
    },

    getRequestsToUser: async () => {
        const result = await api.get('/app/requests/to');
        const requestsTo = result.data.requestsTo;
        set({ requestsToUser: requestsTo });
    },

    connectSocket: () => {

        const { authUser } = useAuthStore.getState();

        if (!authUser) return;


        const socket = io("ws://localhost:3000", {
            reconnectionDelayMax: 10000,
            withCredentials: true,
        });

        socket.on('onlineUsers', (onlineUsers) => {
            set({ onlineUsers: onlineUsers });
        })

        socket.on("chatUpdate", (chat) => {

            console.log(chat);

            const { chats } = get();

            const newChats = chats.filter((c) => c.id != chat.id);

            if (get().selectedChat.id == chat.id) {
                const messages = get().messages || [];          // we should have a state isGettingMessages to avoid race conditions
                set({ messages: [...messages, chat.lastMessage] });
            }
            set({ chats: [...newChats, chat] });
        })

        socket.on("friendsUpdate", (friend) => {
            const { friends } = get();
            set({ friends: [...friends, friend] });
        })

        socket.on("requestsToUserUpdate", (request) => {
            const { requestsToUser } = get();
            set({ requestsToUser: [...requestsToUser, request] });
        })

        set({ socket: socket });

        return socket;
    }



}))